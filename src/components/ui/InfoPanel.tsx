import React, { useState, useRef } from 'react';
import '../../styles/main.css';

interface InfoPanelProps {
    Icon: React.ElementType;
    text: string;
    classname?: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ Icon, text, classname }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupStyle, setPopupStyle] = useState<{ left: number | string; right: number | string; width: any; transform?: string; }>({ left: '', right: '', width: 192 });

    const handleMouseEnter = () => {
        const popupWidth = 192;
        const infoButtonPosition = menuRef.current?.getBoundingClientRect();
        

        if (infoButtonPosition) {
            const hasSpaceOnLeft = infoButtonPosition.left >= popupWidth / 2;
            const hasSpaceOnRight = window.innerWidth - infoButtonPosition.right >= popupWidth / 2;

            if (hasSpaceOnLeft && hasSpaceOnRight) {
                // Enough space on both sides, center the popup
                setPopupStyle({ left: '50%', right: 'auto', width: popupWidth, transform: 'translateX(-50%)' });
            } else if (hasSpaceOnLeft) {
                // Not enough space on the right, position on the left
                const rightPosition = -(window.innerWidth - infoButtonPosition.right + window.scrollX - 10);
                setPopupStyle({ left: 'auto', right: rightPosition, width: popupWidth, transform: 'none' });
            } else if (hasSpaceOnRight) {
                // Not enough space on the left, position on the right
                const lefttPosition = - (infoButtonPosition.left + window.scrollX - 10);
                setPopupStyle({ left: lefttPosition, right: 'auto', width: popupWidth, transform: 'none' });
            }
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
            >
                <Icon className={`icon-color-5 margin-left-1 fs-20 ${classname}`} />
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
