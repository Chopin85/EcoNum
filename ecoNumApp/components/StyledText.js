import React from 'react';
import {
  Text, View
} from 'react-native';
import Product from './Product'

export class MonoText extends React.Component {
  render () {
    return(<View >
    < Text {...this.props
      }
        style={
          [this.props.style, {
            fontFamily: 'space-mono'
          }]
        }
      />
    </View>
    )




  }
}