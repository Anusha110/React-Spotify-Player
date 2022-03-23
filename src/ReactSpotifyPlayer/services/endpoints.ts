const browseEndpoints = 'browse/'

const endpoints = {
   profile: 'me',
   featuredPlaylists: `${browseEndpoints}featured-playlists`,
   browseCategories: `${browseEndpoints}categories`,
   newReleases: `${browseEndpoints}new-releases`,
   playlistDetails: `users/spotify/playlists/`,
   albumDetails: `albums/`,
   playlists: `playlists`,
   yourMusic: 'me/tracks/',
   users: 'users/'
}
export default endpoints
