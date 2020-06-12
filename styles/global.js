import {StyleSheet} from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  input: {
    width: '100%',
    height: 60,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
  },

  buttonSubmit: {
    width: 200,
    height: 50,
    borderRadius: 50,
    margin: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.light,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default globalStyles;
