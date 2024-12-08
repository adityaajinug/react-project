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
import mastercard from "@/assets/icons/ic-mastercard.svg";
import arrowMasterCard from "@/assets/icons/ic-arrow-mastercard.svg";
import gamepad from "@/assets/icons/ic-gamepad.svg";
import shopping from  "@/assets/icons/ic-shopping.svg"
import transport from "@/assets/icons/ic-transport.svg"
import food from "@/assets/icons/ic-food.svg"
import entertainemt from "@/assets/icons/ic-entertainment.svg"
import others from "@/assets/icons/ic-others.svg"
import housing from "@/assets/icons/ic-housing.svg"
import arrowUp from "@/assets/icons/ic-arrow-up.svg"
import arrowDown from "@/assets/icons/ic-arrow-down.svg"
import arrowRight from "@/assets/icons/ic-arrow-right.svg"

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
    bullets,
    mastercard,
    arrowMasterCard,
    gamepad,
    shopping,
    transport,
    food,
    entertainemt,
    others,
    housing,
    arrowUp,
    arrowDown,
    arrowRight
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