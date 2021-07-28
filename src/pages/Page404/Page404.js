import "./Page404.css";
import React from 'react'
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page404">
            <Link className="btn btn-dark" to="/">Home</Link>
        </div>
    )
}

export default Page404
