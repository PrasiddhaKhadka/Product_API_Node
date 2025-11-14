
const getAllProducts= async(req, res) => {
    res.status(200).json({
        message:'All Products'
    })
}
const getAllProductsStatic = (req, res) => {
    res.status(200).json({
        message: "All Static Products"
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}