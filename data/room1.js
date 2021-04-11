import { IFloor, IWall } from './interfaces'

const floor = new IFloor(
  {
    width: 75,
    depth: 75,
    color: '#aaa',
  },
  {
    AB: IWall.withDoor(),
    BC: IWall.withDoor(),
    CD: IWall.withDoor(),
    DA: IWall.withDoor(),
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
    x: 5,
    y: 5,
  }
)

const smallWall = new IWall(
  {
    width: 30,
    depth: 3,
    height: 8,
    color: 'brown',
  },
  {
    x: 45,
    y: 15,
  }
)

export default {
  name: 'room1',
  components: [floor, standaloneWall, smallWall],
}
