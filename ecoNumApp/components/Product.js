import React, {
  Component,
} from 'react';
import {
  View, Text
} from 'react-native';
import {
  data
} from '../data'

const category = "smartphone"
const mark = "Apple"
const model = "Iphone X"

class Product extends Component {
  state = {
    product: {
      designation: "",
      fabricant: "",
      categorie: ""
    },
    loaded: false
  }
  getProduct (category, mark, model) {
    console.log(data[0].categorie);
    console.log(data[0].fabricant);
    console.log(data[0].designation);
    const product = data.map(element => {
      if (element.categorie === category && element.fabricant === mark && element.designation === model) {
        console.log("mon element", element);

        return element;
      }
    })
    return product[0]
  }

  componentDidMount () {
    this.setState({ product: this.getProduct(this.props.category, this.props.mark, this.props.model), loaded: true })
  }

  render () {
    const { loaded, product } = this.state;
    const { categorie, designation, fabricant,prixTTC,batterie,resolution,deee,classeEnergie,recyclable,note } = product;
    return loaded ? (<View>
      <Text>
        {categorie}
      </Text>
      <Text>
        {fabricant}
      </Text>
      <Text>
        {designation}
      </Text>
      <Text>
        prix :{prixTTC} euros
      </Text>
      <Text>
        Resulution :{resolution}
      </Text>
      <Text>
        Classe enrgie :{classeEnergie}
      </Text>
      <Text>
        Classe enrgie :{classeEnergie}
      </Text>
    </View>) : <Text>
        loading ..
      </Text>
  }

}

export default Product;