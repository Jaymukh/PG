
import {IoSettingsSharp } from 'react-icons/io5';
import React from 'react';

export interface HeaderData {
    key: string;
    option: string;
}
export const headerData: HeaderData[] = [
    {
        key: 'root',
        option: 'Administrator',
    },
    {
        key: 'ab',
        option: 'AB',
    },
    {
        key: 'abc',
        option: 'ABC',
    }
];

export interface SidebarItem {
    key: string;
    option: string;
}
export const sidebarData: SidebarItem[] = [
    {
        key: 'root',
        option: 'Tenants',
    },
    {
        key: 'gitAccounts',
        option: 'Git Accounts',
    },
    {
        key: 'ufmProfile',
        option: 'UFM Profiles',
    },
    {
        key: 'users',
        option: 'Users',
    }
];

export interface AccountMenuItem {
    key: number;
    text: string;
    icon: JSX.Element;
}

export const accountMenuItems: AccountMenuItem[] = [
    {
        key: 1,
        text: "Settings",
        icon: <IoSettingsSharp className='fs-21' color='rgba(28, 27, 31, 1)' />,
    },
    // {
    //     key: 2,
    //     text: "Invite",
    //     icon: <MdGroupAdd className='fs-21' color='rgba(28, 27, 31, 1)' />,
    // },
];
// invite table header data     
export interface TenantHeader {
    key: string;
    value: string;
}

export const tenantHeader: TenantHeader[] = [
    {
        key: 'name',
        value: 'Name'
    },
    {
        key: 'id',
        value: 'Id'
    },
    {
        key: 'environment',
        value: 'Environment'
    },
    {
        key: 'hostUrl',
        value: 'Host Url'
    },
    {
        key: 'state',
        value: 'State'
    },
    {
        key: 'createdBy',
        value: 'Created By'
    },
    {
        key: 'createdOn',
        value: 'Created On'
    },

];
export interface Tenant {
    'Name': string;
    'Id': string;
    'Environment': string;
    'Host Url': string;
    'State': string;
    'Created By': string;
    'Created On': string;
}
export const tenants: Tenant[] = [
    {
        'Name': 'tenant1',
        'Id': '1',
        'Environment': 'tenant1',
        'Host Url': 'tenant1.com',
        'State': 'tenant1state',
        'Created By': 'Jay',
        'Created On': '2024-03-05'
    },
    {
        'Name': 'tenant2',
        'Id': '2',
        'Environment': 'tenant2',
        'Host Url': 'tenant2.com',
        'State': 'tenant2state',
        'Created By': 'ILMA',
        'Created On': '2024-04-05'
    },
    {
        'Name': 'tenant3',
        'Id': '3',
        'Environment': 'tenant3',
        'Host Url': 'tenant3.com',
        'State': 'tenant3state',
        'Created By': 'Dayana',
        'Created On': '2024-03-04'
    },
    {
        'Name': 'tenant4',
        'Id': '4',
        'Environment': 'tenant4',
        'Host Url': 'tenant4.com',
        'State': 'tenant4state',
        'Created By': 'Sudha',
        'Created On': '2023-03-05'
    },
    {
        'Name': 'tenant1',
        'Id': '5',
        'Environment': 'tenant1',
        'Host Url': 'tenant1.com',
        'State': 'tenant1state',
        'Created By': 'Isai',
        'Created On': '2020-03-05'
    },
    {
        'Name': 'tenant2',
        'Id': '6',
        'Environment': 'tenant2',
        'Host Url': 'tenant2.com',
        'State': 'tenant2state',
        'Created By': 'Ankur',
        'Created On': '2024-03-11'
    },
    {
        'Name': 'tenant3',
        'Id': '7',
        'Environment': 'tenant3',
        'Host Url': 'tenant3.com',
        'State': 'tenant3state',
        'Created By': 'ILMA',
        'Created On': '2024-03-05'
    },
    {
        'Name': 'tenant4',
        'Id': '8',
        'Environment': 'tenant4',
        'Host Url': 'tenant4.com',
        'State': 'tenant4state',
        'Created By': 'Jay',
        'Created On': '2024-03-05'
    },
    {
        'Name': 'tenant2',
        'Id': '9',
        'Environment': 'tenant2',
        'Host Url': 'tenant2.com',
        'State': 'tenant2state',
        'Created By': 'ILMA',
        'Created On': '2024-03-05'
    },
    {
        'Name': 'tenant3',
        'Id': '10',
        'Environment': 'tenant3',
        'Host Url': 'tenant3.com',
        'State': 'tenant3state',
        'Created By': 'ILMA',
        'Created On': '2024-03-05'
    },
    {
        'Name': 'tenant4',
        'Id': '11',
        'Environment': 'tenant4',
        'Host Url': 'tenant4.com',
        'State': 'tenant4state',
        'Created By': 'ILMA',
        'Created On': '2024-03-05'
    },
    {
        'Name': 'tenant1',
        'Id': '12',
        'Environment': 'tenant1',
        'Host Url': 'tenant1.com',
        'State': 'tenant1state',
        'Created By': 'Jay',
        'Created On': '2024-03-05'
    },
    {
        'Name': 'tenant2',
        'Id': '13',
        'Environment': 'tenant2',
        'Host Url': 'tenant2.com',
        'State': 'tenant2state',
        'Created By': 'ILMA',
        'Created On': '2024-04-05'
    },
    {
        'Name': 'tenant3',
        'Id': '14',
        'Environment': 'tenant3',
        'Host Url': 'tenant3.com',
        'State': 'tenant3state',
        'Created By': 'Dayana',
        'Created On': '2024-03-04'
    },
]


// UFM Profile data
export interface UfmProfileHeader {
    key: string;
    value: string;
}

export const UFMProfileHeader: UfmProfileHeader[] = [
    {
        key: 'environment',
        value: 'Environment'
    },
    {
        key: 'profile name',
        value: 'Profile Name'
    },
    {
        key: 'primary site',
        value: 'Primary Site'
    },
    {
        key: 'secondary site',
        value: 'Secondary Site'
    },
    {
        key: 'git repo',
        value: 'Git Repo'
    },
    {
        key: 'lats git backup on',
        value: 'Lats Git backup on'
    }
];
export interface UfmProfile {
    'Id': string;
    'Environment': string;
    'Profile Name': string;
    'Primary Site': string;
    'Secondary Site': string;
    'Gitrepo': string;
    'Last git backupon': string;
}
export const UFMProfile: UfmProfile[] = [
    {
        'Id': '1',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    },
    {
        'Id': '2',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    },
    {
        'Id': '3',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    },
    {
        'Id': '4',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    },
    {
        'Id': '5',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    },
    {
        'Id': '6',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    },
    {
        'Id': '7',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    },
    {
        'Id': '',
        'Environment': 'QA',
        'Profile Name': 'Profile-1',
        'Primary Site': 'T1',
        'Secondary Site': 'T2',
        'Gitrepo': 'GITQA',
        'Last git backupon': ''
    }
]

export interface environmentOptions {
    key: string;
    value: string;
}

export const Environment: environmentOptions[] = [
    {
        key: 'E1',
        value: 'Environment1'
    },
    {
        key: 'E2',
        value: 'Environment2'
    },
    {
        key: 'E3',
        value: 'Environment3'
    },
    {
        key: 'E4',
        value: 'Environment4'
    }
];

export interface primarysiteOptions {
    key: string;
    value: string;
}

export const Primarysite: primarysiteOptions[] = [
    {
        key:'T1', value:'Tenant1'
    },
    {
        key:'T2', value:'Tenant2'
    },
    {
        key:'T3', value:'Tenant3'
    },
    {
        key:'T4', value:'Tenant4'
    }
];

export interface secondarysiteOptions {
    key: string;
    value: string;
}

export const Secondarysite: secondarysiteOptions[] = [
    {
        key:'T1', value:'Tenant1'
    },
    {
        key:'T2', value:'Tenant2'
    },
    {
        key:'T3', value:'Tenant3'
    },
    {
        key:'T4', value:'Tenant4'
    }
];

export interface gitOptions {
    key: string;
    value: string;
}

export const Git: gitOptions[] = [
    {
        key:'T1', value:'GITQA1'
    },
    {
        key:'T2', value:'GITQA2'
    },
    {
        key:'T3', value:'GITPROD3'
    },
    {
        key:'T4', value:'GITPROD4'
    }
];

export interface stateOptions {
    key: string;
    value: string;
}

export const State: stateOptions[] = [
    {
        key:'S1', value:'State1'
    },
    {
        key:'S2', value:'State2'
    },
    {
        key:'S3', value:'State3'
    },
    {
        key:'S4', value:'State4'
    }
];
export interface GitAccount {
    'Id': string;
    'Name': string;
    'Environment': string;
    'Description': string;
    'Host Url': string;
    'State': string;
}
export const gitAccounts: GitAccount[] = [
    {
        'Id': '1',
        'Name': 'git1',
        'Environment': 'environment1',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'State': 'environment1state',
    },
    {
        'Id': '2',
        'Name': 'git2',
        'Environment': 'environment1',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'State': 'environment1state',
    },
    {
        'Id': '3',
        'Name': 'git1',
        'Environment': 'environment1',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'State': 'environment1state',
    },
    {
        'Id': '4',
        'Name': 'git1',
        'Environment': 'environment1',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'State': 'environment1state',
    },
]

export interface User {
    'Id': string;
    'First Name': string;
    'Last Name': string;
    'External ID': string;
    'Email ID': string;
    'Role': string;
    'Is Admin': boolean;
    'First Logged on': string;
    'Last Logged on': string;
}
export const users: User[] = [
    {
        'Id': '1',
        'First Name': 'ILMA',
        'Last Name': 'Ali Farooqui',
        'External ID': '1234',
        'Email ID': 'ilma@pg.com',
        'Role': 'Admin',
        'Is Admin': false,
        'First Logged on': '2022-05-06',
        'Last Logged on': '2024-05-06'
    },
    {
        'Id': '2',
        'First Name': 'ILMA',
        'Last Name': 'Ali Farooqui',
        'External ID': '123',
        'Email ID': 'ilma@pg.com',
        'Role': 'Admin',
        'Is Admin': true,
        'First Logged on': '2022-05-06',
        'Last Logged on': '2024-05-06'
    },
    {
        'Id': '3',
        'First Name': 'ILMA',
        'Last Name': 'Ali Farooqui',
        'External ID': '123',
        'Email ID': 'ilma@pg.com',
        'Role': 'Admin',
        'Is Admin': true,
        'First Logged on': '2022-05-06',
        'Last Logged on': '2024-05-06'
    },
    {
        'Id': '4',
        'First Name': 'ILMA',
        'Last Name': 'Ali Farooqui',
        'External ID': '123',
        'Email ID': 'ilma@pg.com',
        'Role': 'Admin',
        'Is Admin': true,
        'First Logged on': '2022-05-06',
        'Last Logged on': '2024-05-06'
    },
]
