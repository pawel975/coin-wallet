import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {REACT_APP_KEY} from '@env';

export default function App() {
  const [state, setState] = useState('');

  const URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${REACT_APP_KEY}`;

  axios.get(URL).then(response => setState(response.data.data[0].name));

  return (
    <View style={styles.container}>
      <Text>{state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
