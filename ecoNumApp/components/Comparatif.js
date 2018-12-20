import React, { Component } from "react";
import { View } from "react-native";
import ComparatifProduct from "./ComparatifProduct";
import data from "../data";

export default class Comparatif extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, height: 50, backgroundColor: "powderblue" }}>
          <ComparatifProduct />
        </View>
        {/* <View style={{ width: 19, height: 50, backgroundColor: "skyblue" }} /> */}
        <View style={{ flex: 1, height: 50, backgroundColor: "skyblue" }}>
          <ComparatifProduct product={data{/>
        </View>
      </View>
    );
  }
}
