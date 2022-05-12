import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

function News() {

    const handleDropDownDien = () => {
        const dropDown1 = document.getElementById('dropDownDien')
        if (dropDown1.style.display === 'none') {
            return dropDown1.style.display = 'block'
        } else { return dropDown1.style.display = 'none'}
    }

    const handleDropDownLinkKien = () => {
        const dropDown1 = document.getElementById('dropDownLinhKien')
        if (dropDown1.style.display === 'none') {
            return dropDown1.style.display = 'block'
        } else { return dropDown1.style.display = 'none'}
    }

    const handleDropDownKhiNen = () => {
        const dropDown1 = document.getElementById('dropDownKhiNen')
        if (dropDown1.style.display === 'none') {
            return dropDown1.style.display = 'block'
        } else { return dropDown1.style.display = 'none'}
    }

    return ( 
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-4 m-3" id='leftMenu'>
                    <h2>DANH MỤC SẢN PHẨM</h2>
                    <ul>
                        <li className="nav-item dropdown mt-3">
                            <div className='hoverDiv' onClick={handleDropDownDien}>
                                Điện công nghiệp <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                            <ul id='dropDownDien' className="submenu">
                                <li><a className="dropdown-item" href="#">Servo</a></li>
                                <li><a className="dropdown-item" href="#">PLC</a></li>
                                <li><a className="dropdown-item" href="#">Biến tần</a></li>
                                <li><a className="dropdown-item" href="#">Contactor</a></li>
                                <li><a className="dropdown-item" href="#">Relay</a></li>
                                <li><a className="dropdown-item" href="#">MCB</a></li>
                                <li><a className="dropdown-item" href="#">Công tắc</a></li>
                                <li><a className="dropdown-item" href="#">Sản phẩm khác</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mt-3">
                            <div className='hoverDiv'  onClick={handleDropDownLinkKien}> 
                                Linh kiện cơ khí <FontAwesomeIcon icon={faChevronDown}/>                            
                            </div>
                            <ul id='dropDownLinhKien' className="submenu">
                                <li><a className="dropdown-item" href="#">Ray trượt</a></li>
                                <li><a className="dropdown-item" href="#">Nhôm định hình</a></li>
                                <li><a className="dropdown-item" href="#">Ổ bi</a></li>
                                <li><a className="dropdown-item" href="#">Vít me</a></li>
                                <li><a className="dropdown-item" href="#">Gối đỡ</a></li>
                                <li><a className="dropdown-item" href="#">Phụ kiện</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mt-3">
                            <div className='hoverDiv'  onClick={handleDropDownKhiNen}>
                                Linh kiện khí nén <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                            <ul id='dropDownKhiNen' className="submenu">
                                <li><a className="dropdown-item" href="#">Xy lanh</a></li>
                                <li><a className="dropdown-item" href="#">Phụ kiện</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-6 m-3">
                    <img className='banner' src='./assets/images/banner.jpg' />
                </div>
            </div>
        </div>
     );
}

export default News;