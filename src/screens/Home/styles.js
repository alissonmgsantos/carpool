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
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: '600',
  },
  cardTime: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
