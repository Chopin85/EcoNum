import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import Product from "./Product";
import { data } from "../data";

export default class Comparatif extends Component {
  getProduct(category, mark, model) {
    const product = data.filter(
      element =>
        element.categorie === category &&
        element.fabricant === mark &&
        element.designation === model
    );
    return product[0];
  }

  render() {
    console.log("render", this.props);

    const { category, mark, model } = this.props;
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
            <Text style={{ textAlign: "center" }}>{product1.designation}</Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              {product1.fabricant}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product2.designation}</Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              {product2.fabricant}
            </Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", marginTop: 20 }}>
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

        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Capacité batterie
        </Text>
        <View style={styles.lineStyle} />
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product1.batterie}</Text>
          </View>
          <View style={styles.vertical} />
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product2.batterie}</Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", marginTop: 20 }}>Das</Text>
        <View style={styles.lineStyle} />
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product1.das}</Text>
          </View>
          <View style={styles.vertical} />
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product2.das}</Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", marginTop: 20 }}>Résolution</Text>
        <View style={styles.lineStyle} />
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }}>{product1.resolution}</Text>
          </View>
          <View style={styles.vertical} />
          <View style={{ flex: 1, marginBottom: 40 }}>
            <Text style={{ textAlign: "center" }}>{product2.resolution}</Text>
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
    marginTop: 5,
    marginBottom: -15
  },
  vertical: {
    borderWidth: 0.5,
    borderColor: "black",
    width: 1,
    height: 20
  }
});
