import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getGiphyData} from './GetData/GetGiphyData';
import DisplayGifs from './components/DisplayGifs';
import SearchInput from './components/SearchInput';

const App = () => {
  const [giphyData, setGiphyData] = useState([]);
  const [searchVal, setSearchVal] = useState<string>();
  const [searchGif, setSearchGif] = useState<string>();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchGifData();
  });

  const handleSearch = () => {
    setSearchGif(searchVal);
  };
  const fetchGifData = async () => {
    try {
      setIsLoading(true);
      const res = await getGiphyData();
      if (searchVal?.length > 0 || searchGif?.length > 0) {
        const filteredData = giphyData.filter(item =>
          item.username.toLowerCase().includes(searchVal.toLowerCase()),
        );
        setSearchResults(filteredData);
        setGiphyData(filteredData);
      } else {
        setGiphyData(res);
      }
      setSearchVal('');
    } catch (error) {
      console.error('error fetching data', error);
    } finally {
      setIsLoading(false);
      // setSearchVal('');
    }
  };
  const handleEndReached = () => {
    if (!isLoading) {
      fetchGifData();
    }
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
        searchGif={searchVal}
        isLoading={isLoading}
        handleEndReached={handleEndReached}
      />
    </View>
  );
};

export default App;
