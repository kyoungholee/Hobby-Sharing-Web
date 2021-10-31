import React, {useState} from 'react'
import './Category.css';
import {Link, useHistory} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import {CategoryData} from './CategoryData';

function Category() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)





    const history = useHistory();

    const goTOEvent = () => {
        history.push('/Event')
    }
    const goTOPopularity = () => {
        history.push('/Popularity')
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='category'>
                    <Link to='#' className='menu-bars'>
                        전체 카테고리
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {CategoryData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            );
                            })}
                </ul>
            </nav>
                    <div className = "category-bar">
                    <Link to='#' className = "Popularity">
                    인기목록
                    </Link>
                    <Link to='#'>
                    바로등록
                    </Link>
                    <Link to='#'>
                    할인 폼목
                    </Link>
                    <Link to='#'>
                    월별 가입 혜택
                    </Link>
                    <Link to='#'>
                    새로운 취미
                    </Link>
                    <Link to='#'>
                    이벤트
                    </Link>
                    </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Category;
