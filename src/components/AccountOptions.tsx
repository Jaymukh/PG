/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { IoMdArrowDropdown } from 'react-icons/io';

// CSS
import '../styles/main.css';

// Components
import { ButtonAvatar } from './ui/button/ButtonAvatar';
import { AllSettingsState, UserSettingsState, loggedUserState, visiblePanelState } from '../states';

// Utilities
import * as Constants from '../utils/Constants';
import Logo from '../utils/images/pg.svg'
import { RouteConstants } from '../constants';
// import { useSettingsService, useUserService } from '../../services';
// import { useMapHelpers } from '../../helpers';
import Body, { BodyColor, BodyType } from './ui/typography/Body';


const AccountOptions = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const navigate = useNavigate();
	// const userService = useUserService();
	// const settingsService = useSettingsService();
	const [loggedUser, setLoggedUser] = useRecoilState(loggedUserState);
	// const setSettings = useSetRecoilState(AllSettingsState);
	// const setUserSettings = useSetRecoilState(UserSettingsState);
	const setVisiblePanel = useSetRecoilState(visiblePanelState);
	// const { getErrorMsg } = useMapHelpers();



	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		Boolean(anchorEl) ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
	};

	const handleClickMenuItem = (route: string) => {
		setVisiblePanel('/' + route);
		handleClose();
		navigate(RouteConstants[route]);
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

	useEffect(() => {
		setLoggedUser({ ...loggedUser, initial: 'PG', name: 'Procter & Gamble' });		
	}, []);

	return (
		<div className='account-menu' ref={menuRef}>
			<div className='d-flex flex-row justify-content-center align-items-center' onClick={handleClick}>
				<ButtonAvatar
					image={Logo}
					initial={loggedUser.initial}
					bgColor='#0193D8'
					classname='margin-right-1'
				/>
				<IoMdArrowDropdown className='margin-left-1 padding-left-right-0 fs-22' color='rgba(28, 27, 31, 1)' />
			</div>

			{Boolean(anchorEl) &&
				(<ul className='account-menu-dropdown '>
					<li className='menu-item' onClick={() => handleClickMenuItem('profile')}>
						<div>
							<ButtonAvatar
								image={loggedUser?.profile_picture}
								initial={loggedUser.initial}
								bgColor={!loggedUser?.profile_picture && '#2B0D5C'}
								classname=''
								disabled={false}
							/>
						</div>
						{/* <Heading
							title={loggedUser.name}
							colour={TypographyColor.dark}
							type={TypographyType.h4}
							classname='text-start text-wrap padding-left-2 margin-0'
						/> */}
						<Body
							type={BodyType.p2}
							color={BodyColor.dark}
						>{loggedUser.name}</Body>
					</li>
					{Constants.accountMenuItems.map((item) => (
						<li
							key={item.key}
							className='menu-item d-flex fs-16'
							onClick={() => handleClickMenuItem((item.text)?.toLowerCase())}
						>
							<div className=''>{item.icon}</div>
							{/* <Heading
									title={item.text}
									colour={TypographyColor.dark}
									type={TypographyType.h4}
									classname='text-start text-wrap padding-left-2 margin-0'
								/> */}
							<Body
								type={BodyType.p2}
								color={BodyColor.dark}
							>{item.text}</Body>
						</li>
					))}
				</ul>)
			}
		</div >
	);
}

export default AccountOptions;