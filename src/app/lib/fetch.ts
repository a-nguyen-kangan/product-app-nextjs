"use server"

export async function fetchAllProducts() {
    const data = await fetch("https://665e45471e9017dc16ef83fe.mockapi.io/api/Products");
    
    if (data.ok) {
        const products = await data.json();
        return products;
    } 
        
    return null;
}