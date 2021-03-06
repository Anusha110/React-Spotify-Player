import { ImageType } from '../../types'

class ImageModel {
   url: string
   height: number | null
   width: number | null

   constructor(image: ImageType) {
      const { url, height, width } = image

      this.url = url
      this.height = height
      this.width = width
   }
}

export default ImageModel
