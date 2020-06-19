import React, {useEffect, useState} from 'react';
import {Text, Image, StatusBar, SafeAreaView} from 'react-native';

import styles from './styles';
import mobilityImg from '../../../assets/img/mobility.png';
const Splash = ({navigation}) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    function loadSplash() {
      setTimeout(() => {
        navigation.navigate('Signin');
      }, 5000);
      setLoad(!load);
    }
    if (!load) {
      loadSplash();
    }
  }, [navigation, load]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Image source={mobilityImg} style={styles.logo} />
      <Text style={styles.title}>CarPool</Text>
      <Text style={styles.subtitle}>Facilidade para se mover</Text>
    </SafeAreaView>
  );
};

export default Splash;
