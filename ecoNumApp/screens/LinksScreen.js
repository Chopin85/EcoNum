import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Button
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import SelectList from "../components/SelectList";
import Product from "../components/Product";
const category = "smartphone";
const mark = "Apple";
const model = "Iphone X";
import Comparatif from "../components/Comparatif";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import ListAlternativeProduct from "../components/ListAlternativeProduct";

export default class LinksScreen extends React.Component {
  state = {
    open2produit: false,
    category1: "",
    mark1: "",
    model1: "",
    category2: "",
    mark2: "",
    model2: "",
    isDisplayCompare: false,
    isDisplayListAlternative: false
  };

  getCriteriaProductOne = (category1, mark1, model1) => {
    // console.log("getCriteria", category, mark, model);
    this.setState({
      category1,
      mark1,
      model1
    });
  };

  getCriteriaProductTwo = (category2, mark2, model2) => {
    // console.log("getCriteria", category, mark, model);
    this.setState({
      category2,
      mark2,
      model2
    });
  };

  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("../img/LogoEcoNum.png")}
        style={{ width: 156, height: 51, marginBottom: 15 }}
      />
    )
  };

  handlePressCompare = () => {
    // this.setState({ isDisplayCompare: true });
    console.log("ok");
    this.setState({
      open2produit: !this.state.open2produit
    });
  };

  handleCompare = () => {
    this.setState({ isDisplayCompare: true });
  };

  handleAlternative = () => {
    this.setState({ isDisplayListAlternative: true });
  };

  render() {
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
        <Text style={styles.titleCompare}> Je compare mon appareil </Text>
        <SelectList getCriteria={this.getCriteriaProductOne} />
        {this.state.open2produit && (
          <SelectList getCriteria={this.getCriteriaProductTwo} />
        )}
        <View style={styles.homeButton}>
          <View style={styles.button}>
            {/* <Button
              onPress={this.handlePressCompare}
              title="Comparer avec un 2ème produit"
            /> */}
            {!this.state.open2produit && (
              <AwesomeButton
                onPress={this.handlePressCompare}
                backgroundColor="#75a579"
                width={150}
              >
                Comparer avec un 2ème produit
              </AwesomeButton>
            )}
            {this.state.open2produit && (
              <AwesomeButton
                onPress={this.handleCompare}
                backgroundColor="#75a579"
                width={150}
              >
                Comparer
              </AwesomeButton>
            )}
          </View>
          <View style={styles.button}>
            {/* <Button
              onPress={this.handlePress}
              title="Trouver une alternative"
            /> */}
            <AwesomeButton
              onPress={this.handleAlternative}
              backgroundColor="#75a579"
              width={150}
            >
              Trouver une alternative
            </AwesomeButton>
          </View>
        </View>
        {this.state.isDisplayCompare && (
          <Comparatif
            category1={this.state.category1}
            mark1={this.state.mark1}
            model1={this.state.model1}
            category2={this.state.category2}
            mark2={this.state.mark2}
            model2={this.state.model2}
          />
        )}

        {this.state.isDisplayListAlternative && (
          <ListAlternativeProduct category={this.state.category1} />
        )}
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
    fontWeight: "bold",
    marginBottom: 10
  },
  homeButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  button: {
    width: "40%",
    marginLeft: 2,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  }
});

// Hello Prudence
