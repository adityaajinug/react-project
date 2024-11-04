
import { MenuItem } from '@/types/menu'
import { iconAssets } from '@/datas/IconAssets'

export const menuItems: MenuItem[] = [
    { icon: iconAssets.overview, title: "Overview", link: "/dashboard" },
    { icon: iconAssets.ballance, title: "Balances" },
    { icon: iconAssets.transaction, title: "Transactions", link: "#" },
    { icon: iconAssets.billing, title: "Bills", link: "#" },
    { icon: iconAssets.expenses, title: "Expenses", link: "/expense" },
    { icon: iconAssets.goal, title: "Goals", link: "#" },
    { icon: iconAssets.setting, title: "Settings", link:"#" },
];