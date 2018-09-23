import { StyleSheet, Dimensions } from 'react-native';

const COLORS = require('./Colors');

module.exports = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    paddingTop: 15,
    paddingBottom: 12,
    backgroundColor: COLORS.BACKCOLOR,
    elevation: 4,
  },
  subHeader: {
    width: Dimensions.get('window').width,
    paddingTop: 15,
    paddingBottom: 12,
    backgroundColor: COLORS.BACKCOLOR,
    elevation: 0,
  },
  scrollArea: {
    flexGrow: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: COLORS.BACKCOLOR
  },
  card: {
    flexDirection: 'column',
    width: (Dimensions.get('window').width - 24),
    alignSelf: 'flex-start',
    backgroundColor: COLORS.PRIMARYCOLOR,
    margin: 12,
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 2
  },
  listCard: {
    flexDirection: 'column',
    width: (Dimensions.get('window').width - 24),
    alignSelf: 'flex-start',
    backgroundColor: COLORS.PRIMARYCOLOR,
    borderRadius: 5,
    elevation: 2
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.BACKCOLOR,
    borderBottomWidth: 1
  },
  moreMenu: {
    flexDirection: 'column',
    backgroundColor: COLORS.PRIMARYCOLOR,
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 4
  }
});