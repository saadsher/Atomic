import { action, extendObservable, observable, computed } from 'mobx'
import { computedAsync } from 'computed-async-mobx'

class Listing {
  @observable bedrooms
  @observable address
  @observable type
  @observable description
  @observable postcode
  @observable details
  @observable price
  @observable agent
  @observable logo
  @observable phone
  @observable image
  @observable feature
  @observable id
}

export class ListingStore {
  proprietary = computedAsync(0, async () => {
    const response = await fetch('http://52.56.72.41:2403/proprietary')
    const data = await response.json()
    return data
  })
  @computed get results() {
    if (this.proprietary.value !== 0) {
      let matchesKey = new RegExp(this.filter, "i")
      let val = this.proprietary.value
      return val.filter(select => !this.filter || matchesKey.test(select.postcode))
    }
  }
  @computed get featured() {
    if (this.proprietary.value !== 0) {
      let val = this.proprietary.value
      return val.filter(select => select.feature)
    }
  }
  @computed get size() {
    if (this.proprietary.value !== 0) {
      return this.results.length
    }
  }
  @observable filter = ""
  @observable ready
}

export default new ListingStore
