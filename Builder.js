import { Location } from 'react-360-web'

const defaultBuilderOptions = {
  floorLevel: -10,
}

class Builder {
  floorLevel = -10
  roomWidth = null
  roomDepth = null
  wallsThickness = 3
  wallsHeight = 15

  constructor(r360) {
    this.r = r360
  }

  static buildRoom(r, room, options = defaultBuilderOptions) {
    if (options) {
      this.floorLevel = options.floorLevel
    }

    const builder = new Builder(r)
    room.components.forEach(component => {
      builder[component.builderType](component)
    })
    console.info(`[Builder/buildRoom] Room <${room.name}> has been built.`)
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

  _setRoomSizez({ width, depth }) {
    this.roomWidth = width
    this.roomDepth = depth
  }

  _buildRoomConstraints({ width, depth }) {
    this.floorConstraints = {
      AB: [0, 0],
      BC: [width, 0],
      CD: [width, depth],
      DA: [0, depth],
    }
  }

  _buildFloorPerimeter(perimeter) {
    if (!perimeter) return
    Object.keys(perimeter).forEach(side => {
      const elm = perimeter[side]
      if (!elm) return

      switch (elm.component) {
        case 'Wall':
          this._calculatePerimeterWallStructure(elm, side)
          this._calculatePerimeterWallCoords(elm, side)
          this.buildWall(elm)
          break
        default:
          console.error(
            `[buildFloor/buildPerimeter] The ${el.component} is not recognized`
          )
      }
    })
  }

  _calculatePerimeterWallStructure(wall, side) {
    switch (side) {
      case 'AB':
        if (!wall.structure.width) wall.structure.width = this.roomWidth
        if (!wall.structure.depth) wall.structure.depth = this.wallsThickness
      case 'BC':
        if (!wall.structure.width) wall.structure.width = this.wallsThickness
        if (!wall.structure.depth) wall.structure.depth = -this.roomDepth
      case 'CD':
        if (!wall.structure.width) wall.structure.width = -this.roomWidth
        if (!wall.structure.depth) wall.structure.depth = this.wallsThickness
      case 'DA':
        if (!wall.structure.width) wall.structure.width = this.wallsThickness
        if (!wall.structure.depth) wall.structure.depth = this.roomDepth
    }
    wall.structure.height = this.wallsHeight
  }

  _calculatePerimeterWallCoords(wall, side) {
    wall.coords.x = this.floorConstraints[side][0]
    wall.coords.y = this.floorConstraints[side][1]
    wall.coords.z = 0
  }

  buildFloor(i) {
    const location = new Location([0, this.floorLevel, 0])

    this._setRoomSizez(i.structure)
    this._buildRoomConstraints(i.structure)

    this._render(i, location)

    this._buildFloorPerimeter(i.perimeter)
  }

  buildWall(i) {
    const { structure, coords } = i
    let X = coords.x - this.roomWidth / 2 + structure.width / 2
    let Y = coords.y - this.roomDepth / 2 - structure.depth / 2
    let Z = coords.z - this.floorLevel / 2 - structure.height / 2

    const location = new Location([X, Z, Y])

    this._render(i, location)
  }
}

export default Builder
