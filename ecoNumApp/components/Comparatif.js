import React, { Component } from "react";
import { View } from "react-native";
import Product from "./Product";

const category = "smartphone";
const mark = "Apple";
const model = "Iphone X";

export default class Comparatif extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, height: 50, backgroundColor: "powderblue" }}>
          <Product category={category} mark={mark} model={model} />
        </View>
        {/* <View style={{ width: 19, height: 50, backgroundColor: "skyblue" }} /> */}
        <View style={{ flex: 1, height: 50, backgroundColor: "skyblue" }}>
          <Product category={category} mark={mark} model={model} />
        </View>
      </View>
    );
  }
}
