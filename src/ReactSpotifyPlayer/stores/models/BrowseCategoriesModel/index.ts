import {
   FormattedBrowseCategoryItemType,
   GetBrowseCategoriesResponseType
} from '../../types'
import BrowseCategoryItemModel from '../../models/BrowseCategoryItemModel'

class BrowseCategoriesModel {
   categories: FormattedBrowseCategoryItemType[]

   constructor(browseCategoriesResponse: GetBrowseCategoriesResponseType) {
      const { categories } = browseCategoriesResponse

      this.categories = categories.items.map(
         eachItem => new BrowseCategoryItemModel(eachItem)
      )
   }
}

export default BrowseCategoriesModel
