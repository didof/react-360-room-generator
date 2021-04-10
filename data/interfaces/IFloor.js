export default class IFloor {
  component = 'Floor'
  builderType = 'buildFloor'

  constructor({ width, depth, color }) {
    this.structure = {
      width,
      depth,
      color,
    }
  }
}
