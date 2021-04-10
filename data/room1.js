import { IFloor, IWall } from './interfaces'

const perimeterNorthWall = new IWall()
const perimeterEastWall = new IWall()
const perimeterSouthWall = new IWall()
const perimeterWestWall = new IWall()
const floor = new IFloor(
  {
    width: 75,
    depth: 75,
    color: '#aaa',
  },
  {
    north: perimeterNorthWall,
    east: perimeterEastWall,
    south: perimeterSouthWall,
    west: perimeterWestWall,
  }
)

const standaloneWall = new IWall(
  {
    width: 3,
    depth: 20,
    height: 20,
    color: '#ccc',
  },
  {
    x: 15,
    y: -27,
  }
)

export default {
  name: 'room1',
  components: [floor, standaloneWall],
}
