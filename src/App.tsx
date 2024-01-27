import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getGiphyData} from './GetData/GetGiphyData';
import DisplayGifs from './components/DisplayGifs';
import SearchInput from './components/SearchInput';

const App = () => {
  const [giphyData, setGiphyData] = useState([]);
  const [searchVal, setSearchVal] = useState<string>();
  const [searchGif, setSearchGif] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

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
    <View>
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
