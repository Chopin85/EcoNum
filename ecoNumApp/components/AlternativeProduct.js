import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Pie from "react-native-pie";
import AwesomeButton from "react-native-really-awesome-button";

class AlternativeProduct extends Component {
  state = {
    pieColor: "green"
  };

  getColorPie = () => {
    if (this.props.product.note > 35) {
      this.setState({
        pieColor: "red"
      });
      if (this.props.product.note >= 35 || this.props.product.note < 70) {
        this.setState({
          pieColor: "orange"
        });
      }
      if (this.props.product.note >= 70) {
        this.setState({
          pieColor: "green"
        });
      }
    }
  };
  componentDidMount() {
    this.getColorPie();
  }
  handlePress = () => {
    console.log("ok");
  };

  render() {
    console.log(this.props.product.note);
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
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../img/iphonex.png")}
            style={{ width: 100, height: 150 }}
          />
        </View>
        <View style={styles.child}>
          <Text style={styles.titleText}>{designation}</Text>
          <View style={styles.pie}>
            <Pie
              radius={30}
              innerRadius={25}
              series={[note]}
              colors={[this.state.pieColor]}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>{note}%</Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <AwesomeButton
              onPress={this.handlePress}
              backgroundColor="#75a579"
              width={120}
              height={25}
            >
              en savoir plus
            </AwesomeButton>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  child: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  pie: {
    position: "relative",
    marginTop: 5,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10
  },
  gauge: {
    position: "absolute",
    right: 5,
    bottom: 15
  },
  titleText: {
    fontSize: 18
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 22
  }
});

export default AlternativeProduct;
