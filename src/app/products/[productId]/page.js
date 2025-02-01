import React from 'react';

const ProductIdDynamic = async ({params,searchParams}) => {
const productId = await params.productId;

    return (
        <div>
           <h1 className='text-4xl text-center'>This is dynamic Page {productId}</h1>
        </div>
    );
};

export default ProductIdDynamic;