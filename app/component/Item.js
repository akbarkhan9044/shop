"use clents";
import React from 'react'
import Link from 'next/link';
export default function Item({products}) {

  return (
    <>
    {products.map((product) => (
              <Link key={product._id} href={`/products/${product._id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.images[0]}
                    src={product.images[0]}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700 text-center">{product.name}</h3>
                <h3 className="mt-4 text-sm text-center text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-center font-medium text-gray-900">$ {product.price}</p>
              </Link>
            ))}
    </>
  )
}
