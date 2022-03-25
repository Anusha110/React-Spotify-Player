import { FollowersType } from '../../types'

class FollowersModel {
   href: null
   total: number

   constructor(followers: FollowersType) {
      const { href, total } = followers

      this.href = href
      this.total = total
   }
}

export default FollowersModel
