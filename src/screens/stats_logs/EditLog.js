import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ScreenTemplate from "../templates/ScreenTemplate";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getActiveWorkoutCards,
  getActiveWorkoutTitle
} from "../../redux/selectors/activeWorkoutSelectors";
import Icon from "react-native-vector-icons/FontAwesome5";
import FinishButton from "../../components/buttons/FinishButton";
import AddExerciseToWorkoutModal from "../../components/modals/AddExerciseToWorkoutModal";
import NoteModal from "../../components/modals/NoteModal";
import Fab from "../../components/buttons/Fab";
import NoteButton from "../../components/buttons/NoteButton";
import {
  updateActiveDay,
  dayBarPress,
  shiftDayDown,
  shiftDayUp
} from "../../redux/actions/activeWorkoutActions";
import { getLogTitle } from "../../redux/selectors/logsSelectors";

const COLORS = require("../../styles/Colors");
const STYLE = require("./editLogStyle");

class EditLog extends Component {
  state = {
    addExerciseModalVisible: false,
    noteModalVisible: false
  };

  componentWillReceiveProps(newProps) {}

  _addExercisePress = () => {
    this.setState({ addExerciseModalVisible: true });
  };

  _notePress = () => {
    this.setState({ noteModalVisible: true });
  };

  _backArrow = () => {
    this.props.navigation.goBack();
  };

  closeModal = () => {
    this.setState({
      editDayModalVisible: false,
      newDayModalVisible: false,
      addExerciseModalVisible: false,
      noteModalVisible: false
    });
  };

  render() {
    const { title, cards } = this.props;
    const { addExerciseModalVisible, noteModalVisible } = this.state;
    return (
      <ScreenTemplate
        headerContent={
          <View style={STYLE.headerContent}>
            <NoteModal
              closeModal={this.closeModal}
              visible={noteModalVisible}
            />
            <TouchableOpacity onPress={this._backArrow}>
              <Icon
                name={"arrow-left"}
                size={25}
                color={COLORS.SECONDARYCOLOR}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={STYLE.headerText}>EDIT LOG</Text>
            </TouchableOpacity>

            <NoteButton onPress={this._notePress} />
          </View>
        }
        subHeaderContent={
          <TouchableOpacity activeOpacity={0.6} onPress={this._dayBarPress}>
            <View style={STYLE.subHeader}>
              <Text style={[STYLE.headerText, { fontSize: 18, padding: 6 }]}>
                {title}
              </Text>
              <FinishButton />
              <AddExerciseToWorkoutModal
                closeModal={this.closeModal}
                visible={addExerciseModalVisible}
              />
            </View>
          </TouchableOpacity>
        }
        scrollContent={cards}
        footer={<Fab onPress={this._addExercisePress} />}
      />
    );
  }
}

EditLog.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object
};

const mapStateToProps = state => {
  return {
    title: getLogTitle(state.workoutData),
    cards: getActiveWorkoutCards(state.workoutData)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLog);
