import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Pie from "react-native-pie";
import { Icon } from "react-native-elements";
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
    console.log(product.image);
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
    return loaded ? (
      <View>
        <Image
          source={require("../img/iphonex.png")}
          style={{ width: 100, height: 150, marginLeft: 45 }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 15
          }}
        >
          {designation}
        </Text>
        <Text style={{ textAlign: "center" }}>{fabricant}</Text>
        <Icon name="arrow-drop-down" color="black" style={{ marginTop: 15 }} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              height: 25,
              width: 25,
              margin: 3,
              backgroundColor: "#04870F"
            }}
          >
            <Text style={{ textAlign: "center" }}>A</Text>
          </View>
          <View
            style={{
              height: 25,
              width: 25,
              margin: 3,
              backgroundColor: "#0AF71E"
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 4 }}>B</Text>
          </View>
          <View
            style={{
              height: 25,
              width: 25,
              margin: 3,
              backgroundColor: "#EBE71E"
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 4 }}>C</Text>
          </View>
          <View
            style={{
              height: 25,
              width: 25,
              margin: 3,
              backgroundColor: "#D6B80B"
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 4 }}>D</Text>
          </View>
          <View
            style={{
              height: 25,
              width: 25,
              margin: 3,
              backgroundColor: "#DE3C07"
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 4 }}>E</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15
          }}
        >
          <Text>DEEE : {deee} € d'écotaxe</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15
          }}
        >
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
      </View>
    ) : (
      <Text>loading ..</Text>
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
