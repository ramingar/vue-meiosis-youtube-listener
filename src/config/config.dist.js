const apiKey            = '~';
const maxResults        = 50;
const partSearch        = 'snippet';
const partInfoVideo     = 'contentDetails';
const typeSearch        = 'video';
const apiYoutubebaseUrl = 'https://www.googleapis.com/youtube/v3';

export default {
    api: {
        youtube: {
            apiKey,
            urlSearch   : `${apiYoutubebaseUrl}/search?key=${apiKey}&part=${partSearch}&type=${typeSearch}&maxResults=${maxResults}&q=`,
            urlInfoVideo: `${apiYoutubebaseUrl}/videos?key=${apiKey}&part=${partInfoVideo}&id=`
        }
    }
}