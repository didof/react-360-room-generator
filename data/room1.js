import { IFloor, IWall } from './interfaces'

const floor = new IFloor(
  {
    width: 75,
    depth: 75,
    color: '#aaa',
  },
  {
    AB: new IWall(),
    BC: new IWall(),
    CD: new IWall(),
    DA: new IWall(),
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
  components: [
    floor,
    // standaloneWall
  ],
}
