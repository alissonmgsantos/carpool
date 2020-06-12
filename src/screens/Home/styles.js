import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light,
    height: 80,
    elevation: 3,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
  },
  cardHeader: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: colors.dark,
  },
  cardSubtitle: {
    color: colors.dark,
    fontSize: 16,
  },
  cardTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
