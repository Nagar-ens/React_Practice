import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCard = ({ title, id, img, description }) => {
    return <>
        <div className='product-card'>

            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-content'>
                <h3>{title}</h3>
                <h2>Description </h2>
                <p>{description}</p>

            </div>
        </div>
    </>
}

const ProductsApi = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data)
        console.log(response);
        setLoading(true)
    }

    useEffect(() => {
        getData();
    }, [])

    return (loading ? (products?.map((product) => <ProductCard key={product.id} id={product.id} title={product.title}
        img={product.image} description={product.description} />)) : (<div className='spinner-border text-success loader'></div>));
}

const Products = () => {
    return <>
        <div className='product-container'>
            <ProductsApi />
        </div>
    </>;
}
export default Products;
