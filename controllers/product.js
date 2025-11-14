const Product = require('../models/product')


const getAllProducts= async(req, res) => {
   const {company, name, featured,sort,fields,numericFilters} = req.query
   const query0bject={}

   if(featured){
    query0bject.featured = featured === 'true' ? true : false
   }

   if(company){
    query0bject.company = company
   }

   if(name){
    // regrex to understand the pattern and i for case insensitive
    query0bject.name = {$regex: name, $options: 'i'}
   }

   if(numericFilters){
    const operatorMap = {
        '>': '$gt',
        '>=': '$gte',
        '=': '$eq',
        '<': '$lt',
        '<=': '$lte'
    }
       const regrex = /\b(<|>|>=|=|<|<=)\b/g
   let filters = numericFilters.replace(regrex, (match) => `-${operatorMap[match]}-`)

   const options = ['price', 'rating']
   filters = filters.split(',').forEach((item) => {
    const [field, operator, value] = item.split('-')
    if(options.includes(field)){
        query0bject[field] = {[operator]: Number(value)}
    }
   })
   }


    //  getProduct = await Product.find(query0bject);
      let result = Product.find(query0bject)

      if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
      }else{
        result = result.sort('createdAt')
      }


      //fields
      if(fields){
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
      }

      //page 
      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 10
      const skip = (page - 1) * limit
      result = result.skip(skip).limit(limit)

    const product = await result
    res.status(200).json({
           message: "Success",
           products: product,
           nbHits: product.length       
    })
  
   
}
const getAllProductsStatic = async(req, res) => {
    const {name} = req.query
    const queryObject ={}

    if (name){
        queryObject.name = name
    }

    allProducts = await Product.find(queryObject);
    res.status(200).json({
        message: "All Static Products",
        products: allProducts,
        nbHits: allProducts.length
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}