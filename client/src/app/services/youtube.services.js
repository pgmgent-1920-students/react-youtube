const YOUTUBE_DATA_API_KEY = 'AIzaSyDLBTKPgGua24GCzqR30U0hwiTYdUjs8Kw';
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_API_SEARCH = `${YOUTUBE_SEARCH_URL}?key=${YOUTUBE_DATA_API_KEY}&part=snippet&maxResults=20&q=`

class YoutubeApi {
  static getSearchResults = async (q) => {
    const url = `${YOUTUBE_API_SEARCH}${q}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  }
}

export default YoutubeApi;