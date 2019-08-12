import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PhotoGallery from 'src/components/User/PhotoGallery';
import dateParser from 'src/utils/dateParser';

import './profile.scss';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


class Profile extends React.Component {
  state = { value: 0 }

  privatePostProfile = null;

  componentWillMount() {
    const { setPrivatePosts } = this.props;
    setPrivatePosts();
  }
  
  componentDidMount() {
    const { setPrivatePosts } = this.props;
    setPrivatePosts();
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }

  render() {

    const { loading, privatePost, createdAt } = this.props;
    // console.log(privatePost['hydra:member']);
    const privatePostLoaded = privatePost['hydra:member'];
    console.log(privatePostLoaded);
    // const date = dateParser(createdAt);


    if (!loading && privatePostLoaded !== undefined) {
      if (privatePostLoaded.length !== 0) {

        this.privatePostProfile = (
          <div>
            {privatePostLoaded.map(item => (
              
              <ListItem alignItems="flex-start" key={item.id}>
                <ListItemText
                  primary={item.title}
                  secondary={(
                    <React.Fragment>
                      <Typography variant="h4">publié le {dateParser(item.createdAt).dayNumber} {dateParser(item.createdAt).day} {dateParser(item.createdAt).month} {dateParser(item.createdAt).itemYear}</Typography>
                      <Typography component="span" variant="body2" color="textPrimary" dangerouslySetInnerHTML={{ __html: item.content }} />
                    </React.Fragment>
                        )}
                    />
                <Divider variant="inset" />
              </ListItem>
             
            ))}
          </div>
        );
      }
      else {
        this.privatePostProfile = <p>Aucune actualité interne</p>;
      }
    }


    return (
      <div className="profile">
        <AppBar position="static">
          <Tabs value={this.state.value} variant="scrollable" onChange={this.handleChange} aria-label="scrollable auto tabs example">
            <Tab label="Mes informations" {...a11yProps(0)} />
            <Tab label="Mes messages" {...a11yProps(1)} />
            <Tab label="Mes fichiers" {...a11yProps(2)} />
            <Tab label="Mes photos" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          <ul>
            <li>Mon Nom</li>
            <li>Mon Prénom</li>
            <li>Mon Email</li>
            <li>Mon numéro de Téléphone</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam officia sed cumque incidunt enim tempore quod ipsa rerum nam, consequuntur est natus vitae corporis molestiae accusantium, architecto dolorem earum.</li>
          </ul>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>          
          {this.privatePostProfile}                
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quis quod laboriosam ipsum velit sapiente vitae nam blanditiis error atque maiores, eligendi id ullam rerum alias quia nulla exercitationem! Impedit vel nobis itaque et dolor est explicabo mollitia quia. Numquam quos quis error quae, accusantium molestias expedita vitae culpa sequi.</p>
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <PhotoGallery />
        </TabPanel>
      </div>
    );
  }
}

export default Profile;
