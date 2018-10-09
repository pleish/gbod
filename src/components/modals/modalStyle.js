import { StyleSheet } from "react-native";

const COLORS = require("../../styles/Colors");

module.exports = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.TRANSPARENTOVERLAY
  },
  modalCard: {
    flexDirection: "column",
    padding: 12,
    backgroundColor: COLORS.PRIMARYCOLOR,
    borderRadius: 5,
    elevation: 5
  },
  modalHeader: {
    flexDirection: "row"
  },
  modalHeaderText: {
    color: COLORS.TEXTCOLOR,
    fontSize: 22,
    fontWeight: "bold",
    textAlignVertical: "center",
    includeFontPadding: false,
    marginBottom: 15
  },
  cardColumnsContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  leftColumn: {
    flexDirection: "column",
    justifyContent: "center"
  },
  leftItem: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 35
  },
  rightColumn: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 10
  },
  rightItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 35
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalText: {
    color: COLORS.ACTIVECOLOR,
    fontSize: 18,
    textAlignVertical: "center",
    includeFontPadding: false,
    marginBottom: 12
  },
  modalTextInput: {
    color: COLORS.ACTIVECOLOR,
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "center",
    alignItems: "center",
    includeFontPadding: false,
    padding: 0
  },
  unselectedTextButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.INACTIVECOLOR,
    textAlignVertical: "center",
    includeFontPadding: false,
    margin: 12
  },
  selectedTextButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.SECONDARYCOLOR,
    textAlignVertical: "center",
    includeFontPadding: false,
    margin: 20
  },
  picker: {
    color: COLORS.SECONDARYCOLOR,
    width: 100
  },
  textInputContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: 6
  },
  timeColon: {
    fontSize: 18,
    textAlignVertical: "center",
    includeFontPadding: false,
    marginBottom: 12,
    color: COLORS.INACTIVECOLOR,
    fontWeight: "bold",
    paddingTop: 12
  },
  secInputContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
