import React, {
  Component
} from 'react';

import {
  data
} from '../data'
class Product extends Component {
  state = {}
  getProduct(props) {
    const {
      category,
      Mark,
      model
    } = props

    return data.filter(element => {element.})
  }
  render() {
    return <Text { ...this.props
    }
    style = {
      [this.props.style, {
        fontFamily: 'space-mono'
      }]
    }
    />;
  }

}

export default Product;