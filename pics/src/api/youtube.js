
import axios from 'axios';
const KEY = 'AIzaSyCC9HBxyTV9SUU0T7ud00SqNLadJDWwoQU';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        key: KEY,
        part: 'snippet'
    }

});