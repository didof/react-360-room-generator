const defaultStructure = {
  width: 1,
  depth: 1,
  height: 1,
  color: 'red',
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
