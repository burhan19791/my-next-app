import { Rowdies } from "next/font/google";

export type SummaryType = {
  requestNumber: string;
  status: string;
  claimDate: string;
  account: string;
  accountType: string;
  claimant: ClaimParty;
  claimType: string;
  beneficiary: ClaimParty;
};

export type ClaimParty = {
  title: string;
  type: string;
  email: string;
  phone: string;
};

export const summary: SummaryType = {
  requestNumber: '105738801',
  status: 'Draft',
  claimDate: 'Tue, Jun 10, 2025',
  account: '21127101 (DEVBUS1)',
  accountType: 'Standing Guarantee Account',
  claimant: {
    title: 'RNS1 User AE9239529',
    type: 'Business',
    email: 'someone@gmail.com',
    phone: '+971 50 7285969',
  },
  claimType: 'Refund of Deposit',
  beneficiary: {
    title: 'RNS1 User AE9239529',
    type: 'Business',
    email: 'someoneelse@gmail.com',
    phone: '+971 50 7285969',
  },
  
};

export type DeclarationCardType = {
  _Id: number,
  type: string,
  chargeType1: string,
  chargeType2: string,
  chargeType3: string,
  deposit1: string,
  deposit2: string,
  deposit3: string,
}

export const declarationCard : DeclarationCardType ={
  _Id: 44444444,
  type: "Import From ROW",
  chargeType1: "Deposit Alternative Duty Rate",
  chargeType2: "Missing Document Deposit",
  chargeType3: "Anti Dumping Deposit",
  deposit1: "3,100",
  deposit2: "500",
  deposit3: "2,100"
}

