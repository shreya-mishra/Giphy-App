import {StyleSheet, TextInput, View, useColorScheme} from 'react-native';
import React from 'react';
// import {useTheme} from '../contextApi/ThemeContext';
import {COLORS} from '../constants/Colors';

const SearchInput = ({
  setSearchVal,
  searchVal,
  handleSearch,
}: {
  setSearchVal: (val: string) => void;
  searchVal: string | undefined;
  handleSearch: () => void;
}) => {
  const theme = useColorScheme();

  const onChangeHandler = (val: any) => {
    setSearchVal(val);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'search username'}
        value={searchVal}
        onChangeText={onChangeHandler}
        style={[
          styles.textInput,
          {
            borderColor: theme === 'dark' ? COLORS.primary : COLORS.secondary,
            color: theme === 'dark' ? COLORS.primary : COLORS.secondary,
          },
        ]}
        onTouchEnd={handleSearch}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    borderWidth: 2,
    padding: 10,
  },
});
