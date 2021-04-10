import { Location } from 'react-360-web'

class RoomBuilder {
  floorLevel = -10

  constructor(r360) {
    this.r = r360
  }

  _render(i, location) {
    this.r.renderToLocation(
      this.r.createRoot(i.component, {
        component: i.component,
        ...i.structure,
      }),
      location
    )
  }

  buildFloor(i) {
    console.log(i)
    const location = new Location([0, this.floorLevel, 0])

    this._render(i, location)

    const halfWidth = i.structure.width / 2
    const halfDepth = i.structure.depth / 2

    this.floor = {
      north: halfDepth,
      east: halfWidth,
      south: -halfDepth,
      west: -halfWidth,
    }
  }

  buildWall(i) {
    const { x, y, z } = i.coords
    let Z = z || this.floorLevel

    const location = new Location([x, Z, y])

    this._render(i, location)
  }
}

export default RoomBuilder
