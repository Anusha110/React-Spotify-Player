import { BrowseCategoryItemType, ImageType } from '../../types'
import ImageModel from '../ImageModel'

class BrowseCategoryItemModel {
   id: string
   name: string
   images: ImageType[]

   constructor(category: BrowseCategoryItemType) {
      const { id, name, icons } = category

      this.id = id
      this.name = name
      this.images = icons.map(eachIcon => new ImageModel(eachIcon))
   }
}

export default BrowseCategoryItemModel
