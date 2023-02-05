import { products } from './Constants/data.js'
import Product from './Module/prduct-schema.js'

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log('Data Imported successfully')
  }
  catch (error) {
    console.log('Error while inserting default data', error.message);
  }
}

export default DefaultData;