import { AddShoppingCart, Apps, Description, EventNote, InsertChart, LibraryBooks, LocalGroceryStore, MonetizationOn, Payment, Receipt, Reorder, ShoppingCart, Sms, Store, ViewList, Work } from "@mui/icons-material";
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
                url: '',
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
    }
]