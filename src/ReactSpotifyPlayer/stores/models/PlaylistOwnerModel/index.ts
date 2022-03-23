import { PlaylistOwnerType } from '../../types'

class PlaylistOwnerModel {
   id: string
   displayName: string

   constructor(playlistOwnerInfo: PlaylistOwnerType) {
      const { display_name, id } = playlistOwnerInfo

      this.id = id
      this.displayName = display_name
   }
}

export default PlaylistOwnerModel
