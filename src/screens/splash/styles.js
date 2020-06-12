import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
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
});

export default styles;
