const defaultStructure = {
  width: 100,
  height: 100,
  color: 'white',
}

const defaultPerimeter = {
  north: null,
  east: null,
  south: null,
  west: null,
}

export default class IFloor {
  component = 'Floor'
  builderType = 'buildFloor'

  constructor(structure = defaultStructure, perimeter = defaultPerimeter) {
    const { width, depth, color } = structure
    const { north = null, east = null, south = null, west = null } = perimeter

    this.structure = {
      width,
      depth,
      color,
    }

    this.perimeter = {
      north,
      east,
      south,
      west,
    }
  }
}
