import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';


class CGU extends React.Component {
  componentWillMount() {
    const { setCGUData } = this.props;
    setCGUData();
  }

  render() {
    const { CGUData } = this.props;

    return (
      <Container className="mentions">
        {CGUData.map(item => (
          <div className="mentions-content" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
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

