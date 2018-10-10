import React, { Component } from "react";
import { View, Text, TouchableOpacity, Picker } from "react-native";
import ScreenTemplate from "../templates/ScreenTemplate";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getActiveWorkoutCards,
  getActiveWorkoutTitle
} from "../../redux/selectors/activeWorkoutSelectors";
import Icon from "react-native-vector-icons/FontAwesome5";
import FinishButton from "../../components/buttons/FinishButton";
import ResetButton from "../../components/buttons/ResetButton";
import SetTimer from "../../components/timers/SetTimer";
import EditDayModal from "../../components/modals/EditDayModal";
import Fab from "../../components/buttons/Fab";
import {
  updateActiveDay,
  updateDayData
} from "../../redux/actions/activeWorkoutActions";

const COLORS = require("../../styles/Colors");
const STYLE = require("./workoutStyle");

const ICON_SIZE = 25;
const ICON_NAME = "cog";

let prevDay;
let prevDays;

class ActiveWorkout extends Component {
  state = {
    editDayModalVisible: false,
    day: this.props.activeDay,
    days: this.props.days
  };

  componentDidMount() {
    prevDay = this.props.activeDay;
    prevDays = this.props.days;
  }

  componentWillReceiveProps(newProps) {
    if (this.state.day !== newProps.activeDay) {
      this.setState({ day: newProps.activeDay });
    }
    if (this.state.days !== newProps.days) {
      this.setState({ days: newProps.days });
    }
  }

  switchDay = dayId => {
    let nameChange = false;
    for (let i = 0; i < this.state.days.length; i++) {
      if (this.state.days[i].name !== prevDays[i].name) {
        nameChange = true;
        break;
      }
    }
    if (nameChange) {
      prevDays = this.state.days;
      this.setState({ day: prevDay });
    } else {
      prevDay = dayId;
      this.props.updateActiveDay(dayId);
    }
  };

  _dayMenuOnPress = () => {
    this.setState({ editDayModalVisible: true });
  };

  _settingsOnPress = () => {};

  closeModal = () => {
    this.setState({ editDayModalVisible: false });
  };

  render() {
    const { title, cards } = this.props;
    const { editDayModalVisible, day, days } = this.state;
    return (
      <ScreenTemplate
        headerContent={
          <View style={STYLE.headerContent}>
            {title}

            <View style={STYLE.timerSettingsContainer}>
              <SetTimer />
              <TouchableOpacity onPress={this._settingsOnPress}>
                <Icon
                  name={ICON_NAME}
                  size={ICON_SIZE}
                  color={COLORS.SECONDARYCOLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
        subHeaderContent={
          <View style={STYLE.subHeader}>
            <Picker
              style={STYLE.picker}
              selectedValue={day}
              onValueChange={this.switchDay}
            >
              {createItems(days)}
            </Picker>
            <EditDayModal
              title={title}
              closeModal={this.closeModal}
              visible={editDayModalVisible}
            />
            <View style={STYLE.menuPlusContainer}>
              <TouchableOpacity>
                <Icon name={"plus"} size={23} color={COLORS.SECONDARYCOLOR} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._dayMenuOnPress}>
                <Icon
                  name={"ellipsis-h"}
                  size={ICON_SIZE}
                  color={COLORS.SECONDARYCOLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
        scrollContent={cards}
        endOfScrollContent={
          <View style={STYLE.footerContainer}>
            <ResetButton />
            <FinishButton />
          </View>
        }
        footer={<Fab onPress={this._newExercisePress} />}
      />
    );
  }
}

const createItems = items => {
  return items.map((item, index) => (
    <Picker.Item key={index} label={item.name} value={item.id} />
  ));
};

ActiveWorkout.propTypes = {
  title: PropTypes.object,
  cards: PropTypes.arrayOf(PropTypes.object),
  days: PropTypes.arrayOf(PropTypes.object),
  activeDay: PropTypes.number,
  updateActiveDay: PropTypes.func,
  updateDayData: PropTypes.func
};

const mapStateToProps = state => {
  return {
    title: getActiveWorkoutTitle(state.workoutData),
    cards: getActiveWorkoutCards(state.workoutData),
    activeDay: state.workoutData.activeWorkout.day,
    days:
      state.workoutData.programs[state.workoutData.activeWorkout.program].days
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDay: dayId => {
      dispatch(updateActiveDay(dayId));
    },
    updateDayData: (dayId, name, remove) => {
      dispatch(updateDayData(dayId, name, remove));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveWorkout);
