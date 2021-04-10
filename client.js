import { ReactInstance, Location } from 'react-360-web'
import Builder from './Builder'
import KeyboardCameraController from './cameraControllers/KeyboardCameraController'

import roomData from './data/room'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  })

  r360.controls.addCameraController(new KeyboardCameraController())

  Builder.buildFloor(r360, roomData.components.floor)

  r360.renderToSurface(
    r360.createRoot('RoomGenerator', {}),
    r360.getDefaultSurface()
  )

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'))
}

window.React360 = { init }
