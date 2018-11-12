import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ScreenTemplate from "../templates/ScreenTemplate";
import Icon from "react-native-vector-icons/FontAwesome5";

const COLORS = require("../../styles/Colors");
const TEXTSTYLE = require("../../styles/TextStyle");
const scrollContent = [];

class Settings extends Component {
  render() {
    return (
      <ScreenTemplate
        headerContent={
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 15
            }}
          >
            <Text style={TEXTSTYLE.headerText}>Settings</Text>
          </View>
        }
        scrollContent={scrollContent}
      />
    );
  }
}

export default Settings;
