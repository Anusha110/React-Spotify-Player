import { ExplicitContentType } from '../../typesv2'

class ExplicitContentModel {
   filterEnabled: boolean
   filterLocked: boolean

   constructor(explicitContent: ExplicitContentType) {
      const { filter_enabled, filter_locked } = explicitContent

      this.filterEnabled = filter_enabled
      this.filterLocked = filter_locked
   }
}

export default ExplicitContentModel
