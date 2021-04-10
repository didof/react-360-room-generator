import { Location } from 'react-360-web'

class Builder {
  constructor(fragment) {
    this.component = fragment.component
    this.structure = fragment.structure
  }

  static buildFloor(r360, fragment) {
    const floor = new Builder(fragment)
    const location = new Location([0, -10, 0])

    r360.renderToLocation(
      r360.createRoot(floor.component, {
        component: floor.component,
        ...floor.structure,
      }),
      location
    )
  }
}

export default Builder
