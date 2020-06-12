import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  wrapperLeft: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: '-30%',
    borderColor: colors.primary,
    borderTopWidth: 50,
    borderBottomRightRadius: 100,
  },
  wrapperRight: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    right: '-30%',
    borderColor: colors.primary,
    borderTopWidth: 50,
    borderTopLeftRadius: 100,
  },

  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: colors.dark,
  },
  subtitle: {
    fontSize: 18,
    paddingBottom: 50,
    color: colors.dark,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
