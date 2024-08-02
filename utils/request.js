const APIDOMAIN=process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProducts(){


    try{
        const response=await fetch(`${APIDOMAIN}/products`,{cache:'no-store'});
        const res=await response.json();
       
        return res;
    }catch(error){
        console.log(error);
        return [];
    }

}

async function fetchProductsById(productId){
    try{
       
       
        const response=await fetch(`${APIDOMAIN}/products/${productId}`);
        const res=await response.json();

        return res;
    }catch(error){
        console.log(error);
        return {};
    }
}

export {fetchProducts,fetchProductsById};