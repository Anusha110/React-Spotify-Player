import { PlaylistTracksType } from '../../typesv2'

class PlaylistTracksModel {
   href: string
   total: number

   constructor(playlistTracksInfo: PlaylistTracksType) {
      const { href, total } = playlistTracksInfo

      this.href = href
      this.total = total
   }
}

export default PlaylistTracksModel
