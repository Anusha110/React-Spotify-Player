import { FollowersType } from '../../typesv2'

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
