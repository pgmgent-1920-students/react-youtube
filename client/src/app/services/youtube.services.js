import { youtubeDataApi } from '../config'

const YOUTUBE_API_SEARCH = `${youtubeDataApi.searchUrl}?key=${youtubeDataApi.apiKey}&part=snippet&maxResults=20&q=`

class YoutubeApi {
  static getSearchResults = async (q) => {
    const url = `${YOUTUBE_API_SEARCH}${q}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  }
}

export default YoutubeApi;