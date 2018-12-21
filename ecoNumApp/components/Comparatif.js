import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import Product from "./Product";
import { data } from "../data";

export default class Comparatif extends Component {
  getProduct(category, mark, model) {
    console.log(data[0].categorie);
    console.log(data[0].fabricant);
    console.log(data[0].designation);
    const product = data.map(element => {
      if (
        element.categorie === category &&
        element.fabricant === mark &&
        element.designation === model
      ) {
        console.log("mon element", element);

        return element;
      }
    });
    return product[0];
  }

  render() {
    const category = "smartphone";
    const mark = "Apple";
    const model = "Iphone X";
    const product1 = this.getProduct(category, mark, model);
    const product2 = this.getProduct(category, mark, model);

    return (
      <Fragment>
        {/* // Les deux produits en mode graph */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Product product={product1} />
          </View>
          <View style={{ flex: 1 }}>
            <Product product={product2} />
          </View>
        </View>
        {/* // les suites des infos en mode texte */}
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Text>{product1.designation}</Text>
            <Text style={{ fontSize: 10 }}>{product1.fabricant}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{product2.designation}</Text>
            <Text style={{ fontSize: 10 }}>{product2.fabricant}</Text>
          </View>
        </View>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Prix de vente TTC
        </Text>
        <View style={styles.lineStyle} />

        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product1.prixTTC}</Text>
          </View>
          <View style={styles.vertical} />
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product2.prixTTC}</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    marginTop: 10,
    marginBottom: -15
  },
  vertical: {
    borderWidth: 0.5,
    borderColor: "black",
    width: 1,
    height: 30
  }
});
