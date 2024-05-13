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
    'Id': string;
    'Name': string;
    'Environment': string;
    'Host Url': string;
    'State': string;
    'Created By': string;
    'Created On': string;
    'User': string;
    'Password': string;
    'Description': string;
    'Region': string;
}
export const tenants: Tenant[] = [
    {
        'Id': '1',
        'Name': 'tenant1',
        'Environment': 'Environment2',
        'Host Url': 'tenant1.com',
        'State': 'Disabled',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Jay',
        'Created On': '2024-03-05',
        'User': 'S012345',
        'Password': 'string'

    },
    {
        'Id': '2',
        'Name': 'tenant2',
        'Environment': 'Environment2',
        'Host Url': 'tenant2.com',
        'State': 'Disabled',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'ILMA',
        'Created On': '2024-04-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '3',
        'Name': 'tenant3',
        'Environment': 'Environment2',
        'Host Url': 'tenant3.com',
        'State': 'Disabled',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Dayana',
        'Created On': '2024-03-04',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '4',
        'Name': 'tenant4',
        'Environment': 'Environment2',
        'Host Url': 'tenant4.com',
        'State': 'Disabled',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Sudha',
        'Created On': '2023-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '5',
        'Name': 'tenant1',
        'Environment': 'Environment2',
        'Host Url': 'tenant1.com',
        'State': 'Disabled',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Isai',
        'Created On': '2020-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '6',
        'Name': 'tenant2',
        'Environment': 'Environment2',
        'Host Url': 'tenant2.com',
        'State': 'Draft',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Ankur',
        'Created On': '2024-03-11',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '7',
        'Name': 'tenant3',
        'Environment': 'Environment2',
        'Host Url': 'tenant3.com',
        'State': 'Disabled',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'ILMA',
        'Created On': '2024-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '8',
        'Name': 'tenant4',
        'Environment': 'Environment2',
        'Host Url': 'tenant4.com',
        'State': 'Draft',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Jay',
        'Created On': '2024-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '9',
        'Name': 'tenant2',
        'Environment': 'teEnvironment2nant2',
        'Host Url': 'tenant2.com',
        'State': 'Active',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'ILMA',
        'Created On': '2024-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '10',
        'Name': 'tenant3',
        'Environment': 'Environment1',
        'Host Url': 'tenant3.com',
        'State': 'Active',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'ILMA',
        'Created On': '2024-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '11',
        'Name': 'tenant4',
        'Environment': 'Environment1',
        'Host Url': 'tenant4.com',
        'State': 'Draft',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'ILMA',
        'Created On': '2024-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '12',
        'Name': 'tenant1',
        'Environment': 'Environment1',
        'Host Url': 'tenant1.com',
        'State': 'Draft',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Jay',
        'Created On': '2024-03-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '13',
        'Name': 'tenant2',
        'Environment': 'Environment2',
        'Host Url': 'tenant2.com',
        'State': 'Active',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'ILMA',
        'Created On': '2024-04-05',
        'User': 'S012345',
        'Password': 'string',
    },
    {
        'Id': '14',
        'Name': 'tenant3',
        'Environment': 'Environment2',
        'Host Url': 'tenant3.com',
        'State': 'Active',
        'Description': 'description',
        'Region': 'region1',
        'Created By': 'Dayana',
        'Created On': '2024-03-04',
        'User': 'S012345',
        'Password': 'string',
    },
]

export interface GitAccount {
    'Id': string;
    'Name': string;
    'Environment': string;
    'Description': string;
    'Host Url': string;
    'Auth Method': string;
    'API Token': string;
    'Client Secret': string;
    'Client ID': string;
    'State': string;
}
export const gitAccounts: GitAccount[] = [
    {
        'Id': '1',
        'Name': 'git1',
        'Environment': 'Environment1',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'Auth Method': 'OAuth',
        'API Token': 'hjsdg5623ghsd7623tg',
        'Client Secret': 'jmbfhjsdhmfkj765372yg37432g4bj',
        'Client ID': 'jhsdutwug37eyg2u3y',
        'State': 'Active',
    },
    {
        'Id': '2',
        'Name': 'git2',
        'Environment': 'Environment2',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'Auth Method': 'OAuth',
        'API Token': 'hjsdg5623ghsd7623tg',
        'Client Secret': 'jmbfhjsdhmfkj765372yg37432g4bj',
        'Client ID': 'jhsdutwug37eyg2u3y',
        'State': 'Draft',
    },
    {
        'Id': '3',
        'Name': 'git1',
        'Environment': 'Environment2',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'Auth Method': 'OAuth',
        'API Token': 'hjsdg5623ghsd7623tg',
        'Client Secret': 'jmbfhjsdhmfkj765372yg37432g4bj',
        'Client ID': 'jhsdutwug37eyg2u3y',
        'State': 'Draft',
    },
    {
        'Id': '4',
        'Name': 'git1',
        'Environment': 'Environment2',
        'Description': 'description1',
        'Host Url': 'environment1.com',
        'Auth Method': 'OAuth',
        'API Token': 'hjsdg5623ghsd7623tg',
        'Client Secret': 'jmbfhjsdhmfkj765372yg37432g4bj',
        'Client ID': 'jhsdutwug37eyg2u3y',
        'State': 'Draft',
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

// Region - region1, region2
// Environment - environment1, environment2
// State - draft, active, disabled
// Git- git1, git2
// Primary site - site1, site2
// Secondary site - site1, site2
// Auth method - Personal token, oauth2

export const regions: TenantHeader[] = [
    {
        key: 'Region1',
        value: 'Region1'
    },
    {
        key: 'Region2',
        value: 'Region2'
    },
]
export const environments: TenantHeader[] = [
    {
        key: 'Environment1',
        value: 'Environment1'
    },
    {
        key: 'Environment2',
        value: 'Environment2'
    },
]
export const states: TenantHeader[] = [
    {
        key: 'Disabled',
        value: 'Disabled'
    },
    {
        key: 'Active',
        value: 'Active'
    },
    {
        key: 'Draft',
        value: 'Draft'
    },
]
export const git: TenantHeader[] = [
    {
        key: 'Git1',
        value: 'Git1'
    },
    {
        key: 'Git2',
        value: 'Git2'
    },
]
export const primarySite: TenantHeader[] = [
    {
        key: 'Site1',
        value: 'Site1'
    },
    {
        key: 'Site2',
        value: 'Site2'
    },
]
export const secondarySite: TenantHeader[] = [
    {
        key: 'Site1',
        value: 'Site1'
    },
    {
        key: 'Site2',
        value: 'Site2'
    },
]
export const authMethods: TenantHeader[] = [
    {
        key: 'Personal Token',
        value: 'Personal Token'
    },
    {
        key: 'Oauth2',
        value: 'Oauth2'
    },
]