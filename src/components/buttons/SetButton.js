import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setComplete, setIncomplete } from '../../redux/actions/setButtonActions';

const TEXTSTYLE = require('../../styles/TextStyle');
const CONTAINERSTYLE = require('../../styles/ContainerStyle');

const activeButton = CONTAINERSTYLE.activeSetButton;
const inactiveButton = CONTAINERSTYLE.inactiveSetButton;
const activeText = TEXTSTYLE.activeSetButtonText;
const inactiveText = TEXTSTYLE.inactiveSetButtonText;

class SetButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      buttonColor: inactiveButton,
      textColor: inactiveText,
    };
  }

  onPress = () => {
    if (this.state.active) {
      this.setState({
        active: false, buttonColor: inactiveButton, textColor: inactiveText
      });
      this.props.setIncomplete(this.props.setId);
      console.log(this.props.setId)
    } else {
      this.setState({
        active: true, buttonColor: activeButton, textColor: activeText
      });
      this.props.setComplete(this.props.setId);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={this.state.buttonColor}>
          <Text style={this.state.textColor}>
            {this.props.content}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

SetButton.propTypes = {
  exerciseId: PropTypes.number,
  setId: PropTypes.number,
  content: PropTypes.string,
  setComplete: PropTypes.func,
  setIncomplete: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    setComplete: (setId) => {
      dispatch(setComplete(setId));
    },
    setIncomplete: (setId) => {
      dispatch(setIncomplete(setId));
    }
  };
};

export default connect(null, mapDispatchToProps)(SetButton);