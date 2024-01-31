import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getGiphyData} from './GetData/GetGiphyData';

const App = () => {
  useEffect(() => {
    fetchGifData();
  });

  const fetchGifData = async () => {
    await getGiphyData();
  };
  return (
    <View>
      <Text>Hello Giphy</Text>
    </View>
  );
};

export default App;
