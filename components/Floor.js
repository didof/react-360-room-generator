import React from 'react'
import { AppRegistry, View, Box } from 'react-360'

class Floor extends React.Component {
  constructor({ w, d, color }) {
    super()
    this.width = w
    this.deep = d
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
