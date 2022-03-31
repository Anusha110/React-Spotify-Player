import {
   GetYourMusicResponseType,
   GetUserPlaylistsResponseType
} from '../../stores/types'

import { IdRequestType } from '../../stores/types'

interface YourMusicService {
   getYourMusic(): Promise<GetYourMusicResponseType>

   getUserPlaylists(
      requestObject: IdRequestType
   ): Promise<GetUserPlaylistsResponseType>
}

export default YourMusicService
