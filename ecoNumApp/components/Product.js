import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Pie from 'react-native-pie'
export default class Product extends Component {
  state = {
    product: {},
    loaded: false
  };

  componentDidMount () {
    this.setState({
      product: this.props.product,
      loaded: true
    });
  }

  render () {
    const { loaded, product } = this.state;
    const { categorie, designation, fabricant, prixTTC, batterie, resolution, deee, classeEnergie, recyclable, note, image } = product;
    return loaded ? (

      <View >
        <Image
          source={require("../img/iphonex.png")}
        />
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
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <Text>DEEE : {deee} € d'écotaxe</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <Pie
            radius={50}
            innerRadius={45}
            series={[note]}
            colors={['#f00']}
            backgroundColor='#ddd' />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>{note}%</Text>
          </View>
        </View>
      </View>

    ) : <Text>
        loading ..
      </Text>
  }
}

const styles = StyleSheet.create({
  gauge: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
})