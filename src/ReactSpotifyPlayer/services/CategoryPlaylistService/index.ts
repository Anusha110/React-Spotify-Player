import {
   GetCategoryPlaylistsResponseType,
   IdCountryRequestType
} from '../../stores/types'

interface CategoryPlaylistService {
   getCategoryPlaylists(
      requestObject: IdCountryRequestType
   ): Promise<GetCategoryPlaylistsResponseType>
}

export default CategoryPlaylistService
