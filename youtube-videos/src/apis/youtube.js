
import axios from 'axios';
const API_KEY = 'AIzaSyCC9HBxyTV9SUU0T7ud00SqNLadJDWwoQU';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    part: {
        message: {
            part:'snippet'
        },
        key: API_KEY,
        maxResults: 5
    }
});

