import "./Mobileapps.css"
import React from 'react'
import Container from "../../containers/Container"

const Mobileapps = () => {
    return (
        <Container>
            <div className='container'>
                <h1>Мобильные приложения</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Возьмите OLX с собой</h1>
                    </div>
                    <div className="col-md-6">
                        <img src="https://static.olx.uz/static/olxuz/packed/img/2fb666ead34773f24a9b66bb4474a72ebe.png" className="w-50" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Mobileapps
