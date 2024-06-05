'use client'

import { Product } from "@/app/lib/products";

export default function ProductLine({id, name, description, quantity}:Product) {

    return (
        <div className="grid grid-cols-3 gap-4">
            <p>{id}</p> 
            <p>{name}</p>
            <p>{quantity}</p>
        </div>
    )
}

