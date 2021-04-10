import React from 'react'
import { AppRegistry, View, Box } from 'react-360'

class Wall extends React.Component {
  constructor({ width, depth, height, color }) {
    super()
    this.width = width
    this.deep = depth
    this.height = height
    this.color = color
  }

  render() {
    return (
      <View>
        <Box
          dimWidth={this.width}
          dimHeight={this.height}
          dimDepth={this.deep}
          style={{
            color: this.color,
          }}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('Wall', () => Wall)
