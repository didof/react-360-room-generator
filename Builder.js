import { Location } from 'react-360-web'

const defaultBuilderOptions = {
  floorLevel: -10,
}

class Builder {
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

  buildFloor(i) {
    const location = new Location([0, this.floorLevel, 0])

    const halfWidth = i.structure.width / 2
    const halfDepth = i.structure.depth / 2

    this.floor = {
      north: -halfDepth,
      east: -halfWidth,
      south: halfDepth,
      west: halfWidth,
    }

    this._render(i, location)

    const perimeterWallTickness = 3
    const perimeterWallHeight = 15
    const cardinalCoords = {
      north: {
        x: this.floor.north,
        y: this.floor.east,
        width: i.structure.width,
        depth: perimeterWallTickness,
        height: perimeterWallHeight,
      },
      east: {
        x: this.floor.south,
        y: this.floor.east,
        width: perimeterWallTickness,
        depth: i.structure.depth,
        height: perimeterWallHeight,
      },
      south: {
        x: this.floor.north,
        y: this.floor.west,
        width: i.structure.width,
        depth: perimeterWallTickness,
        height: perimeterWallHeight,
      },
      west: {
        x: this.floor.north,
        y: this.floor.east,
        width: perimeterWallTickness,
        depth: i.structure.depth,
        height: perimeterWallHeight,
      },
    }

    const { perimeter } = i
    Object.keys(perimeter).forEach(cardinalPoint => {
      const el = perimeter[cardinalPoint]
      if (!el) return

      const directives = cardinalCoords[cardinalPoint]

      switch (el.component) {
        case 'Wall':
          if (el.structure.width === 0) el.structure.width = directives.width
          if (el.structure.depth === 0) el.structure.depth = directives.depth
          if (el.structure.height === 0) el.structure.height = directives.height

          el.coords.x = directives.x + el.structure.width / 2
          el.coords.y = directives.y + el.structure.depth / 2
          el.coords.z = this.floorLevel + el.structure.height / 2

          const location = new Location([el.coords.x, el.coords.z, el.coords.y])
          this._render(el, location)
          break

        default:
          console.error(
            `[buildFloor/buildPerimeter] The ${el.component} is not recognized`
          )
      }
    })
  }

  buildWall(i) {
    const { x, y, z } = i.coords
    let Z = z || this.floorLevel

    const location = new Location([x, Z, y])

    this._render(i, location)
  }
}

export default Builder