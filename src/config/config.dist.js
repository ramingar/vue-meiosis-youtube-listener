const apiKey            = '~';
const maxResults        = 50;
const part              = 'snippet';
const apiYoutubebaseUrl = 'https://www.googleapis.com/youtube/v3/search';

export default {
    api: {
        youtube: {
            apiKey,
            baseUrl: `${apiYoutubebaseUrl}?key=${apiKey}&part=${part}&maxResults=${maxResults}&q=`
        }
    }
}