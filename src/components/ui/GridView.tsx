// External Libraries
import { useEffect, useState } from 'react';
import { BsTable } from "react-icons/bs";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './typography/Heading';
import { Button, ButtonSize, ButtonTheme, ButtonVariant } from './button/Button';
import * as Constants from '../../utils/Constants';
import { MdDeleteSweep, MdInfo, MdModeEdit, MdOutlineHub } from 'react-icons/md';
import { Card, CardSize, CardVariant } from './card/Card';
import Body, { BodyColor, BodyType } from './typography/Body';
import Switch from './switch/Switch';
import SearchBar from './search/SearchBar';
import { VscDiffAdded } from "react-icons/vsc";
import CheckConnection from '../../components/ui/CheckConnection';

// CSS
import '../../styles/main.css';
import InfoPanel from './InfoPanel';

// Components

interface GridViewProps {
    setGridView: (gridView: boolean) => void;
    gridName: string;
    tData: any;
    searchTerm: string | '';
    handleInputChange: (value: any) => void;
    suggestions: any;
    handleEditClick: (data: any) => void;
    handleDelete: (id: string) => void;
    handleAddNew: () => void;
    checkConnectionColor?: boolean;
}

const GridView = ({ setGridView, gridName, tData, searchTerm, handleInputChange, suggestions, handleEditClick, handleDelete, handleAddNew, checkConnectionColor }: GridViewProps) => {
    const [buttonState, setButtonState] = useState<[number, boolean]>([0, false]);
    const [gridData, setGridData] = useState(tData);
    const [checkedStates, setCheckedStates] = useState(gridData.map(() => true));
    const [openCheckConnection, setOpenCheckConnection] = useState(false);
    const [selectedUserIndex, setSelectedUserIndex] = useState<number[]>([]);
    

    const toggleSwitch = (index: number) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };
    useEffect(() => {
        setGridData(tData);
    }, [tData])

    const handleCheckConnection = (value: string) => {
		setOpenCheckConnection(true);
		const index = Constants.UFMProfile.findIndex(obj => obj.Id === value);
		if (index !== -1) {
			// If already selected, remove it
			if (selectedUserIndex.includes(index)) {
				setSelectedUserIndex(selectedUserIndex.filter(selectedIndex => selectedIndex !== index));
			} else {
				// If not selected, add it
				setSelectedUserIndex([...selectedUserIndex, index]);
			}
		}
	}

    const closeCheckConnectionModal = () =>{
		setOpenCheckConnection(false);
		//setcheckConnectionColor(true);

	}

    return (
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 z-index-0 px-0 d-flex flex-column justify-content-start align-items-center ' style={{ height: '91vh' }}>
            <div className="d-flex flex-row justify-content-between align-items-end margin-bottom-2" style={{ height: '10%', width: '97%' }}>
                <div className="w-25">
                    <Heading
                        title={gridName}
                        type={TypographyType.h2}
                        color={TypographyColor.primary}
                        weight={TypographyWeight.semiBold}
                        classname='mb-0 text-start'
                    />
                </div>
                <div className='d-flex flex-row justify-content-end align-items-end w-25'>
                    <SearchBar classname='w-75' searchTerm={searchTerm} handleInputChange={handleInputChange} />
                    <Button
                        theme={ButtonTheme.muted}
                        size={ButtonSize.default}
                        variant={ButtonVariant.transparent}
                        classname=''
                        onClick={() => setGridView(false)}
                    >
                        <BsTable className="fs-25" />
                    </Button>
                    <Button
                        theme={ButtonTheme.muted}
                        size={ButtonSize.default}
                        variant={ButtonVariant.transparent}
                        classname=''
                        onClick={() => handleAddNew()}
                    >
                        <VscDiffAdded className="fs-30" />
                    </Button>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-start align-items-start padding-5' style={{ height: 'fit-content', maxHeight: '100%', width: '100%', flexWrap: 'wrap', overflowY: 'auto' }}>
                {(searchTerm && (suggestions?.length > 0))
                    ? (suggestions?.map((data: any, index: any) => (
                        <div className='col-xl-2 col-lg-2 col-md-3 col-sm-12 padding-left-right-0 mb-0' key={index}>
                            <Card size={CardSize.medium} variant={CardVariant.contained} classname='m-2 padding-0 cursor-pointer m-0' >
                                <div className='d-flex flex-row justify-content-between align-items-center padding-3'>
                                    <Heading
                                        title={data['Name'] ? data['Name'] : data['First Name'] ? data['First Name'] : data['Profile Name']}
                                        type={TypographyType.h4}
                                        color={TypographyColor.primary}
                                        weight={TypographyWeight.semiBold}
                                        classname='text-start'
                                    />
                                    {gridName != 'Users'
                                        && <Switch
                                            key={index}
                                            isChecked={checkedStates[index]}
                                            toggleSwitch={() => toggleSwitch(index)}
                                            name='tenant'
                                            disabled={false}
                                        />
                                    }
                                </div>
                                <hr className='my-0 w-100' />
                                <div className="d-flex flex-column padding-3">
                                    {Object.keys(data)
                                        .filter(key => key !== 'Name' && key !== 'First Name' && key !== 'Profile Name' && key !== 'User' && key !== 'Password' && key !== 'Description' && key !== 'Region' && key !== 'Auth Method' && key !== 'API Token' && key !== 'Client Secret' && key !== 'Client ID')
                                        .map((key, i) => (
                                            <div key={i} className='d-flex flex-row justify-content-start align-items-center'>
                                                <Heading
                                                    title={key}
                                                    type={TypographyType.h6}
                                                    color={TypographyColor.primary}
                                                    weight={TypographyWeight.semiBold}
                                                    classname=''
                                                />
                                                <Body
                                                    type={BodyType.p3}
                                                    color={BodyColor.primary}
                                                >
                                                    &nbsp;{typeof data[key as keyof typeof data] === 'boolean' ? (data[key as keyof typeof data] ? 'true' : 'false') : data[key as keyof typeof data]}
                                                </Body>
                                            </div>
                                        ))
                                    }
                                    {gridName != 'Users'
                                        && <div className="d-flex flex-row justify-content-end align-items-center">
                                            <Button
                                                theme={ButtonTheme.muted}
                                                size={ButtonSize.default}
                                                variant={ButtonVariant.transparent}
                                                classname='p-0 padding-right-2'
                                            >
                                                {/* <MdInfo className="fs-20" /> */}
                                                <InfoPanel Icon={MdInfo} text='info' />
                                            </Button>
                                            
                                            {/* <Button
                                                theme={ButtonTheme.muted}
                                                size={ButtonSize.default}
                                                variant={ButtonVariant.transparent}
                                                classname='p-0 padding-right-2'
                                            >
                                                <MdOutlineHub className="fs-20" />
                                            </Button> */}
                                            <InfoPanel Icon={MdOutlineHub} text='info'  onClick={()=> handleCheckConnection(data['Id'])} key={index}/>
                                            {/* <Button
                                                theme={ButtonTheme.muted}
                                                size={ButtonSize.default}
                                                variant={ButtonVariant.transparent}
                                                classname='p-0 padding-right-2'
                                                onClick={() => handleEditClick(data)}
                                            >
                                                <MdModeEdit className="fs-20" />
                                            </Button> */}
                                            <InfoPanel Icon={MdModeEdit} text='info' onClick={() => handleEditClick(data)} />
                                            {/* <Button
                                                theme={ButtonTheme.warning}
                                                size={ButtonSize.default}
                                                variant={ButtonVariant.transparent}
                                                classname='p-0'
                                                onClick={() => handleDelete(data['Id'])}
                                            >
                                                <MdDeleteSweep className="fs-20" />
                                            </Button> */}
                                            <InfoPanel Icon={MdDeleteSweep} text='info' onClick={() => handleDelete(data['Id'])} />
                                        </div>
                                    }
                                </div>

                            </Card>
                        </div>
                    )))
                    : ((searchTerm && (suggestions.length === 0))
                        ? (
                            <div className='d-flex flex-row justify-content-center w-100 mt-5'>
                                <Heading
                                    title='No matches found!'
                                    type={TypographyType.h2}
                                    color={TypographyColor.primary}
                                    weight={TypographyWeight.semiBold}
                                    classname='mb-0 text-start'
                                />
                            </div>
                        )
                        : (gridData.map((data: any, index: number) => (

                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-12 padding-left-right-0 mb-0' key={index}>
                                <Card size={CardSize.medium} variant={CardVariant.contained} classname='m-2 padding-0 cursor-pointer m-0' >
                                    <div className='d-flex flex-row justify-content-between align-items-center padding-3'>
                                        <Heading
                                            title={data['Name'] ? data['Name'] : data['First Name'] ? data['First Name'] : data['Profile Name']}
                                            type={TypographyType.h4}
                                            color={TypographyColor.primary}
                                            weight={TypographyWeight.semiBold}
                                            classname='text-start'
                                        />
                                        {gridName != 'Users'
                                            && <Switch
                                                key={index}
                                                isChecked={checkedStates[index]}
                                                toggleSwitch={() => toggleSwitch(index)}
                                                name='tenant'
                                                disabled={false}
                                            />
                                        }
                                    </div>
                                    <hr className='my-0 w-100' />
                                    <div className="d-flex flex-column padding-3">
                                        {Object.keys(data)
                                            .filter(key => key !== 'Name' && key !== 'First Name' && key !== 'Profile Name' && key !== 'User' && key !== 'Password' && key !== 'Description' && key !== 'Region' && key !== 'Auth Method' && key !== 'API Token' && key !== 'Client Secret' && key !== 'Client ID') // Filter out the 'name', 'user' and 'password' property
                                            .map((key, i) => (
                                                <div key={i} className='d-flex flex-row justify-content-start align-items-center'>
                                                    <Heading
                                                        title={key}
                                                        type={TypographyType.h6}
                                                        color={TypographyColor.primary}
                                                        weight={TypographyWeight.semiBold}
                                                        classname=''
                                                    />
                                                    <Body
                                                        type={BodyType.p3}
                                                        color={BodyColor.primary}
                                                    >
                                                        &nbsp;{typeof data[key as keyof typeof data] === 'boolean' ? (data[key as keyof typeof data] ? 'true' : 'false') : data[key as keyof typeof data]}
                                                    </Body>
                                                </div>
                                            ))
                                        }
                                        {gridName != 'Users'
                                            && <div className="d-flex flex-row justify-content-end align-items-center">
                                                {/* <Button
                                                    theme={ButtonTheme.muted}
                                                    size={ButtonSize.default}
                                                    variant={ButtonVariant.transparent}
                                                    classname='p-0 padding-right-2'
                                                >
                                                    <MdInfo className="fs-20" />
                                                </Button> */}
                                                <InfoPanel Icon={MdInfo} text='info' classname='color-black-5' />
                                                {/* <Button
                                                    theme={ButtonTheme.muted}
                                                    size={ButtonSize.default}
                                                    variant={ButtonVariant.transparent}
                                                    classname='p-0 padding-right-1'
                                                >
                                                    <MdOutlineHub className="fs-20" />
                                                </Button> */}
                                                <InfoPanel Icon={MdOutlineHub} text='Check Connection Check Connection Check Connection' classname={selectedUserIndex?.includes(index)? 'color-green-0 ' : 'color-black-5'}  onClick={()=> handleCheckConnection(data['Id'])}/>
                                                {/* <Button
                                                    theme={ButtonTheme.muted}
                                                    size={ButtonSize.default}
                                                    variant={ButtonVariant.transparent}
                                                    classname='p-0 padding-right-2'
                                                    onClick={() => handleEditClick(data)}
                                                >
                                                    <MdModeEdit className="fs-20" />
                                                </Button> */}
                                                <InfoPanel Icon={MdModeEdit} text='edit' onClick={() => handleEditClick(data)} classname='color-black-5' />
                                                {/* <Button
                                                    theme={ButtonTheme.warning}
                                                    size={ButtonSize.default}
                                                    variant={ButtonVariant.transparent}
                                                    classname='p-0'
                                                    onClick={() => handleDelete(data['Id'])}
                                                >
                                                    <MdDeleteSweep className="fs-20" />
                                                </Button> */}
                                                <InfoPanel Icon={MdDeleteSweep} text='delete' onClick={() => handleDelete(data['Id'])} classname='color-rejected' />
                                            </div>
                                        }
                                    </div>
                                </Card>
                            </div>
                        )))
                    )
                }
            </div>
            {openCheckConnection && 
					<CheckConnection openCheckConnection={openCheckConnection} closeCheckConnectionModal={closeCheckConnectionModal} />}

        </div>
    );
};

export default GridView;