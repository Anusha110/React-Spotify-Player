import UserStore from '../../ReactSpotifyPlayer/stores/UserStore'
import UserServiceApi from '../../ReactSpotifyPlayer/services/UserService/index.api'
import { networkCallWithApisauce } from '../utils/APIUtils'
import MusicServiceApi from '../../ReactSpotifyPlayer/services/MusicService/index.api'
import MusicStore from '../../ReactSpotifyPlayer/stores/MusicStore'
import FeaturedPlaylistStore from '../../ReactSpotifyPlayer/stores/FeaturedPlaylistStore'
import FeaturedPlaylistServiceApi from '../../ReactSpotifyPlayer/services/FeaturedPlaylistService/index.api'
import CategoryPlaylistStore from '../../ReactSpotifyPlayer/stores/CategoryPlaylistStore'
import CategoryPlaylistServiceApi from '../../ReactSpotifyPlayer/services/CategoryPlaylistService/index.api'
import NewReleaseServiceApi from '../../ReactSpotifyPlayer/services/NewReleaseService/index.api'
import NewReleaseStore from '../../ReactSpotifyPlayer/stores/NewReleaseStore'

const userService = new UserServiceApi(networkCallWithApisauce())
export const userStore = new UserStore(userService)

const musicService = new MusicServiceApi(networkCallWithApisauce())
export const musicStore = new MusicStore(musicService)

const featuredPlaylistService = new FeaturedPlaylistServiceApi(
   networkCallWithApisauce()
)
export const featuredPlaylistStore = new FeaturedPlaylistStore(
   featuredPlaylistService
)

const categoryPlaylistService = new CategoryPlaylistServiceApi(
   networkCallWithApisauce()
)
export const categoryPlaylistStore = new CategoryPlaylistStore(
   categoryPlaylistService
)

const newReleasesService = new NewReleaseServiceApi(networkCallWithApisauce())
export const newReleasesStore = new NewReleaseStore(newReleasesService)

// export default {
//    userStore,
//    musicStore
// }
