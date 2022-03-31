import getYourMusic from '../../fixtures/getYourMusic.json'
import getUserPlaylists from '../../fixtures/getUserPlaylists.json'
import {
   IdRequestType,
   GetUserPlaylistsResponseType,
   GetYourMusicResponseType
} from '../../stores/types'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import YourMusicService from '.'

class YourMusicServiceFixture implements YourMusicService {
   getYourMusic(): Promise<GetYourMusicResponseType> {
      return resolveWithTimeout(getYourMusic)
   }

   getUserPlaylists(
      requestObject: IdRequestType
   ): Promise<GetUserPlaylistsResponseType> {
      return resolveWithTimeout(getUserPlaylists)
   }
}

export default YourMusicServiceFixture
