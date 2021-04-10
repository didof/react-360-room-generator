const defaultStructure = {
  width: 100,
  height: 100,
  color: 'white',
}

export default class IFloor {
  component = 'Floor'
  builderType = 'buildFloor'

  constructor(structure = defaultStructure, perimeter) {
    const { width, depth, color } = structure
    const { AB = null, BC = null, CD = null, DA = null } = perimeter

    this.structure = {
      width,
      depth,
      color,
    }

    this.perimeter = {
      AB,
      BC,
      CD,
      DA,
    }
  }
}
