// External libraries
import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';

// CSS
import '../../styles/main.css';

// Components
import Body, { BodyColor, BodyType } from './typography/Body';
import { sidebarAnchorState, visiblePanelState } from '../../states';

// Utilities
import { RouteConstants } from "../../constants/routeConstants";

interface SideBarProps {
    sidebarData: any;
}
const SideBar = ({sidebarData}: SideBarProps) => {
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement | null>(null);
	const [sidebarAnchor, setSidebarAnchor] = useRecoilState(sidebarAnchorState);
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
                {sidebarData.map((item: any) => (
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
