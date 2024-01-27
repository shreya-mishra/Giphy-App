import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
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
  handleEndReached: () => void;
}) => {
  const keyExtractor = (item: {id: string}) => item.id;
  const renderItem = ({
    item,
  }: {
    item: {id: string; images: {original_still: {url: string}}};
  }) => {
    const {original_still} = item.images;
    const {url} = original_still;
    return (
      <View style={styles.renderContainer}>
        <Image
          source={{
            uri: url,
          }}
          height={100}
          width={100}
          style={styles.image}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return isLoading ? <ActivityIndicator size={'large'} /> : null;
  };

  return (
    <View style={styles.container}>
      {giphyData.length > 0 ? (
        <FlatList
          data={giphyData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.1}
          removeClippedSubviews={true}
          numColumns={3}
        />
      ) : (
        <Text style={{color: 'white'}}>No data found</Text>
      )}
    </View>
  );
};

export default DisplayGifs;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  renderContainer: {
    // marginTop: 10,
    margin: 4,
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
