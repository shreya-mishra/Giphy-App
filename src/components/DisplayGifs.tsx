import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/Colors';

const DisplayGifs = ({
  giphyData,
  isLoading,
  handleEndReached,
}: {
  giphyData: any;
  isLoading: boolean;
  handleEndReached: () => void;
}) => {
  const theme = useColorScheme();
  const keyExtractor = (item: {id: string}) => item.id;
  const renderItem = ({
    item,
  }: {
    item: {id: string; images: {original_still: {url: string}}};
  }) => {
    const {original_still} = item.images;
    const {url} = original_still;
    return (
      <View
        style={[
          styles.renderContainer,
          {borderColor: theme === 'dark' ? COLORS.primary : COLORS.secondary},
        ]}>
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
        <Text
          style={{color: theme === 'dark' ? COLORS.primary : COLORS.secondary}}>
          No data found
        </Text>
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
    margin: 4,
    width: 150,
    height: 150,
    borderWidth: 4,
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
