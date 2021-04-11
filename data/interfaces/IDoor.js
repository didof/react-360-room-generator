const defaultDoor = {
  width: 8,
  height: 8,
  distanceFromWallOrigin: null,
}

export default class IDoor {
  category = 'IDoor'
  type = 'Empty'

  constructor({
    width = defaultDoor.width,
    height = defaultDoor.height,
    distanceFromWallOrigin = defaultDoor.distanceFromWallOrigin,
  } = defaultDoor) {
    this.width = width
    this.height = height
    this.distanceFromWallOrigin = distanceFromWallOrigin
  }
}
