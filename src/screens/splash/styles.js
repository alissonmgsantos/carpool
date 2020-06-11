import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: Colors.light,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
});

export default styles;
