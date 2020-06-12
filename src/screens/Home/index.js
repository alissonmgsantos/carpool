import React from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  FlatList,
  Image,
} from 'react-native';

import styles from './styles';
import globalStyles from '../../../styles/global';

import mobilityImg from '../../../assets/img/mobility.png';

const Home = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
      modality: 'car',
      destination: 'Suburbana',
    },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <TextInput
          style={globalStyles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="words"
        />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image source={mobilityImg} style={styles.avatar} />
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.title}</Text>
              </View>
              <Text style={styles.cardTime}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
