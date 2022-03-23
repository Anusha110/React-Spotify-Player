import UserStore from '../../ReactSpotifyPlayer/stores/UserStore'
import UserServiceApi from '../../ReactSpotifyPlayer/services/UserService/index.api'
import { networkCallWithApisauce } from '../utils/APIUtils'
import MusicServiceApi from '../../ReactSpotifyPlayer/services/MusicService/index.api'
import MusicStore from '../../ReactSpotifyPlayer/stores/MusicStore'

const userService = new UserServiceApi(networkCallWithApisauce())
export const userStore = new UserStore(userService)

const musicService = new MusicServiceApi(networkCallWithApisauce())
export const musicStore = new MusicStore(musicService)

// export default {
//    userStore,
//    musicStore
// }
