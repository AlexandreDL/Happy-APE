import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


class CGV extends React.Component {
  componentWillMount() {
    const { setCGVData } = this.props;
    setCGVData();
  }

  render() {
    const { CGVData } = this.props;

    return (
      <Container className="mentions whitebox">
        {CGVData.map(item => (
          <div className="mentions-content" key={item.id}>    
            <Typography variant="h1">{item.title}</Typography>
            <Typography variant="body1">{item.content}</Typography>
          </div>
        ))
          }
      </Container>
    );
  }
}

export default CGV;

CGV.propTypes = {
  CGVData: PropTypes.array.isRequired,
  setCGVData: PropTypes.func.isRequired,
};

