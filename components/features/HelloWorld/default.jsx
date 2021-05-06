import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = (props) => {
  const { name, display, textColor } = props.customFields;
  return display ? <h1 style={{ color: textColor }}>Hello, {name}!</h1> : '';
};

HelloWorld.label = "Hello World - Custom Block";

HelloWorld.propTypes = {
  customFields: PropTypes.shape({
    name: PropTypes.string.tag({
      name: 'First Name',
    }),
    display: PropTypes.boolean,
    textColor: PropTypes.string,
  }),
};

export default HelloWorld;
