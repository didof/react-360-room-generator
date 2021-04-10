import { Location } from 'react-360-web'

class RoomBuilder {
  constructor(r360) {
    this.r = r360
  }

  buildFloor(fragment) {
    const location = new Location([0, -10, 0])

    this.r.renderToLocation(
      this.r.createRoot(fragment.component, {
        component: fragment.component,
        ...fragment.structure,
      }),
      location
    )
  }
}

export default RoomBuilder
