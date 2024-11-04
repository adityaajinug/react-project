import overview from "@/assets/icons/ic-overview.svg";
import profile from "@/assets/icons/ic-profile.svg";
import setting from "@/assets/icons/ic-settings.svg";
import logout from "@/assets/icons/ic-logout.svg";
import billing from "@/assets/icons/ic-billing.svg";
import expenses from "@/assets/icons/ic-expenses.svg";
import goal from "@/assets/icons/ic-goal.svg";
import transaction from "@/assets/icons/ic-transaction.svg";
import ballance from "@/assets/icons/ic-ballance.svg"
import bullets from "@/assets/icons/ic-bullets.svg";

export const iconAssets = {
    overview,
    profile,
    setting,
    logout,
    billing,
    expenses,
    goal,
    transaction,
    ballance,
    bullets
    
}

interface ImageAssetsType {
    icon: string;
}
export const iconSource: ImageAssetsType[] = [
    {
        icon: iconAssets.overview
    },
    {
        icon: iconAssets.profile
    },
    {
        icon: iconAssets.logout
    },
    {
        icon: iconAssets.billing
    },
    {
        icon: iconAssets.expenses
    },
    {
        icon: iconAssets.goal
    },
    {
        icon: iconAssets.transaction
    },
]