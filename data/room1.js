import { IFloor, IWall } from './interfaces'

const wallAB = new IWall()
// const perimeterEastWall = new IWall()
// const perimeterSouthWall = new IWall()
// const perimeterWestWall = new IWall()
const floor = new IFloor(
  {
    width: 75,
    depth: 75,
    color: '#aaa',
  },
  {
    AB: wallAB,
    // BC: perimeterEastWall,
    // CD: perimeterSouthWall,
    // DA: perimeterWestWall,
  }
)

const standaloneWall = new IWall(
  {
    width: 3,
    depth: 3,
    height: 20,
    color: '#ccc',
  },
  {
    x: 25,
    y: 10,
  }
)

export default {
  name: 'room1',
  components: [floor, standaloneWall],
}
