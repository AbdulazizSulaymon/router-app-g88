import React from 'react'
import { useParams } from "react-router-dom"
import Container from "../../containers/Container";
import datas from "./../../data";
import ProductDetailsWrapper from './ProductDetailsWrapper';

const ProductDetails = (props) => {
    const { category, id } = useParams();

    const data = datas[category];
    const details = data.filter(v => v.id == id)[0].details;
    console.log(details);

    return (
        <Container>
            <ProductDetailsWrapper className="container py-5" >
                {details ?
                    <>
                        <h1 className="mb-5">Category: {category}, productId: {id}</h1>
                        <div className="row">
                            <div className="col-md-8">
                                <img src={details.img} className="w-75" alt="" />
                            </div>
                            <div className="col-md-4">
                                <h1>{details.owner}</h1>
                            </div>
                        </div>

                        {details.description}

                    </> :
                    <h1>Product topilmadi</h1>}
            </ProductDetailsWrapper>
        </Container>
    )
}

export default ProductDetails
