import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';


class CGV extends React.Component {
  componentWillMount() {
    const { setCGVData } = this.props;
    setCGVData();
  }

  render() {
    const { CGVData } = this.props;

    return (
      <Container className="mentions">
        {CGVData.map(item => (
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

export default CGV;

CGV.propTypes = {
  CGVData: PropTypes.array.isRequired,
  setCGVData: PropTypes.func.isRequired,
};

