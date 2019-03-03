const apiKey            = '~';
const maxResults        = 50;
const part              = 'snippet';
const type              = 'video';
const apiYoutubebaseUrl = 'https://www.googleapis.com/youtube/v3/search';

export default {
    api: {
        youtube: {
            apiKey,
            baseUrl: `${apiYoutubebaseUrl}?key=${apiKey}&part=${part}&type=${type}&maxResults=${maxResults}&q=`
        }
    }
}