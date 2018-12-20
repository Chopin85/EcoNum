import React from "react";
import { ScrollView, StyleSheet, Text, Image } from "react-native";
import Product from "../components/Product"

const category = "smartphone"
const mark = "Apple"
const model = "Iphone X"
import Comparatif from "../components/Comparatif";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("../img/LogoEcoNum.png")}
        style={{ width: 156, height: 51, marginBottom: 15 }}
      />
    )
  };
  render () {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={require("../img/phoneImage.jpg")}
          style={{
            width: 418,
            height: 288,
            marginTop: -20
          }}
        />
        <Text style={styles.titleCompare}> Je compare mon téléphone </Text>
        <Product category={category} mark={mark} model={model} />
        <Comparatif />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  titleCompare: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});

// Hello Prudence
