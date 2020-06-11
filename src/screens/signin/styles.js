import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperLeft: {
    position: 'absolute',
    alignContent: 'flex-start',
    backgroundColor: '#385afa',
    width: '100%',
    height: 70,
    top: 0,
    left: '-30%',
    borderBottomRightRadius: 100,
    marginBottom: 100,
  },
  wrapperRight: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    backgroundColor: '#385afa',
    width: '100%',
    height: 70,
    top: 100,
    right: '-30%',
    borderTopLeftRadius: 100,
    marginTop: 50,
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    paddingBottom: 50,
  },
  form: {
    marginTop: 50,
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#dcdce6',
    borderColor: '#dcdce6',
    borderRadius: 50,
    paddingLeft: 24,
    paddingRight: 24,
    margin: 10,
  },

  buttonSubmit: {
    width: 200,
    height: 50,
    borderRadius: 50,
    margin: 10,
    backgroundColor: '#385afa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
