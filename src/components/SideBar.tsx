// External libraries
import React, { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';

// CSS
// import '../../../styles/main.css';

// Components
import { Heading, TypographyColor, TypographyType } from '../components/ui/typography/Heading';
import Body, { BodyColor, BodyType } from '../components/ui/typography/Body';
import { loggedUserState, spinnerState, visiblePanelState } from '../states';

// Utilities
import * as Constants from '../utils/Constants';
import { RouteConstants } from "../constants/routeConstants";
import { MdOutlineMenu } from "react-icons/md";


const SideBar = () => {
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement | null>(null);
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    // const loggedUser = useRecoilValue(loggedUserState);
    const [visiblePanel, setVisiblePanel] = useRecoilState(visiblePanelState);
    // const setSpinner = useSetRecoilState(spinnerState);

    const handleItemClick = (data: string) => {
        setVisiblePanel('/' + data);
        navigate(RouteConstants[data]);
        handleClose();
    }

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		Boolean(anchorEl) ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
	};

    const handleClose = () => {
		setAnchorEl(null);
	};

    const handleClickOutside = (event: { target: any; }) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			handleClose();
		}
	};

    useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

    return (
        // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 padding-0 padding-right-3 h-100 bg-blue-0'>
        <div className="side-menu" ref={menuRef}>
            <li className='header-item' onClick={handleMenuClick}>
                <MdOutlineMenu className='fs-43 color-blue-0' />
            </li>
            {Boolean(anchorEl) 
            && (<ul className="side-menu-dropdown">
                {Constants.sidebarData.map((item) => (
                    <li
                        key={item.key}
                        className='side-menu-item d-flex fs-16'
                        onClick={() => handleItemClick(item.key)}
                    >
                        {/* <div className=''>{item.icon}</div> */}
                        <Body
                            type={BodyType.p1}
                            color={BodyColor.white}
                        >
                            {item.option}
                        </Body>
                    </li>
                ))}
            </ul>)}
        </div>
    );
}

export default SideBar;
