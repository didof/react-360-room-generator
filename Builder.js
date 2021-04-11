import { Location } from 'react-360-web'
import IWall from './data/interfaces/IWall'

class Builder {
  floorLevel = -10
  roomWidth = null
  roomDepth = null
  wallsThickness = 1

  constructor(r360) {
    this.r = r360
  }

  static buildRoom(r, room, options) {
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

  _renderWall(i) {
    const { structure, coords } = i
    let X = coords.x - this.roomWidth / 2 + structure.width / 2
    let Y = coords.y - this.roomDepth / 2 - structure.depth / 2
    let Z = coords.z + this.floorLevel + structure.height / 2

    const location = new Location([X, Z, Y])

    this._render(i, location)
  }

  _setRoomSizez({ width, depth }) {
    this.roomWidth = width
    this.roomDepth = depth
  }

  _buildRoomConstraints({ width, depth }) {
    this.floorConstraints = {
      AB: [0, 0],
      BC: [width, depth],
      CD: [0, depth],
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
            `[Builder/_buildFloorPerimeter] The ${elm.component} is not recognized`
          )
      }
    })
  }

  _calculatePerimeterWallStructure(wall, side) {
    switch (side) {
      case 'AB':
      case 'CD':
        if (!wall.structure.width) wall.structure.width = this.roomWidth
        if (!wall.structure.depth) wall.structure.depth = this.wallsThickness
        break
      case 'BC':
      case 'DA':
        if (!wall.structure.width) wall.structure.width = this.wallsThickness
        if (!wall.structure.depth) wall.structure.depth = this.roomDepth
        break
      default:
        console.error(
          `[Builder/calculatePerimeterWallStructure] The side ${side} is not recognized`
        )
    }
    wall.structure.height = -this.floorLevel + 10
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
    if (!i.fixture) {
      this._renderWall(i)
      return
    }

    switch (i.fixture.category) {
      case 'IDoor':
        this._buildWallWithDoor(i)
        break
      default:
        console.error(
          `[Builder/buildWall] The component ${el.component} is not recognized`
        )
    }
  }

  _buildWallWithDoor(i) {
    switch (i.fixture.type) {
      case 'Empty':
        this._buildWallWithDoorEmpty(i)

        break
      default:
        console.error(
          `[Builder/_buildWallWithDoor] The door type ${fixture.type} is not recognized`
        )
    }
  }

  _buildWallWithDoorEmpty(i) {
    const { structure, coords, fixture } = i

    let discriminantSize =
      Math.abs(structure.width) > Math.abs(structure.depth) ? 'width' : 'depth'
    let wallSize =
      discriminantSize === 'width'
        ? Math.abs(structure.width)
        : Math.abs(structure.depth)
    if (!fixture.distanceFromWallOrigin) {
      fixture.distanceFromWallOrigin = wallSize / 2
    }

    const w1Structure = {
      ...structure,
      [discriminantSize]:
        wallSize - fixture.distanceFromWallOrigin - fixture.width,
    }
    const w2Structure = {
      ...structure,
      [discriminantSize]:
        wallSize - w1Structure[discriminantSize] - fixture.width,
    }

    const discriminantCoord = discriminantSize === 'width' ? 'x' : 'y'
    const w1Coords = coords
    const w2Coords = {
      ...coords,
      [discriminantCoord]: wallSize - w2Structure[discriminantSize],
    }

    const w1 = new IWall(w1Structure, w1Coords)
    const w2 = new IWall(w2Structure, w2Coords)
    const walls = [w1, w2]
    walls.forEach(wall => {
      this._renderWall(wall)
    })
  }
}

export default Builder
