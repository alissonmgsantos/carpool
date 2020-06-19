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
      modality: 'car',
      destination: 'Ribeira - Pituba',
      seats: '2 lugares Disponíveis',
      time: '10 minutos',
    },
    {
      id: '2',
      modality: 'motocycle',
      destination: 'Boca do rio - Paralela',
      seats: '1 lugar disponível',
      time: '3 minutos',
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
                <Text style={styles.cardTitle}>{item.destination}</Text>
                <Text style={styles.cardSubtitle}>{item.seats}</Text>
              </View>
              <Text style={styles.cardTime}>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
