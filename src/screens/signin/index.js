import React from 'react';
import {Text, SafeAreaView, TextInput, Button, View} from 'react-native';

import styles from './styles';
import mobilityImg from '../../../assets/img/mobility.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperLeft} />
      <View style={styles.form}>
        <Text style={styles.title}>CarPool</Text>
        <Text style={styles.subtitle}>Facilidade para se mover</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="words"
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => alert('clicou')}
          style={styles.buttonSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperRight} />
    </SafeAreaView>
  );
};
export default Signin;
