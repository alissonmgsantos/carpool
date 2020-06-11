import React from 'react';
import {Text, Image, StatusBar, SafeAreaView} from 'react-native';

import styles from './styles';
import mobilityImg from '../../../assets/img/mobility.png';
const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Image source={mobilityImg} style={styles.logo} />
      <Text style={styles.title}>CarPool</Text>
      <Text style={styles.subtitle}>Facilidade para se mover</Text>
    </SafeAreaView>
  );
};

export default Splash;
