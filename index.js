import React from 'react'
import { AppRegistry, View } from 'react-360'
import './components/Floor'
import './components/Wall'

export default class RoomGenerator extends React.Component {
  render() {
    return <View></View>
  }
}

AppRegistry.registerComponent('RoomGenerator', () => RoomGenerator)
