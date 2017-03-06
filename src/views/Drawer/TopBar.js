import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';

function wrapInTouchable(element, cb) {
  return (
    <TouchableOpacity onPress={cb}>
      {element}
    </TouchableOpacity>
  );
}

function TopBar(props) {
  let leftButton, rightButton;
  switch (props.openDrawerWhen) {
    case 'Left':
      leftButton = wrapInTouchable(props.leftButton, props.onDrawerOpen);
      rightButton = props.rightButton;
      break;
    case 'Right':
      leftButton = props.leftButton;
      rightButton = wrapInTouchable(props.rightButton, props.onDrawerOpen);
      break;
    default:
      leftButton = props.leftButton;
      rightButton = props.rightButton;
  }
  return (
    <NavigationBar
      title={{ title: props.title }}
      leftButton={leftButton}
      rightButton={rightButton}
      style={props.style || {}}
    />
  );
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  rightButton: PropTypes.element.isRequired,
  leftButton: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default TopBar;
