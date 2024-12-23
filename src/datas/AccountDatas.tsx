import { iconAssets } from "@/datas/IconAssets";
import {AccountType} from "@/types/account";

export const accountDatas: AccountType[] = [
    {
      id: 1,
      accountType: "Credit Card",
      maskedNumber: "**** **** **** 2598",
      balance: "$25000",
      icon: iconAssets.mastercard,
      arrowIcon: iconAssets.arrowMasterCard,
    },
    {
      id: 2,
      accountType: "Savings Account",
      maskedNumber: "**** **** **** 1234",
      balance: "$15000",
      icon: iconAssets.mastercard,
      arrowIcon: iconAssets.arrowMasterCard,
    },
    {
      id: 3,
      accountType: "Checking Account",
      maskedNumber: "**** **** **** 5678",
      balance: "$5000",
      icon: iconAssets.mastercard,
      arrowIcon: iconAssets.arrowMasterCard,
    },
    {
      id: 4,
      accountType: "Business Account",
      maskedNumber: "**** **** **** 4321",
      balance: "$100000",
      icon: iconAssets.mastercard,
      arrowIcon: iconAssets.arrowMasterCard,
    },
    {
      id: 5,
      accountType: "Personal Loan",
      maskedNumber: "**** **** **** 8765",
      balance: "$3000",
      icon: iconAssets.mastercard,
      arrowIcon: iconAssets.arrowMasterCard,
    },
    {
      id: 6,
      accountType: "Travel Card",
      maskedNumber: "**** **** **** 6543",
      balance: "$12000",
      icon: iconAssets.mastercard,
      arrowIcon: iconAssets.arrowMasterCard,
    },
  ];
  