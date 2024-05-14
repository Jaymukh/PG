// External libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { MdOutlineMenu } from "react-icons/md";

// CSS
// import '../../styles/main.css';

// Components
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './typography/Heading';
import { headerDataState, sidebarAnchorState, visiblePanelState } from '../../states';
import AccountOptions from '../AccountOptions';

// Utilities
import Logo from '../../utils/images/pg.svg';
import { RouteConstants } from '../../constants/routeConstants';
import * as Constants from '../../utils/Constants';


const Header = () => {
    const navigate = useNavigate();
    const setVisiblePanel = useSetRecoilState(visiblePanelState);
    const setHeaderData = useSetRecoilState(headerDataState);
    const [sidebarAnchor, setSidebarAnchor] = useRecoilState(sidebarAnchorState);

    const onLogoClick = () => {
        navigate(RouteConstants.root);
    }

    const handleClickItem = (data: any) => {
        const route = data.key;
        setVisiblePanel('/' + route);
        navigate(RouteConstants[route]);
        setHeaderData(data);
    }
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        Boolean(sidebarAnchor) ? setSidebarAnchor(null) : setSidebarAnchor(event.currentTarget);
    };

    return (
        <div className="header" style={{ height: '9vh' }} >
            <div className='d-flex flex-row'>
                <li className='header-item' onClick={handleMenuClick}>
                    <MdOutlineMenu className='fs-43 color-blue-0' />
                </li>
                <li className="header-item">
                    <img src={Logo} alt="logo" onClick={onLogoClick} className='cursor-pointer' style={{ height: '6vh' }} />
                </li>
            </div>
            <div className='d-flex flex-row'>
                <ul className='d-flex flex-row justify-content-between align-items-center' style={{marginRight: '9vw'}}>
                    {Constants.headerData.map((data, index) => (
                        <li key={data.key}
                            className='header-item d-flex'
                            onClick={() => handleClickItem(data)}
                        >
                            <Heading
                                title={data.option}
                                type={TypographyType.h3}
                                color={TypographyColor.primary}
                                weight={TypographyWeight.bold}
                            />
                        </li>
                    ))}
                </ul>
                <AccountOptions />
            </div>
        </div>
    );
}

export default Header;