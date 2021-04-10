import IDoor from './IDoor'

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
  fixtures = null

  constructor(
    structure = defaultStructure,
    coords = defaultCoords,
    fixture = null
  ) {
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

    this.fixture = fixture
  }

  static withDoor(structure, coords, door) {
    const fixture = new IDoor(door)

    return new IWall(structure, coords, fixture)
  }
}
