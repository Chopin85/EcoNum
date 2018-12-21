import React, { Component } from "react";
import { View, Text } from "react-native";
import { data } from "../data";
import AlternativeProduct from "./AlternativeProduct";

class ListAlternativeProduct extends Component {
  state = {
    alternativeProduct: [],
    loaded: false
  };

  getAlternativeProduct(category) {
    const produitFiltre = data
      .filter(e => e.categorie === category)
      .sort((a, b) => a.note < b.note);
    console.log("produit filtre ", produitFiltre);

    this.setState({
      alternativeProduct: produitFiltre,
      loaded: true
    });
    // console.log("GetAlternative");
  }

  componentDidMount() {
    console.log(this.props.category);

    this.getAlternativeProduct(this.props.category);
  }

  render() {
    // console.log("loaded", this.state.loaded);

    const { alternativeProduct, loaded } = this.state;
    return loaded ? (
      this.state.alternativeProduct.map(e => (
        <AlternativeProduct key={e.id} product={e} />
        // <Text>{e.note}</Text>
      ))
    ) : (
      <Text>Loading...</Text>
    );
  }
}
export default ListAlternativeProduct;
