import { Location } from 'react-360-web'

class RoomBuilder {
  floorLevel = -10

  constructor(r360) {
    this.r = r360
  }

  _render(fragment, location) {
    this.r.renderToLocation(
      this.r.createRoot(fragment.component, {
        component: fragment.component,
        ...fragment.structure,
      }),
      location
    )
  }

  buildFloor(fragment) {
    const location = new Location([0, this.floorLevel, 0])

    this._render(fragment, location)

    const halfWidth = fragment.structure.width / 2
    const halfDepth = fragment.structure.depth / 2

    this.floor = {
      front: halfDepth,
      left: -halfWidth,
      back: -halfDepth,
      right: halfWidth,
    }
  }

  buildWall(fragment) {
    const { x, y, z } = fragment.coords
    let Z = z || this.floorLevel

    const location = new Location([x, Z, y])

    this._render(fragment, location)

    console.log(location)
  }
}

export default RoomBuilder
