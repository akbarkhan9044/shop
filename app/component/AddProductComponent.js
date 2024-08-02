'use client';
import React from 'react';
import { useState,useEffect } from 'react';

export default function PropertyAddFormPage() {
  const [mounted,setMounted]=useState(false);
  const [fields,setFeilds]=useState({
    tag:'Fragrances',
    name:'',
    description:'',
    price:0,
    category:'',
    colors:[],
    images:[],
    amenities:[],
    sizes:[]
  });


  useEffect(()=>{
    setMounted(true);
  },[]);


  const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name.includes('.')){
      const [outerKey,innerKey]=name.split('.');


      setFeilds((previousFeild)=>({
        ...previousFeild,
        [outerKey]:{
          ...previousFeild[outerKey],
          [innerKey]:value
        }
      }))
    }
    else{
      setFeilds((previousFeild)=>({
        ...previousFeild,
        [name]:value
      }))
    }

  };

  //Handle Amendties
  const handleAmenitiesChange=(e)=>{
   const {value}=e.target;
    const index=fields.amenities.indexOf(value);
   
    const updatedAmenties=[...fields.amenities];
    if(index === -1){
      updatedAmenties.push(value);
    }else{
      updatedAmenties.splice(index,1);
    }
    setFeilds((prev)=>({
      ...prev,
      amenities:updatedAmenties
    }))

  };




  //HandleSize
  const handleSize=(e)=>{
    const {value}=e.target;
     const index=fields.sizes.indexOf(value);
  
     const updatedSize=[...fields.sizes];
     if(index === -1){
        updatedSize.push(value);
     }else{
        updatedSize.splice(index,1);
     }
     setFeilds((prev)=>({
       ...prev,
       sizes:updatedSize
     }))

   };



  const handleImageChange=(e)=>{
    const {files}=e.target;
   const updatedImages=[...fields.images];
   for(const file of files){
    updatedImages.push(file);
   }
   setFeilds((prev)=>({
    ...prev,
    images:updatedImages
   }));
  
  };



  return     mounted &&(
    <form action='/api/products' 
    method='POST'
     encType='multipart/form-data'>
    <h2 className="text-3xl text-center font-semibold mb-6">
      Add Product
    </h2>

    <div className="mb-4">
      <label
        htmlFor="tag"
        className="block text-gray-700 font-bold mb-2"
        >Product Type</label
      >
      <select
        id="tag"
        name="tag"
        className="border rounded w-full py-2 px-3"
        value={fields.tag}
        onChange={handleChange}
        required
      >
        <option value="Men’s Clothing">Men’s Clothing</option>
        <option value="Women’s Clothing">Women’s Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Skincare">Skincare</option>
        <option value="Fragrances">Fragrances</option>
        <option value="Books">Books</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Bottles">Bottles</option>
        <option value="Pencil">Pencil</option>
        <option value="Bag">Bag</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2"
        >Product Name</label
      >
      <input
        type="text"
        id="name"
        name="name"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="eg. Skincare or Women’s Clothing"
        value={fields.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="description"
        className="block text-gray-700 font-bold mb-2"
        >Description</label
      >
      <textarea
        id="description"
        name="description"
        className="border rounded w-full py-2 px-3"
        rows="4"
        value={fields.description}
        onChange={handleChange}
        placeholder="Add an optional description of your product"
      ></textarea>
    </div>
    <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2"
          >Price</label
        >
        <input
          type="number"
          id="price"
          name="price"
          value={fields.price}
        onChange={handleChange}
        placeholder="$100"
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>


      <div className="mb-4">
      <label
        htmlFor="category"
        className="block text-gray-700 font-bold mb-2"
        >Product Category</label
      >
      <select
        id="category"
        name="category"
        className="border rounded w-full py-2 px-3"
        value={fields.category}
        onChange={handleChange}
        required
      >
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Skincare">Skincare</option>
        <option value="Fragrances">Fragrances</option>
        <option value="Books">Books</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Bottles">Bottles</option>
        <option value="Pencil">Pencil</option>
        <option value="Bag">Bag</option>

      </select>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2"
        >Colors</label
      >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div>
          <input
            type="checkbox"
            id="amenity_wifi"
            name="amenities"
            value="red"
            checked={fields.amenities.includes('red')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label htmlFor="amenity_wifi">Red</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_kitchen"
            name="amenities"
            value="blue"
            checked={fields.amenities.includes('blue')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label htmlFor="amenity_kitchen">Blue</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_washer_dryer"
            name="amenities"
            value="yellow"
            checked={fields.amenities.includes('yellow')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label htmlFor="amenity_washer_dryer">Yellow</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_free_parking"
            name="amenities"
            value="black"
            checked={fields.amenities.includes('black')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label htmlFor="amenity_free_parking">Black</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_pool"
            name="amenities"
            value="green"
            checked={fields.amenities.includes('green')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label htmlFor="amenity_pool">Green</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_hot_tub"
            name="amenities"
            value="skyblue"
            checked={fields.amenities.includes('skyblue')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label htmlFor="amenity_hot_tub">Sky Blue</label>
        </div>
     
      </div>
    </div>



    

    

   
    <div className="mb-4 bg-blue-50 p-4">
    <label className="block text-gray-700 font-bold mb-2"
        >Select Sizes</label
      >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div>
          <input
            type="checkbox"
            id="small"
            name="sizes"
            value="small"
            checked={fields.sizes.includes('small')}
            onChange={handleSize}
            className="mr-2"
          />
          <label htmlFor="small">small</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="medium"
            name="sizes"
            value="medium"
            checked={fields.sizes.includes('medium')}
            onChange={handleSize}
            className="mr-2"
          />
          <label htmlFor="medium">Medium</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="large"
            name="sizes"
            value="large"
            checked={fields.sizes.includes('large')}
            onChange={handleSize}
            className="mr-2"
          />
          <label htmlFor="large">large</label>
        </div>
       
      </div>
    </div>

   

    <div className="mb-4">
      <label htmlFor="images" className="block text-gray-700 font-bold mb-2"
        >Images (Select up to 4 images)</label
      >
      <input
        type="file"
        id="images"
        name="images"
        onChange={handleImageChange}
        className="border rounded w-full py-2 px-3"
        accept="image/*"
        multiple
        required
      />
    </div>

    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Property
      </button>
    </div>
  </form>
  )
}
