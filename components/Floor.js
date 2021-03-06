import React from 'react'
import { AppRegistry, View, Box } from 'react-360'

class Floor extends React.Component {
  constructor({ width, depth, color }) {
    super()
    this.width = width
    this.deep = depth
    this.color = color
  }

  render() {
    return (
      <View>
        <Box
          dimWidth={this.width}
          dimHeight={0}
          dimDepth={this.deep}
          style={{
            color: this.color,
          }}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('Floor', () => Floor)
