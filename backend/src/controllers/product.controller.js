const Product = require("../models/product.model");


const getProducts = async (req,res)=>{
    try{
        const products = await Product.find({});
        
        res.status(200).json(products);

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id)

        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const createProduct = async (req, res) => {
    try {
        const lastProduct = await Product.findOne().sort({ id: -1 });
        const newId = lastProduct ? lastProduct.id + 1 : 1;
      
        const product = await Product.create({
            id: newId,
            nome: req.body.nome,
            codigo: req.body.codigo,
            descricao: req.body.descricao,
            preco: req.body.preco,
        });

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)

        if(!product){
            return res.status(404).json({message:"produto nao encontrado"})
        }

        const updateproduct = await Product.findById(id)

        res.status(200).json(updateproduct);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const deleteProduct =  async (req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        
        if(!product){
            return res.status(404).json({message:"produto nao encontrado"});
        }

        res.status(200).json({message:"produto deletado"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,

}