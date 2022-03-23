import {
   FormattedBrowseCategoryItemType,
   GetBrowseCategoriesResponseType
} from '../../typesv2'
import BrowseCategoryItemModel from '../BrowseCategoryItemModel'

class BrowseCategoriesModel {
   categories: { items: FormattedBrowseCategoryItemType[] }

   constructor(browseCategoriesResponse: GetBrowseCategoriesResponseType) {
      const { categories } = browseCategoriesResponse

      this.categories = {
         items: categories.items.map(
            eachItem => new BrowseCategoryItemModel(eachItem)
         )
      }
   }
}

export default BrowseCategoriesModel
