import { fetchAllProducts } from "@/app/lib/fetch"
import ProductLine from "./ProductLine";
import { Product } from "./lib/products";
import { useState } from "react";

export default async function ProductList() {
    const products = await fetchAllProducts();

    
    return (
        <div>
            <h1>Product List</h1>

            {/* Display the products - return is implicit in the below map function */}
            {products.map((product: Product) =>
                <ProductLine id={product.id} name={product.name} description={product.description} quantity={product.quantity} key={product.id} />
            )}

        </div>
    )
}