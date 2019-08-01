import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './cgu.scss';

class CGU extends React.Component {
  componentWillMount() {
    const { setCGUData } = this.props;
    setCGUData();
  }

  render() {
    const { CGUData } = this.props;

    return (
      <Container className="mentions whitebox">
        {CGUData.map(item => (
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

export default CGU;

CGU.propTypes = {
  CGUData: PropTypes.array.isRequired,
  setCGUData: PropTypes.func.isRequired,
};

