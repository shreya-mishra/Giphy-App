import {GIF_API} from '../constants/Api';

export const getGiphyData = async () => {
  try {
    const response = await fetch(GIF_API);
    if (!response.ok) {
      throw new Error('Api is not called correctly');
    }
    const jsonReponse = await response.json();
    return jsonReponse.data;
  } catch (error) {
    // console.log(error);
    throw new Error('Check your internet connection');
  }
};
