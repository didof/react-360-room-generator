const defaultDoor = {
  width: 10,
  height: 20,
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

    if (distanceFromWallOrigin) {
      console.info(
        `At the moment the functionality distanceFromWallOrigin is disabled because it generates a bug`
      )
    }
    this.distanceFromWallOrigin = null
  }
}
