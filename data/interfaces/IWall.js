const defaultCoords = {
  x: 0,
  y: 0,
  z: 0,
}

export default class IFloor {
  component = 'Wall'
  builderType = 'buildWall'

  constructor(
    { width, depth, height, color },
    { x = 0, y = 0, z } = defaultCoords
  ) {
    this.structure = {
      width,
      depth,
      height,
      color,
    }
    this.coords = {
      x,
      y,
      z: z || null,
    }
  }
}
