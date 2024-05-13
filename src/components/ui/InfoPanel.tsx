import React, { useState, useRef } from 'react';
import '../../styles/main.css';

interface InfoPanelProps {
    Icon: React.ElementType;
    text: string;
    classname?: string;
    onClick?: (event: any) => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ Icon, text, classname, onClick }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupStyle, setPopupStyle] = useState<{ left: number | string; right: number | string; width: any; transform?: string; }>({ left: '', right: '', width: 192 });

    const handleMouseEnter = () => {
        const popupMaxWidth = 192; // Maximum width
        const infoButtonPosition = menuRef.current?.getBoundingClientRect();
    
        if (infoButtonPosition) {
            // Calculate the width based on the content
            const popupWidth = Math.min(infoButtonPosition.width, popupMaxWidth);
    
            const hasSpaceOnLeft = infoButtonPosition.left >= popupWidth / 2;
            const hasSpaceOnRight = window.innerWidth - infoButtonPosition.right >= popupWidth / 2;
    
            let popupStyle: { left: number | string; right: number | string; width: string; transform?: string; } = { left: '', right: '', width: 'fit-content' };
    
            if (hasSpaceOnLeft && hasSpaceOnRight) {
                // Enough space on both sides, center the popup
                popupStyle = { ...popupStyle, left: '50%', right: 'auto', transform: 'translateX(-50%)' };
            } else if (hasSpaceOnLeft) {
                // Not enough space on the right, position on the left
                const rightPosition = -(window.innerWidth - infoButtonPosition.right + window.scrollX - 10);
                popupStyle = { ...popupStyle, left: 'auto', right: rightPosition };
            } else if (hasSpaceOnRight) {
                // Not enough space on the left, position on the right
                const lefttPosition = - (infoButtonPosition.left + window.scrollX - 10);
                popupStyle = { ...popupStyle, left: lefttPosition };
            }
    
            // Set the maximum width
            popupStyle.width = `max-content`;
    
            setPopupStyle(popupStyle);
        }
        setShowPopup(true);
    };
    

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    return (
        <div className="info-container" ref={menuRef}>
            <div
                className="cursor-pointer infoIcon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onClick} 
            >
                <Icon className={`margin-left-1 fs-20 ${classname}`} />
            </div>
            {showPopup && (
                <div className='popup' style={{ ...popupStyle }}>
                    <p className='margin-0 text-start info-text-wrap' dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            )}
        </div>
    );
};

export default InfoPanel;
