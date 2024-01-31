import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

// TODO:Add type of the response
const DisplayGifs = ({
  giphyData,
  isLoading,
  handleEndReached,
}: {
  giphyData: any;
  isLoading: boolean;
  handleEndReached: () => {};
}) => {
  console.log('🚀 ~ DisplayGifs ~ giphyData:', giphyData);
  const keyExtractor = (item: any) => item.id;
  const renderItem = ({item}) => {
    const {original} = item.images;
    const {url} = original;
    return (
      <Image
        source={{
          uri: url,
        }}
        height={150}
        width={150}
        // resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
      />
    );
  };

  const renderFooter = () => {
    return isLoading ? <ActivityIndicator size={'large'} /> : null;
  };

  return (
    <View>
      <FlatList
        data={giphyData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        // onEndReached={handleEndReached}
        // ListFooterComponent={renderFooter}
        // onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default DisplayGifs;

const styles = StyleSheet.create({
  image: {objectFit: 'contain'},
});
