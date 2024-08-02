
import connectDb from "@/config/database";
import Products from "@/modal/Product";
import cloudinary from "@/config/cloudinary";

export const GET=async(request)=>{

    try{
        connectDb();
        const  response=await Products.find();
        
        
  ;     return new Response(JSON.stringify(response),{status:200});
    }catch(error){
        return new Response(JSON.stringify("I am akbar"),{status:200});
    }

}

export const POST=async(request)=>{
    
    try{
        const data =await request.formData();
        const amenities=data.getAll('amenities');
        const sizes=data.getAll('sizes');
 

        const productData={
            tag:data.get('tag'),
            name:data.get('name'),
            description:data.get('description'),
            price:data.get('price'),
            category:data.get('category'),
            colors:amenities,
            sizes:sizes

        };
       


        
        let  images=data.getAll('images').filter((image)=>image.name !=='');
        
            //Upload image
            const uploadImageValue=[];
            
            for(const image of images){
                const imageBuffer=await image.arrayBuffer();
                const imageArray=Array.from(new Uint8Array(imageBuffer));
                const imageData=Buffer.from(imageArray);
    
                //Convert the image
                const imageBase64=imageData.toString('base64');
                
                //Make request to Upload the image
                const result=await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`,{
                    folder:'products'
                });
                
    
                uploadImageValue.push(result.secure_url);
    
              
    
                //wait for all images to upload
                const uploadedImages=await Promise.all(uploadImageValue);
    
                //add to product data
                productData.images=uploadImageValue;
        
            }
            await connectDb();
            const createProduct=await Products.create(productData);
            return  Response.redirect(`${process.env.NEXTAUTH_URL}`); 

        //return new Response(JSON.stringify("Ok"),{status:200});
    }catch(error){
        
        console.log(error);
        return new Response(JSON.stringify("I am akbar"),{status:200});
    }
}
