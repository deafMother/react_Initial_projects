import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 45f226d67f89bebae63edc2d329084947a06dc5957927b5670822f0519d5e36c'
    }

});