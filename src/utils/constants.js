import {
    AccessAlarm,
    AccessTime,
    AddShoppingCart, Apps, Assessment, CastConnected, CheckBox, CreditCard, Description, DeviceHub, DirectionsCar, EventNote, GraphicEq, GridOn, Group, Home, InsertChart, LabelOutlined, LibraryBooks,
    Link,
    LocalGroceryStore, LocalOffer, LockOpen, Loyalty, MonetizationOn, Payment, People, Person, Receipt, Reorder, SelectAll, Settings, SettingsInputComponent, ShoppingCart,
    Sms, Store, TabletMac, Terrain, Toll, Tv, ViewList, VpnKey, Warning, Work
}
    from "@mui/icons-material";
import { List } from "@mui/material";
import config from "../config/config";


export const apiUrl = `${config.api}api/v1/`;

export const settingsTabs = [
    {
        title: 'BLAZE Apps',
        icon: Apps,
        url: 'switch',
        childrenList: []
    },
    {
        title: 'Current Shop Settings',
        icon: LocalGroceryStore,
        url: 'shop',
        childrenList: [
            {
                title: 'Shop Information',
                url: 'shop',
                icon: Store
            },
            {
                title: 'Tax Option',
                url: 'taxoption',
                icon: ShoppingCart
            },
            {
                title: 'Delivery Tax Rates',
                url: 'deliverytax',
                icon: AddShoppingCart
            },
            {
                title: 'Terminals',
                url: 'terminals',
                icon: Work
            },
            {
                title: 'Inventories',
                url: 'inventory',
                icon: EventNote
            },
            {
                title: 'Contracts',
                url: 'contracts',
                icon: LibraryBooks
            },
            {
                title: 'Online Store',
                url: 'onlinestore',
                icon: ShoppingCart
            },
            /*{
                title: 'Reset',
                url: 'reset',
                icon: Autorenew
            },*/
            {
                title: 'Shop Documents',
                url: 'documents',
                icon: Description,
                Receipt
            },
            {
                title: 'Invoices & Orders',
                url: 'invoices',
                icon: Receipt
            },
            {
                title: 'Purchase Order',
                url: 'posetting',
                icon: Receipt
            },
            {
                title: 'Manage Receipts',
                url: 'receipts',
                icon: InsertChart
            },
            {
                title: 'Fee Minimums',
                url: 'feeminimums',
                icon: MonetizationOn
            },
            {
                title: 'Pricing Templates',
                url: 'pricingtemplate',
                icon: ViewList
            },
            {
                title: 'Payment Options',
                url: 'paymentOptions',
                icon: Payment
            },
            {
                title: 'Payment Providers',
                url: 'paymentProviders',
                icon: Payment
            },
            {
                title: "BLAZEPAY Settings",
                icon: Payment,
                url: "blazePay",
            },
            {
                title: 'Notifications',
                url: 'notifications',
                icon: Sms
            },
            {
                title: 'Adjustments',
                url: 'adjustments',
                icon: Reorder
            }
        ]
    },
    {
        title: 'Manage Employees',
        url: 'manage',
        icon: Person,
        childrenList: [{
            title: 'All Employees',
            url: 'employees',
            icon: People
        },
        {
            title: 'Clocked In Employees',
            url: 'clocked_in',
            icon: AccessAlarm
        },
        {
            title: 'Timecards',
            url: 'timecards',
            icon: AccessTime
        },
        {
            title: 'Invited Employees',
            url: 'invitedemployees',
            icon: People
        }]
    },
    {
        title: 'Company Settings',
        icon: Settings,
        url: 'company',
        childrenList: [
            {
                title: 'Company Info',
                url: '',
                icon: Home
            },
            {
                title: 'Shops',
                url: 'shops',
                icon: Store
            },
            {
                title: 'Terminals',
                url: 'terminals',
                icon: Work
            },
            {
                title: 'Memberships',
                url: 'memberships',
                icon: Group
            },
            /* {
                title: 'Member Profile',
                url: 'memberprofile',
                icon: Group
            }, */
            {
                title: 'Weight Tolerances',
                url: 'weight',
                icon: LocalOffer
            },
            {
                title: 'Vehicles',
                url: 'vehicles',
                icon: DirectionsCar
            },
            {
                title: 'Third Party Accounts',
                url: 'thirdParty',
                icon: Person
            },
            {
                title: 'Developer Keys',
                url: 'keys',
                icon: VpnKey
            },
            {
                title: 'Loyalty Rewards',
                url: 'loyalty',
                icon: Loyalty
            },
            {
                title: "Labels",
                url: "labels",
                icon: LabelOutlined
            },
            /*{
                title: 'Reset',
                url: 'reset',
                icon: Autorenew
            },*/
            {
                title: 'Roles and Permissions',
                url: 'roles',
                icon: LockOpen
            },
            {
                title: 'Regions',
                url: 'regions',
                icon: Terrain
            },
            {
                title: 'Reporting',
                url: 'reporting',
                icon: Assessment
            }
        ]
    },
    {
        title: 'Manufacturing Settings',
        icon: SettingsInputComponent,
        url: 'manufacturing',
        childrenList: [
            {
                title: 'Component Types',
                url: 'componenttypes',
                icon: ''
            },
            {
                title: 'Component Groups',
                url: 'componentgroups',
                icon: ''
            },
            {
                title: 'Activity Types',
                url: 'activitytypes',
                icon: ''
            },
            {
                title: 'Loss Reasons',
                url: 'lossreasons',
                icon: Warning
            },
            {
                title: 'Checklist',
                url: 'checklists',
                icon: CheckBox
            },
        ]
    },
    {
        title: "Master Catalog",
        url: "master-catalog",
        icon: List,
        childrenList: [
            {
                title: "Master Categories",
                url: "categories",
                icon: GridOn,
            },
            {
                title: "Master Products",
                url: "products",
                icon: SelectAll,
            },
        ],
    },
    {
        title: "BLAZE Insights",
        url: "insights",
        icon: '',
        customIcon: true,
        childrenList: [
            {
                title: "Reporting Broadcast",
                url: "broadcast",
                icon: CastConnected,
            }
        ],
    },
    {
        title: 'Integration Settings',
        icon: Link,
        url: 'integration',
        childrenList: [
            {
                title: 'Third Party',
                url: '',
                icon: Person
            },
            {
                title: 'Weedmaps',
                url: 'weedmaps',
                icon: ''
            },
            {
                title: 'Leafly',
                url: 'leafly',
                icon: ''
            },
            {
                title: 'Compliance',
                url: 'compliance',
                icon: Toll
            },
            {
                title: 'Webhook Management',
                url: 'webhooks',
                icon: DeviceHub
            },
            {
                title: 'Onfleet',
                url: 'onfleet',
                icon: GraphicEq
            },
            {
                title: 'springbig',
                url: 'springbig',
                icon: '',
                src: '/'
            },
            {
                title: 'Tookan',
                url: 'tookan',
                icon: CreditCard
            },
            {
                title: 'Spence',
                url: 'spence',
                icon: ''
            },
            {
                title: 'Stronghold',
                url: 'stronghold',
                icon: ''
            }
        ]
    },
    {
        title: 'Plugin Options',
        icon: GridOn,
        url: 'plugins',
        childrenList: [
            {
                title: 'TV Display',
                url: '',
                icon: Tv
            },
            {
                title: 'Check-In',
                url: 'check_in',
                icon: TabletMac
            }
        ]
    }

]