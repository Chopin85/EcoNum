import React, {
  Component
} from 'react';
import {
  Text
} from 'react-native';
import {
  data
} from '../data'



class Product extends Component {
  state = {

  }
  getProduct (props) {
    const {
      category,
      mark,
      model
    } = props
    const newData = []
    newdata = data.filter(element => {
      element.categorie === category && element.fabricant === mark && element.designation === model
    })
    alert(newData[0])
  }
  componentDidMount = () => {
    this.getProduct(this.props)

  }

  render () {

    return <Text {...this.props
    }
      style={
        [this.props.style, {
          fontFamily: 'space-mono'
        }]
      }
    />;
  }

}

export default Product;