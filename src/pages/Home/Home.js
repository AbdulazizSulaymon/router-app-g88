import "./Home.css"
import React from 'react'
import Header from "./../../containers/Header"
import { Link } from "react-router-dom"
import Footer from "../../containers/Footer"
import Container from "../../containers/Container"

// Работа
// Животные
// Дом и сад
// Электроника
// Бизнес и услуги
// Мода и стиль

const data = [
    {
        title: "Детский мир",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        to: "detskiy-mir",
        color: "#ffce32"
    },
    {
        title: "Транспорт",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        to: "transport",
        color: "#23e5db"
    }
]

const Home = () => {
    return (
        <Container>
            <div className="container py-5">
                <h1 className="text-center">Главные категории</h1>
                <div className='d-flex' >
                    {data.map(v =>
                        <Link to={v.to} className="category me-4">
                            <div className="circle mx-auto" style={{ backgroundColor: v.color }}>
                                <img src={v.img} className="w-75" alt="" />
                            </div>
                            <p>{v.title}</p>
                        </Link>)}
                </div>
            </div>
        </Container>
    )
}

export default Home
