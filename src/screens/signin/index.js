import React from 'react';
import {Text, SafeAreaView, TextInput} from 'react-native';

import styles from './styles';
import mobilityImg from '../../../assets/img/mobility.png';
const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CarPool</Text>
      <Text style={styles.subtitle}>Facilidade para se mover</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu número"
        placeholderTextColor="#999"
        keyboardType="numeric"
        autoCorrect={false}
      />
    </SafeAreaView>
  );
};
export default Signin;
