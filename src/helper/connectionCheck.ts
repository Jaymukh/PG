// External Libraries
import React, { useEffect,useState } from 'react';
import * as Constants from '../utils/Constants';

const useConnectCheck = () => {
    const [openCheckConnection, setOpenCheckConnection] = useState(false);
    const [selectedUserIndex, setSelectedUserIndex] = useState<number[]>([]);

    //Check Connection
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
    return {handleCheckConnection}
}

export { useConnectCheck };