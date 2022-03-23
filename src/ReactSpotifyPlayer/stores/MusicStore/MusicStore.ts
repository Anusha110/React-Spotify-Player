import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'
import MusicService from '../../services/MusicService'
import AlbumDetailsModel from '../models/AlbumDetailsModel'
import BrowseCategoriesModel from '../models/BrowseCategoriesModel'
import CategoryPlaylistsModel from '../models/CategoryPlaylistsModel'
import FeaturedPlaylistsModel from '../models/FeaturesPlaylistsModel'
import NewReleasesModel from '../models/NewReleasesModel'
import PlaylistDetailsModel from '../models/PlaylistDetailsModel'
import UserPlaylistsModel from '../models/UsersPlaylistsModel'
import YourMusicModel from '../models/YourMusicModel'
import {
   CountryRequestType,
   FormattedGetFeaturedPlaylistsResponseType,
   FormattedGetBrowseCategoriesResponseType,
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   GetNewReleasesResponseType,
   GetBrowseCategoriesResponseType,
   FormattedGetPlaylistDetailsResponseType,
   GetPlaylistDetailsResponseType,
   IdRequestType,
   FormattedGetAlbumDetailsResponseType,
   GetAlbumDetailsResponseType,
   FormattedGetCategoryPlaylistsResponseType,
   GetCategoryPlaylistsResponseType,
   IdCountryRequestType,
   FormattedGetYourMusicResponseType,
   GetYourMusicResponseType,
   FormattedGetUserPlaylistsResponseType,
   GetUserPlaylistsResponseType
} from '../typesv2'

export class MusicStore {
   musicService!: MusicService

   @observable
   featuredPlaylistsModel!: FormattedGetFeaturedPlaylistsResponseType | null
   @observable getFeaturedPlaylistsApiStatus!: APIStatus
   @observable getFeaturedPlaylistsApiError!: string

   @observable
   browseCategoriesModel!: FormattedGetBrowseCategoriesResponseType | null
   @observable getBrowseCategoriesApiStatus!: APIStatus
   @observable getBrowseCategoriesApiError!: string

   @observable
   newReleasesModel!: GetNewReleasesResponseType | null
   @observable getNewReleasesApiStatus!: APIStatus
   @observable getNewReleasesApiError!: string

   @observable
   playlistDetailsModel!: FormattedGetPlaylistDetailsResponseType | null
   @observable getPlaylistDetailsApiStatus!: APIStatus
   @observable getPlaylistDetailsApiError!: string

   @observable
   albumDetailsModel!: FormattedGetAlbumDetailsResponseType | null
   @observable getAlbumDetailsApiStatus!: APIStatus
   @observable getAlbumDetailsApiError!: string

   @observable
   categoryPlaylistsModel!: FormattedGetCategoryPlaylistsResponseType | null
   @observable getCategoryPlaylistsApiStatus!: APIStatus
   @observable getCategoryPlaylistsApiError!: string

   @observable
   yourMusicModel!: FormattedGetYourMusicResponseType | null
   @observable getYourMusicApiStatus!: APIStatus
   @observable getYourMusicApiError!: string

   @observable
   userPlaylistsModel!: FormattedGetUserPlaylistsResponseType | null
   @observable getUserPlaylistsApiStatus!: APIStatus
   @observable getUserPlaylistsApiError!: string

   constructor(service: MusicService) {
      this.musicService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.featuredPlaylistsModel = null
      this.getFeaturedPlaylistsApiStatus = API_INITIAL
      this.getFeaturedPlaylistsApiError = ''

      this.browseCategoriesModel = null
      this.getBrowseCategoriesApiStatus = API_INITIAL
      this.getBrowseCategoriesApiError = ''

      this.newReleasesModel = null
      this.getNewReleasesApiStatus = API_INITIAL
      this.getNewReleasesApiError = ''

      this.playlistDetailsModel = null
      this.getPlaylistDetailsApiStatus = API_INITIAL
      this.getPlaylistDetailsApiError = ''

      this.albumDetailsModel = null
      this.getAlbumDetailsApiStatus = API_INITIAL
      this.getAlbumDetailsApiError = ''

      this.categoryPlaylistsModel = null
      this.getCategoryPlaylistsApiStatus = API_INITIAL
      this.getCategoryPlaylistsApiError = ''

      this.yourMusicModel = null
      this.getYourMusicApiStatus = API_INITIAL
      this.getYourMusicApiError = ''

      this.userPlaylistsModel = null
      this.getUserPlaylistsApiStatus = API_INITIAL
      this.getUserPlaylistsApiError = ''
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @action
   setGetFeaturedPlaylistsApiStatus = (status: APIStatus): void => {
      this.getFeaturedPlaylistsApiStatus = status
   }

   @action
   setGetFeaturedPlaylistsApiError = (error: string): void => {
      this.getFeaturedPlaylistsApiError = status
   }

   @action
   setGetFeaturedPlaylistsResponse = (
      response: GetFeaturedPlaylistsResponseType | null
   ): void => {
      if (response) {
         console.log(response, 'features playlists response')
         this.featuredPlaylistsModel = new FeaturedPlaylistsModel(response)
      }
   }

   @action
   getFeaturedPlaylists = async (
      requestObject: GetFeaturedPlaylistsRequestType
   ) => {
      this.setGetFeaturedPlaylistsApiStatus(API_FETCHING)
      const getFeaturedPlaylistsResponse: any = await this.musicService.getFeaturedPlaylists(
         requestObject
      )
      const jsonData = await getFeaturedPlaylistsResponse.json()
      if (getFeaturedPlaylistsResponse.ok) {
         this.setGetFeaturedPlaylistsResponse(jsonData)
         this.setGetFeaturedPlaylistsApiStatus(API_SUCCESS)
      } else {
         this.setGetFeaturedPlaylistsApiStatus(API_FAILED)
         this.setGetFeaturedPlaylistsApiError(jsonData.error_msg)
      }
   }

   @action
   setGetBrowseCategoriesApiStatus = (status: APIStatus): void => {
      this.getBrowseCategoriesApiStatus = status
   }

   @action
   setGetBrowseCategoriesApiError = (error: string): void => {
      this.getBrowseCategoriesApiError = error
   }

   @action
   setGetBrowseCategoriesResponse = (
      response: GetBrowseCategoriesResponseType | null
   ): void => {
      if (response) {
         this.browseCategoriesModel = new BrowseCategoriesModel(response)
      }
   }

   @action
   getBrowseCategories = async () => {
      this.setGetBrowseCategoriesApiStatus(API_FETCHING)
      const getBrowseCategoriesResponse: any = await this.musicService.getBrowseCategories()
      const jsonData = await getBrowseCategoriesResponse.json()
      if (getBrowseCategoriesResponse.ok) {
         this.setGetBrowseCategoriesResponse(jsonData)
         this.setGetBrowseCategoriesApiStatus(API_SUCCESS)
      } else {
         this.setGetBrowseCategoriesApiStatus(API_FAILED)
         this.setGetBrowseCategoriesApiError(jsonData.error_msg)
      }
   }

   @action
   setGetNewReleasesApiStatus = (status: APIStatus): void => {
      this.getNewReleasesApiStatus = status
   }

   @action
   setGetNewReleasesApiError = (error: string): void => {
      this.getNewReleasesApiError = error
   }

   @action
   setGetNewReleasesApiResponse = (
      response: GetNewReleasesResponseType | null
   ): void => {
      if (response) {
         this.newReleasesModel = new NewReleasesModel(response)
      }
   }

   @action
   getNewReleases = async (requestObject: CountryRequestType) => {
      this.setGetNewReleasesApiStatus(API_FETCHING)
      const getNewReleasesResponse: any = await this.musicService.getNewReleases(
         requestObject
      )
      const jsonData = await getNewReleasesResponse.json()
      if (getNewReleasesResponse.ok) {
         this.setGetNewReleasesApiResponse(jsonData)
         this.setGetNewReleasesApiStatus(API_SUCCESS)
      } else {
         this.setGetNewReleasesApiStatus(API_FAILED)
         this.setGetNewReleasesApiError(jsonData.error_msg)
      }
   }

   @action
   setGetPlaylistDetailsApiStatus = (status: APIStatus): void => {
      this.getPlaylistDetailsApiStatus = status
   }

   @action
   setGetPlaylistDetailsApiError = (error: string): void => {
      this.getPlaylistDetailsApiError = error
   }

   @action
   setGetPlaylistDetailsApiResponse = (
      response: GetPlaylistDetailsResponseType | null
   ): void => {
      if (response) {
         this.playlistDetailsModel = new PlaylistDetailsModel(response)
      }
   }

   @action
   getPlaylistDetails = async (requestObject: IdRequestType) => {
      this.setGetPlaylistDetailsApiStatus(API_FETCHING)
      const getPlaylistDetailsResponse: any = await this.musicService.getPlaylistDetails(
         requestObject
      )
      const jsonData = await getPlaylistDetailsResponse.json()
      if (getPlaylistDetailsResponse.ok) {
         this.setGetPlaylistDetailsApiResponse(jsonData)
         this.setGetPlaylistDetailsApiStatus(API_SUCCESS)
      } else {
         this.setGetPlaylistDetailsApiStatus(API_FAILED)
         this.setGetPlaylistDetailsApiError(jsonData.error_msg)
      }
   }

   @action
   setGetAlbumDetailsApiStatus = (status: APIStatus): void => {
      this.getAlbumDetailsApiStatus = status
   }

   @action
   setGetAlbumDetailsApiError = (error: string): void => {
      this.getAlbumDetailsApiError = error
   }

   @action
   setGetAlbumDetailsApiResponse = (
      response: GetAlbumDetailsResponseType | null
   ): void => {
      if (response) {
         this.albumDetailsModel = new AlbumDetailsModel(response)
      }
   }

   @action
   getAlbumDetails = async (requestObject: IdRequestType) => {
      this.setGetAlbumDetailsApiStatus(API_FETCHING)
      const getAlbumDetailsResponse: any = await this.musicService.getAlbumDetails(
         requestObject
      )
      const jsonData = await getAlbumDetailsResponse.json()
      if (getAlbumDetailsResponse.ok) {
         this.setGetAlbumDetailsApiResponse(jsonData)
         this.setGetAlbumDetailsApiStatus(API_SUCCESS)
      } else {
         this.setGetAlbumDetailsApiStatus(API_FAILED)
         this.setGetAlbumDetailsApiError(jsonData.error_msg)
      }
   }

   @action
   setGetCategoryPlaylistsApiStatus = (status: APIStatus): void => {
      this.getCategoryPlaylistsApiStatus = status
   }

   @action
   setGetCategoryPlaylistsApiError = (error: string): void => {
      this.getCategoryPlaylistsApiError = error
   }

   @action
   setGetCategoryPlaylistsApiResponse = (
      response: GetCategoryPlaylistsResponseType | null
   ): void => {
      if (response) {
         this.categoryPlaylistsModel = new CategoryPlaylistsModel(response)
      }
   }

   @action
   getCategoryPlaylists = async (requestObject: IdCountryRequestType) => {
      this.setGetCategoryPlaylistsApiStatus(API_FETCHING)
      const getCategoryPlaylistsResponse: any = await this.musicService.getCategoryPlaylists(
         requestObject
      )
      const jsonData = await getCategoryPlaylistsResponse.json()
      if (getCategoryPlaylistsResponse.ok) {
         this.setGetCategoryPlaylistsApiResponse(jsonData)
         this.setGetCategoryPlaylistsApiStatus(API_SUCCESS)
      } else {
         this.setGetCategoryPlaylistsApiStatus(API_FAILED)
         this.setGetCategoryPlaylistsApiError(jsonData.error_msg)
      }
   }

   @action
   setGetYourMusicApiStatus = (status: APIStatus): void => {
      this.getYourMusicApiStatus = status
   }

   @action
   setGetYourMusicApiError = (error: string): void => {
      this.getYourMusicApiError = error
   }

   @action
   setGetYourMusicApiResponse = (
      response: GetYourMusicResponseType | null
   ): void => {
      if (response) {
         this.yourMusicModel = new YourMusicModel(response)
      }
   }

   @action
   getYourMusic = async () => {
      this.setGetYourMusicApiStatus(API_FETCHING)
      const getYourMusicResponse: any = await this.musicService.getYourMusic()
      const jsonData = await getYourMusicResponse.json()
      if (getYourMusicResponse.ok) {
         this.setGetYourMusicApiResponse(jsonData)
         this.setGetYourMusicApiStatus(API_SUCCESS)
      } else {
         this.setGetYourMusicApiStatus(API_FAILED)
         this.setGetYourMusicApiError(jsonData.error_msg)
      }
   }

   @action
   setGetUserPlaylistsApiStatus = (status: APIStatus): void => {
      this.getUserPlaylistsApiStatus = status
   }

   @action
   setGetUserPlaylistsApiError = (error: string): void => {
      this.getUserPlaylistsApiError = status
   }

   @action
   setGetUserPlaylistsApiResponse = (
      response: GetUserPlaylistsResponseType | null
   ): void => {
      if (response) {
         this.userPlaylistsModel = new UserPlaylistsModel(response)
      }
   }

   @action
   getUserPlaylists = async (requestObject: IdRequestType) => {
      this.setGetUserPlaylistsApiStatus(API_FETCHING)
      const getUserPlaylistsApiResponse: any = await this.musicService.getUserPlaylists(
         requestObject
      )
      console.log('userplaylists repsonse', getUserPlaylistsApiResponse)
      const jsonData = await getUserPlaylistsApiResponse.json()
      console.log('jsonData', jsonData)
      if (getUserPlaylistsApiResponse.ok) {
         this.setGetUserPlaylistsApiResponse(jsonData)
         this.setGetUserPlaylistsApiStatus(API_SUCCESS)
      } else {
         this.setGetUserPlaylistsApiStatus(API_FAILED)
         this.setGetUserPlaylistsApiError(jsonData.error_msg)
      }
   }
}
