import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PhotoGallery from 'src/components/User/PhotoGallery';

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

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} variant="scrollable" onChange={handleChange} aria-label="scrollable auto tabs example">
          <Tab label="Mes informations" {...a11yProps(0)} />
          <Tab label="Mes messages" {...a11yProps(1)} />
          <Tab label="Mes fichiers" {...a11yProps(2)} />
          <Tab label="Mes photos" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ul>
          <li>Mon Nom</li>
          <li>Mon Prénom</li>
          <li>Mon Email</li>
          <li>Mon numéro de Téléphone</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam officia sed cumque incidunt enim tempore quod ipsa rerum nam, consequuntur est natus vitae corporis molestiae accusantium, architecto dolorem earum.</li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="CONVOCATION"
              secondary={(
                <React.Fragment>
                  <Typography component="span" variant="body2" color="textPrimary" />
                  {"convocation à l'assemblée générale du 13 septembre 2019"}
                </React.Fragment>
              )}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="INSCRIPTION"
              secondary={(
                <React.Fragment>
                  <Typography component="span" variant="body2" color="textPrimary" />
                  {'En prévision de notre événement du 12 octobre, il reste encore 5 places à pourvoir à la buvette'}
                </React.Fragment>
              )}
            />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quis quod laboriosam ipsum velit sapiente vitae nam blanditiis error atque maiores, eligendi id ullam rerum alias quia nulla exercitationem! Impedit vel nobis itaque et dolor est explicabo mollitia quia. Numquam quos quis error quae, accusantium molestias expedita vitae culpa sequi.</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PhotoGallery />
      </TabPanel>
    </div>
  );
}
