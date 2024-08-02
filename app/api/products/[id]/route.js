import connectDb from "@/config/database";
import Products from "@/modal/Product";
import cloudinary from "@/config/cloudinary";

export const GET=async(request,{params})=>{

try{
    const response=await Products.findById(params.id);
   
    return new Response(JSON.stringify(response),{status:200});
}
catch(error){
    return new Response("Error while fetching Data",{status:400});
}
}