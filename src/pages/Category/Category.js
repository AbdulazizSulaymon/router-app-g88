import React from 'react'
import { Link, useParams } from "react-router-dom"
import Container from "../../containers/Container";
import datas from "./../../data";
import CategoryWrapper from './CategoryWrapper';

const Category = (props) => {
    const { category } = useParams();

    const data = datas[category];
    // const data = data.filter(v => v.code == category)[0].data

    return (
        <Container>
            <CategoryWrapper className="container py-5" >
                <h1 className="mb-5">Category: {category}</h1>
                <div className="row">
                    {data?.map(v =>
                        <div className="col-md-3 mb-3 ">
                            <Link to={`/${category}/${v.id}`} className="shadow rounded p-2 product h-100" >
                                <img src={v.img} className="w-100 mb-3 rounded" alt="" />
                                <p className="fw-bold">{v.title}</p>
                                <span>{v.price}</span><br /><span>{v.location}</span>
                            </Link>
                        </div>
                    )}
                </div>
            </CategoryWrapper>
        </Container>
    )
}

export default Category
