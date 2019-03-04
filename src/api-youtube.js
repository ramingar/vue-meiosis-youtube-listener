import xhr from 'axios'
import config from './config/config'

const searchVideos = term => term ? xhr.get(config.api.youtube.urlSearch + term) : {};
const infoVideo    = video => video ? xhr.get(config.api.youtube.urlInfoVideo + video) : {};

export {searchVideos, infoVideo}