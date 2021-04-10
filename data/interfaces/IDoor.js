const defaultDoor = {
  width: 5,
  height: 8,
}

export default class IDoor {
  category = 'IDoor'
  type = 'Empty'

  constructor(
    { width = defaultDoor.width, height = defaultDoor.height } = defaultDoor,
    distanceFromWallOrigin = null
  ) {
    this.width = width
    this.height = height
    this.distanceFromWallOrigin = distanceFromWallOrigin
  }
}
