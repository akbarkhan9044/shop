"use client"
import styles from '@/styles/shopcart.module.css';
import { XMarkIcon,HomeIcon } from '@heroicons/react/20/solid';
import { useSelector,useDispatch } from 'react-redux';
import {useState} from 'react';
import { ACTION } from '@/redux/constant/action_constant';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Cart() {
  const router=useRouter();
  
  const dataInCart=useSelector((state)=>state.products.cart);
  
  const dispatch=useDispatch();
  const subTotal=dataInCart.reduce((acc,curr)=>{
    acc=acc+curr.price*curr.qty;
    return acc;
  },0)

  const tax=dataInCart.reduce((acc,curr)=>{
    acc=acc+curr.price*curr.qty;
    return acc;
  },0)
    
  const taxAmount=tax*2/100;
  const numberOfItem=dataInCart.length;
  let ShippingCost=0;
  if(numberOfItem>10){
    ShippingCost=0;
  }else{
    ShippingCost=numberOfItem*.73;
  }

  const totoalOrderAmount=subTotal+taxAmount+ShippingCost;

   if(dataInCart.length===0){
    return(
      <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <div className="flex flex-row" >
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Item In Cart
  

    </h1>

    </div>
    <p class="mt-6 text-base leading-7 text-gray-600"></p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Link href="/" class="rounded-md bg-gray-600 px-3.5 py-2.5 
      text-sm font-semibold text-white shadow-sm hover:bg-gray-500
       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-gray-600">Go Back & Shop !!!</Link>
      <svg 
      onClick={()=>{router.push("/")}}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="skyblue" className="size-10">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>
   
    </div>
  </div>
</main>
    )
   }
  return (
   
  <div className={styles.mainContainer}>


{/* List Container     */}
  <div className="mx-28 max-w-1xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
      <h1 className="font-sans text-5xl font-bold">Shopping Cart</h1>
    
      <div className="divide-y  divide-sky-200">
        {dataInCart && dataInCart.map((item)=>(
        <div className={styles.main}>
        <div className={styles.direction}>
      <div className="mt-6 grid py-10 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-1">
      
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={item.images[0]}
           alt={item.images[0]}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        
     
      
      </div>
      <div className="py-16">
        <div>
        <h1 className={styles.heading}>{item.name}</h1>
      
        <div className={styles.colorSize}>
          <p className={styles.color}>
            Amenia
          </p>
          <p className={styles.pipe}>|</p>
          <p  className={styles.color}>Blue</p>
        </div>
        <p className={styles.price}>$ {item.price}</p>
        <div className="grid">
  <select className="appearance-none px-12 mt-4  col-start-1 bg-slate-50 dark:bg-slate-800 ...">
    <option>1 </option>
    <option>3</option>
    <option>3 </option>
    <option>4 </option>
    <option>5</option>
    <option>6 </option>
    <option>7 </option>
    <option>8</option>
    <option>9 </option>
  </select>
</div>
      </div>
      <div className={styles.stock}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
<span>In Stock</span>
</div>
       
   </div>
      </div>
      <div className="py-16">

<svg
onClick={()=>{dispatch({type:ACTION.REMOVE_FROM_CART,payload:item})}}
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
</div>
        </div>
        ))}
      </div>
 
</div>


{/* Order Container */}
<div className={styles.order} >
      <div className={styles.orderwrapper}>
      <p className={styles.orderSummary}>Order summary</p>
      <div className="divide-y divide-blue-200">
  <div className={styles.orderInd}>
    <p>Subtotal</p>
    <p>$ {subTotal}</p>
  </div>
  <div className={styles.orderInd}>
    <p>Shipping estimate
</p>
    <p>$ {ShippingCost}</p>
  </div>
  <div className={styles.orderInd}>
    <p>Tax estimate</p>
    <p>$ {taxAmount}</p>
  </div>
  <div className={styles.orderTotal} >
  <p className={styles.orderSummary}>Order summary</p>
    {totoalOrderAmount &&(<p>$ {totoalOrderAmount}</p>)}
  </div>
</div>
     </div>
    </div>


  </div>
  )
}


