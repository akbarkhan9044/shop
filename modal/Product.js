import {mongoose,model,models} from 'mongoose';


const productSchema=new mongoose.Schema({
    name: {
        type: String,
       
      },

      description: {
        type: String,
        
       
      },
      price: {
        type: Number,
      
        min: 0
      },
      category: {
        type: String,
        
        
      },
      images: [{
      type:String
      }],
      colors:[{type:String}],
      sizes:[{type:String}],
      ratings:{type:Number},
      reviews:[{
        type:String
      }],
      discount:{type:Number},
      tags:{type:String},
      

      
},{timestamps:true});


const Products=models.Products|| model("Products",productSchema);


export default Products;