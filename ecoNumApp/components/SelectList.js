import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const data = require("../data");
// import RNPickerSelect from './debug'

export default class SelectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorieSelect: null,
      fabricantSelect: null,
      modelSelect: null,
      data: data.data,
      categories: [],
      fabricant: [],
      model: []
    };
  }
  // Fonction get data all
  getAllData = () => {
    const categories = [];
    const categories2 = [];
    //   const fabricant = [];
    this.state.data.filter(e => {
      if (!categories.includes(e.categorie)) {
        categories.push(e.categorie);
      }
      // if (!fabricant.includes(e.fabricant)) {
      //   fabricant.push(e.fabricant);
      // }
    });
    categories.map((e, index) => {
      categories2.push({ label: e, value: e });
    });
    this.setState({
      categories: categories2
    });
  };

  //fonction get data filtre
  getdataFabricant = param => {
    const fabricant = [];
    const fabricant2 = [];

    console.log(param);

    this.state.data.filter(e => {
      if (e.categorie === param && !fabricant.includes(e.fabricant)) {
        fabricant.push(e.fabricant);
      }
    });
    fabricant.map((e, index) => {
      fabricant2.push({ label: e, value: e });
    });
    this.setState({
      fabricant: fabricant2
    });
    console.log(fabricant);
  };
  //fonction get data model
  getdataModel = (cat, fab) => {
    const model = [];
    const model2 = [];

    this.state.data.filter(e => {
      if (
        e.categorie === cat &&
        e.fabricant === fab &&
        !model.includes(e.designation)
      ) {
        model.push(e.designation);
      }
    });
    model.map((e, index) => {
      model2.push({ label: e, value: e });
    });
    this.setState({
      model: model2
    });
    console.log(model);
  };

  componentDidMount() {
    this.getAllData();
    // console.log(this.state.data.data)
  }

  render() {
    console.log(this.state.fabricantSelect);
    return (
      <ScrollView>
        {/* Champ Category */}
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ width: "50%", padding: 10 }}>
            <RNPickerSelect
              placeholder={{
                label: "Catégories",
                value: null,
                color: "#9EA0A4"
              }}
              items={this.state.categories}
              onValueChange={value => {
                this.setState({
                  categorieSelect: value
                });
                this.getdataFabricant(value);
              }}
              style={{ ...pickerSelectStyles }}
            />
          </View>
          {/* Champ Marques */}
          <View style={{ width: "50%", padding: 10 }}>
            <RNPickerSelect
              placeholder={{
                label: "Marque",
                value: null,
                color: "#9EA0A4"
              }}
              items={this.state.fabricant}
              onValueChange={value => {
                this.setState({
                  fabricantSelect: value
                });
                this.getdataModel(this.state.categorieSelect, value);
              }}
              style={{ ...pickerSelectStyles }}
            />
          </View>
        </View>
        {/* Champ modèle */}
        <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
          <RNPickerSelect
            placeholder={{
              label: "Modèle",
              value: null,
              color: "#9EA0A4"
            }}
            items={this.state.model}
            onValueChange={value => {
              this.setState({
                modelSelect: value
              });
            }}
            style={{ ...pickerSelectStyles }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  }
});
