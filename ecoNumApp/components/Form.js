const data = require("../data");

const getAllData = () => {
  const categories = [];
  //   const fabricant = [];
  data.map(e => {
    if (!categories.includes(e.categorie)) {
      categories.push(e.categorie);
    }
    // if (!fabricant.includes(e.fabricant)) {
    //   fabricant.push(e.fabricant);
    // }
  });
  console.log(categories);
  console.log(fabricant);
};

// getAllData();

const getdatafiltre = param => {
  const fabricant = [];
  data.filter(e => {
    if (e.categorie === param && !fabricant.includes(e.fabricant)) {
      fabricant.push(e.fabricant);
    }
  });
  console.log(fabricant);
};

getdatafiltre("smartphone");
