import { IFloor, IWall } from './interfaces'

export default {
  name: 'test-room',
  components: [
    new IFloor({
      width: 100,
      depth: 100,
      color: '#aaa',
    }),
    new IWall({
      width: 3,
      depth: 50,
      height: 20,
      color: '#ccc',
    }),
  ],
}
