const defaultStructure = {
  width: 0,
  depth: 0,
  height: 0,
  color: '#ddd',
}

const defaultCoords = {
  x: 0,
  y: 0,
  z: 0,
}

export default class IWall {
  component = 'Wall'
  builderType = 'buildWall'

  constructor(structure = defaultStructure, coords = defaultCoords) {
    const { width, depth, height, color } = structure
    const { x = 0, y = 0, z = null } = coords

    this.structure = {
      width,
      depth,
      height,
      color,
    }
    this.coords = {
      x,
      y,
      z,
    }
  }
}
