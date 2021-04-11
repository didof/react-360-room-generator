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
    // BC: IWall.withDoor(
    //   {
    //     color: '#ccc',
    //   },
    //   null,
    //   { distanceFromWallOrigin: 60 }
    // ),
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
    x: 45,
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
