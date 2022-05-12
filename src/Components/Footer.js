import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faYoutube, faGoogle} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return ( 
        <div className="container-flud">
            
            <footer className="text-center text-lg-start text-white" style={{backgroundColor: "#1c2331" }}>
                <section
                        className="d-flex justify-content-between p-4"
                        style={{backgroundColor: "#6351ce" }}>
                    <div className="me-5">
                        <span style={{fontWeight: 'bold'}}>Công ty TNHH Thiết kế Chế tạo Máy Phúc ÂN</span>
                    </div>

                    <div>
                        <a href="/" className="text-white me-4">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/" className="text-white me-4">
                        <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="/" className="text-white me-4">
                        <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Công ty TNHH Thiết kế Chế tạo Máy Phúc ÂN</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: '60px', backgroundColor:'#7c4dff', height: '2px' }}
                                    />
                                <p>
                                    Sologan...
                                </p>
                            </div>

                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Liên hệ</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: '60px', backgroundColor:'#7c4dff', height: '2px' }}
                                />
                            <p><i className="fas fa-home mr-3"></i>Địa chỉ: </p>
                            <p><i className="fas fa-envelope mr-3"></i>Email: </p>
                            <p><i className="fas fa-phone mr-3"></i>Số điện thoại: </p>
                        </div>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center p-3"
                    style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
                    >
                © 2020 Copyright
                </div>
            </footer>
        </div>
    );
}

export default Footer;