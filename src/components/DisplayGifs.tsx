import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

const DisplayGifs = ({
  giphyData,
  isLoading,
  handleEndReached,
}: {
  giphyData: any;
  isLoading: boolean;
  handleEndReached: () => {};
}) => {
  const keyExtractor = (item: {id: string}) => item.id;
  const renderItem = ({item}: {item: {images: {original: {url: string}}}}) => {
    const {original} = item.images;
    const {url} = original;
    return (
      <Image
        source={{
          uri: url,
        }}
        height={150}
        width={150}
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
        onEndReached={handleEndReached}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default DisplayGifs;

const styles = StyleSheet.create({
  image: {objectFit: 'contain'},
});
