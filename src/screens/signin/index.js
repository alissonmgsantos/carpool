import React from 'react';
import {Text, SafeAreaView, TextInput, View} from 'react-native';

import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../../../styles/global';
const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.wrapperLeft} />
      <View style={styles.form}>
        <Text style={styles.title}>CarPool</Text>
        <Text style={styles.subtitle}>Facilidade para se mover</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="words"
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="words"
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={globalStyles.buttonSubmit}>
          <Text style={globalStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperRight} />
    </SafeAreaView>
  );
};
export default Signin;
