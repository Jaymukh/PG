import React, { useEffect, useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Heading, TypographyColor, TypographyType, TypographyWeight } from '../ui/typography/Heading';
import { Button, ButtonTheme, ButtonVariant } from './button/Button';

interface DrawerProps {
    id: string;
    title: string;
    isOpen: boolean;
    toggleFunction: (isOpen: boolean) => void;
    children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ id, title, isOpen, toggleFunction, children }) => {
    const drawerRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            toggleFunction(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);
    
    return (
        <div className={`offcanvas offcanvas-end h-100 drawer-shadow border-0 overflow-auto ${isOpen ? 'show' : ''}`} id={id} ref ={drawerRef}>
            <div>
                <div className="d-flex flex-row justify-content-between align-items-center margin-0 padding-top-bottom-0">
                    <Heading
                        title={title}
                        type={TypographyType.h4}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='padding-0 text-start padding-right-3 margin-0'
                    />
                    <Button
                        theme={ButtonTheme.primary}
                        variant={ButtonVariant.transparent}
                        onClick={() => toggleFunction(false)}
                        // type='button'
                        classname='padding-left-right-0'
                    >
                        <AiOutlineClose className="fs-20" />
                    </Button>
                </div>
                <div className="margin-top-bottom-3" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Drawer;