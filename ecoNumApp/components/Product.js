import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Product extends Component {
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
    const { categorie, designation, fabricant, prixTTC, batterie, resolution, deee, classeEnergie, recyclable, note } = product;
    return loaded ? (

      <View >
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>{designation}</Text>
        <Text style={{ textAlign: "center" }}>{fabricant}</Text>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <View style={{ height: 25, width: 25, margin: 3, backgroundColor: "#04870F" }}>
            <Text style={{ textAlign: "center", marginTop: 4 }}>A</Text>
          </View>
          <View style={{ height: 25, width: 25, margin: 3, backgroundColor: "#0AF71E" }}>
            <Text style={{ textAlign: "center", marginTop: 4 }}>B</Text>
          </View>
          <View style={{ height: 25, width: 25, margin: 3, backgroundColor: "#EBE71E" }}>
            <Text style={{ textAlign: "center", marginTop: 4 }}>C</Text>
          </View>
          <View style={{ height: 25, width: 25, margin: 3, backgroundColor: "#D6B80B" }}>
            <Text style={{ textAlign: "center", marginTop: 4 }}>D</Text>
          </View>
          <View style={{ height: 25, width: 25, margin: 3, backgroundColor: "#DE3C07" }}>
            <Text style={{ textAlign: "center", marginTop: 4 }}>E</Text>
          </View>
        </View>
        <Text>DEEE : {deee} € d'écotaxe</Text>

      </View>

    ) : <Text>
        loading ..
      </Text>
  }
}
