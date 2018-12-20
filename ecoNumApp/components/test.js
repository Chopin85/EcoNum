const data = require('../data')

const category = "ordinateur"
const mark = "Lenovo"
const model = "Ordinateur4"
const getProduct = (category, mark, model) => {
  // const {
  //   category,
  //   mark,
  //   model
  // } = props
  const newData = []
  return data.filter(element => {
    if (element.categorie === category && element.fabricant === mark && element.designation === model)
      return element;


  })
}

console.log(getProduct(category, mark, model)[0]);