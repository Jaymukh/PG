// External libraries
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';

// CSS
import '../../styles/main.css';

// Components
import Body, { BodyColor, BodyType } from './typography/Body';
import { headerDataState, sidebarAnchorState, visiblePanelState } from '../../states';

// Utilities
import { RouteConstants } from "../../constants/routeConstants";


const SideBar = () => {
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement | null>(null);
	const [sidebarAnchor, setSidebarAnchor] = useRecoilState(sidebarAnchorState);
    const headerData = useRecoilValue(headerDataState);
    const setVisiblePanel = useSetRecoilState(visiblePanelState);


    const handleItemClick = (data: string) => {
        setVisiblePanel('/' + data);
        navigate(RouteConstants[data]);
        handleClose();
    }

    const handleClose = () => {
		setSidebarAnchor(null);
	};

    const handleClickOutside = (event: { target: any; }) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setSidebarAnchor(null);
		}
	};

    useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

    return (
        <div className="" >            
            {Boolean(sidebarAnchor) 
            && (<ul className='side-menu'>
                {headerData.sidebarData.map((item: any) => (
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
