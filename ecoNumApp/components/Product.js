import React, { Component } from "react";
import { View, Text } from "react-native";

class Product extends Component {
  state = {
    product: {},
    loaded: false
  };

  componentDidMount() {
    this.setState({
      product: this.props.product,
      loaded: true
    });
  }

  render() {
    const { loaded, product } = this.state;
    const {
      categorie,
      designation,
      fabricant,
      prixTTC,
      batterie,
      resolution,
      deee,
      classeEnergie,
      recyclable,
      note
    } = product;
    return loaded ? (
      <View>
        <Text>{categorie}</Text>
        <Text>{fabricant}</Text>
        <Text>{designation}</Text>
        <Text>prix :{prixTTC} euros</Text>
        <Text>Resulution :{resolution}</Text>
        <Text>Classe enrgie :{classeEnergie}</Text>
        <Text>Classe enrgie :{classeEnergie}</Text>
      </View>
    ) : (
      <Text>loading ..</Text>
    );
  }
}

export default Product;
