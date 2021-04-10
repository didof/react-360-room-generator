import { ReactInstance } from 'react-360-web'
import Builder from './Builder'
import KeyboardCameraController from './cameraControllers/KeyboardCameraController'

import room1 from './data/room1'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  })

  r360.controls.addCameraController(new KeyboardCameraController())

  Builder.buildRoom(r360, room1)

  // const builder = new Builder(r360)
  // roomData.components.forEach(component => {
  //   builder[component.builderType](component)
  // })

  r360.renderToSurface(
    r360.createRoot('RoomGenerator', {}),
    r360.getDefaultSurface()
  )

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'))
}

window.React360 = { init }
