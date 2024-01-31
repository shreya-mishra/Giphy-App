import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const SearchInput = ({
  setSearchVal,
  searchVal,
  handleSearch,
}: {
  setSearchVal: () => void;
  searchVal: string;
  handleSearch: () => void;
}) => {
  const onChangeHandler = (val: any) => {
    setSearchVal(val);
  };
  return (
    <View>
      <TextInput
        placeholder={'search username'}
        value={searchVal}
        onChangeText={onChangeHandler}
        style={styles.textInput}
        onTouchEnd={handleSearch}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: 'white',
  },
});
