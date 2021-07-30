import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="container  py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <Link to={"/mobileapps"}>Мобильные приложения</Link>
                            <Link to={"/mobileapps"}>Мобильные приложения</Link>
                            <Link to={"/mobileapps"}>Мобильные приложения</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div></div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <a className="me-3" href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="" />
                            </a>
                            <a href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
