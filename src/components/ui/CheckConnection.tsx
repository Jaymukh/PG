
import React from 'react'
import '../../../src/App.css'
import { MdCheckCircle } from "react-icons/md";
import { Button, ButtonTheme, ButtonSize, ButtonVariant } from './button/Button';
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './typography/Heading';

interface ConfirmDeleteProps {
    openCheckConnection: boolean;
    closeCheckConnectionModal: () => void;
    
}

const CheckConnection: React.FC<ConfirmDeleteProps> = ({
    openCheckConnection,
    closeCheckConnectionModal,
   
}) => {
    return (
        <div data-testid="ConfirmDelete">
            <div className={`modal ${openCheckConnection ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: openCheckConnection ? 'block' : 'none', borderStyle: 'inset' }}>
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered w-25">
                    <div className="modal-content">
                        <div className="modal-body d-flex flex-column justify-content-center align-items-center text-center m-auto">
                            <div className='d-flex flex-row justify-content-end w-100 pb-1'>
                                <Button type="button" theme={ButtonTheme.secondary} variant={ButtonVariant.transparent} classname="btn-close" onClick={() => closeCheckConnectionModal()}></Button>
                            </div>
                            <MdCheckCircle className='text-center fs-64 color-orange my-3 color-green-0' />
                            <Heading
                                title='Check Connection'
                                type={TypographyType.h5}
                                color={TypographyColor.dark}
                                weight={TypographyWeight.medium}
                            />
                            <p className='text-center fontSizeS my-3'>Connection to the Profile1 is Successful</p>
                            <Button
                                theme={ButtonTheme.primary}
                                size={ButtonSize.large}
                                variant={ButtonVariant.contained}
                                onClick={() => closeCheckConnectionModal()}
                                classname='my-2'
                            >
                                Close
                            </Button>
                            
                        </div>
                    </div>
                </div>
            </div>
            {openCheckConnection && <div className=" modal-backdrop fade show"></div>}
        </div>
    )
}
export default  CheckConnection;
