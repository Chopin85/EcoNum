import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Pie from "react-native-pie";

class AlternativeProduct extends Component {
  state = {};

  render() {
    const { product } = this.props;
    console.log("product image", product.image);
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
      note,
      image
    } = product;
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          source={require("../img/iphonex.png")}
          style={{ width: 100, height: 150, marginLeft: 45 }}
        />
        <Pie
          radius={50}
          innerRadius={45}
          series={[note]}
          colors={["#f00"]}
          backgroundColor="#ddd"
        />
        <View style={styles.gauge}>
          <Text style={styles.gaugeText}>{note}%</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gauge: {
    position: "absolute",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24
  }
});

export default AlternativeProduct;
