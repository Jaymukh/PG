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