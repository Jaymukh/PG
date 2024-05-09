import { MdGroupAdd, MdMail, MdContactSupport } from 'react-icons/md';
import { IoListSharp, IoSettingsSharp } from 'react-icons/io5';
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
        key: 'abc',
        option: 'ABC',
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
        key: 'ufmProfile',
        option: 'UFM Profiles',
    },
    {
        key: 'gitAccounts',
        option: 'Git Accounts',
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
    }
];
export interface Tenant {
    key: string;
    name: string;
    id: number;
    environment: string;
    hostUrl: string;
    state: string;
}
export const tenants: Tenant[] = [
    {
        key: 'tenant1',
        name: 'tenant1',
        id: 1,
        environment: 'tenant1',
        hostUrl: 'tenant1.com',
        state: 'tenant1state'
    },
    {
        key: 'tenant2',
        name: 'tenant2',
        id: 2,
        environment: 'tenant2',
        hostUrl: 'tenant2.com',
        state: 'tenant2state'
    },
    {
        key: 'tenant3',
        name: 'tenant3',
        id: 3,
        environment: 'tenant3',
        hostUrl: 'tenant3.com',
        state: 'tenant3state'
    },
    {
        key: 'tenant4',
        name: 'tenant4',
        id: 4,
        environment: 'tenant4',
        hostUrl: 'tenant4.com',
        state: 'tenant4state'
    },
    {
        key: 'tenant1',
        name: 'tenant1',
        id: 5,
        environment: 'tenant1',
        hostUrl: 'tenant1.com',
        state: 'tenant1state'
    },
    {
        key: 'tenant2',
        name: 'tenant2',
        id: 6,
        environment: 'tenant2',
        hostUrl: 'tenant2.com',
        state: 'tenant2state'
    },
    {
        key: 'tenant3',
        name: 'tenant3',
        id: 7,
        environment: 'tenant3',
        hostUrl: 'tenant3.com',
        state: 'tenant3state'
    },
    {
        key: 'tenant4',
        name: 'tenant4',
        id: 8,
        environment: 'tenant4',
        hostUrl: 'tenant4.com',
        state: 'tenant4state'
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
    key: string;
    environment: string;
    profilename: string;
    primarysite: string;
    secondarysite: string;
    gitrepo: string;
    latsgitbackupon: string;
}
export const UFMProfile: UfmProfile[] = [
    {
        key: 'ufm1',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
    },
    {
        key: 'ufm2',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
    },
    {
        key: 'ufm3',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
    },
    {
        key: 'ufm4',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
    },
    {
        key: 'ufm5',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
    },
    {
        key: 'ufm6',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
    },
    {
        key: 'ufm7',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
    },
    {
        key: 'ufm8',
        environment: 'QA',
        profilename: 'Profile-1',
        primarysite: 'T1',
        secondarysite: 'T2',
        gitrepo: 'GITQA',
        latsgitbackupon: ''
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