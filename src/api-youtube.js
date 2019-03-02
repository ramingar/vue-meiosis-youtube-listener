import xhr from 'axios'
import config from './config/config'

const searchVideos = term => xhr.get(config.api.youtube.baseUrl + term);

export {searchVideos}