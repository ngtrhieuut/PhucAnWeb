import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faYoutube, faGoogle} from '@fortawesome/free-brands-svg-icons'

function Header() {

    return ( 
        <div className='container-flud'>
            <div className='row d-flex justify-content-center'> 
                <div className='col-sm-12 col-lg-2 col-md-6' id='logoHeader'>
                    <img src='./assets/images/logo1.jpg' />
                </div>
                <div className='col-sm-12 col-lg-6 col-md-6' id='CompanyName'>
                    <h1>
                        CÔNG TY THIẾT KẾ CHẾ TẠO MÁY PHÚC ÂN
                    </h1>
                </div>
                <div className='col-lg-2' id='contactHeader'>
                    <FontAwesomeIcon icon={faPhone} style={{fontSize: '20px', color: 'rgb(80, 222, 241)'}}/>
                    <h5>Liên hệ</h5>
                    <h5>Số điện thoại</h5>
                    <h5>Email</h5>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mt-2 mb-2" style={{padding: '0px'}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" id='spanBtn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item tabInfo">
                            <a className="active" aria-current="page" href="#">Trang chủ</a>
                        </li>
                        <li className="nav-item tabInfo">
                            <a className="" href="#">Giới thiệu</a>
                        </li>
                        <li className="nav-item dropdown tabInfo">
                            <a className="dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sản phẩm
                            </a>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Điện công nghiệp</a></li>
                                <li><a className="dropdown-item" href="#">Linh kiện cơ khí</a></li>
                                <li><a className="dropdown-item" href="#">Linh kiện khí nén</a></li>
                            </ul>
                        </li>
                        <li className="nav-item tabInfo">
                            <a className="" href="#">Dịch vụ</a>
                        </li>
                        <li className="nav-item tabInfo">
                            <a className="" href="#">Tuyển Dụng</a>
                        </li>
                        <li className="nav-item tabInfo">
                            <a className="" href="#">Liên hệ</a>
                        </li>
                        <li className="nav-item tabInfo">
                            <a className="" href="#">Tin tức</a>
                        </li>
                    </ul>
                    <form className="d-flex mb-1 mt-1">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light bg-dark " type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default Header;