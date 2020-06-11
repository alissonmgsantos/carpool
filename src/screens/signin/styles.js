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
  input: {
    backgroundColor: 'red',
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    borderRadius: 2,
  },
});

export default styles;
