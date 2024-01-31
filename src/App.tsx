import React, {useEffect, useState} from 'react';
import {View, useColorScheme} from 'react-native';
import {getGiphyData} from './utils/GetData/GetGiphyData';
import DisplayGifs from './components/DisplayGifs';
import SearchInput from './components/SearchInput';
import {COLORS} from './constants/Colors';
// import {ThemeProvider, useTheme} from './contextApi/ThemeContext';
const App = () => {
  // const {isDarkMode, toggleTheme} = useTheme();
  const [giphyData, setGiphyData] = useState([]);
  const [searchVal, setSearchVal] = useState<string>();
  const [searchGif, setSearchGif] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useColorScheme();
  console.log('theme>>>', theme);
  useEffect(() => {
    fetchGifData();
  }, [searchVal]);

  const handleSearch = () => {
    setSearchGif(searchVal);
  };
  const fetchGifData = async () => {
    try {
      setIsLoading(true);
      const res = await getGiphyData();
      if (searchVal && searchVal?.trim().length > 0) {
        const filteredData = res.filter((item: {username: string}) =>
          item.username.toLowerCase().includes(searchVal.toLowerCase()),
        );
        setGiphyData(filteredData);
      } else {
        setGiphyData(res);
      }
    } catch (error) {
      console.error('error fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleEndReached = () => {
    fetchGifData();
  };
  return (
    <View
      style={{
        backgroundColor: theme === 'dark' ? COLORS.secondary : COLORS.primary,
      }}>
      <SearchInput
        setSearchVal={setSearchVal}
        searchVal={searchVal}
        handleSearch={handleSearch}
      />
      <DisplayGifs
        giphyData={giphyData}
        isLoading={isLoading}
        handleEndReached={handleEndReached}
      />
    </View>
  );
};

export default App;
