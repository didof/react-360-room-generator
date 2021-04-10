import { IFloor, IWall } from './interfaces'

const perimeterNorthWall = new IWall()
const floor = new IFloor(
  {
    width: 100,
    depth: 100,
    color: '#aaa',
  },
  {
    north: perimeterNorthWall,
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
    x: 25,
    y: -35,
  }
)

export default {
  name: 'test-room',
  components: [floor, standaloneWall],
}
