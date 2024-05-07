// External libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { MdOutlineMenu } from "react-icons/md";

// CSS
// import '../../styles/main.css';

// Components
import { visiblePanelState } from '../states';

// Utilities
import Logo from '../utils/images/pg.svg';
import { RouteConstants } from '../constants/routeConstants';

// import { spinnerState } from '../../states';
import AccountOptions from './AccountOptions';
import Body, { BodyColor, BodyType } from './ui/typography/Body';
import * as Constants from '../utils/Constants';
import SideBar from './SideBar';
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './ui/typography/Heading';


function Header() {
    const navigate = useNavigate();
    const setVisiblePanel = useSetRecoilState(visiblePanelState);
    const onLogoClick = () => {
        navigate(RouteConstants.root);
    }

    const handleClickItem = (route: any) => {
        setVisiblePanel('/' + route);
        navigate(RouteConstants[route]);
    }

    return (
        <div className="header" style={{ height: '9vh' }} >
            <div className='d-flex flex-row'>
                <SideBar />
                <li className="header-item">
                    <img src={Logo} alt="logo" onClick={onLogoClick} className='cursor-pointer' style={{ height: '6vh' }} />
                </li>
            </div>
            <ul className='d-flex flex-row justify-content-between align-items-center'>

                {Constants.headerData.map((data, index) => (
                    <li key={data.key}
                        className='header-item d-flex'
                        onClick={() => handleClickItem(data.key)}
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
    );
}

export default Header;