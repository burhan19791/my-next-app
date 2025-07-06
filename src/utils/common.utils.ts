import { Rowdies } from 'next/font/google';

export type Summary = {
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

export const summarydb: Summary = {
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

export type Declaration = {
  id: string;
  declarationNumber: string;
  type: string;
  deposits: Deposit[];
};

export type Deposit = {
  chargeType: string;
  amount: number;
  exportStatus?: string;
  claimAmount?: number;
};

export const declarationsdb: Declaration[] = [
  {
    id: '1',
    type: 'Import From ROW',
    declarationNumber: '444444444',
    deposits: [
      { chargeType: 'Deposit Alternative Duty Rate', amount: 3100 },
      { chargeType: 'Missing Document Deposit', amount: 500 },
      { chargeType: 'Anti-Dumping Deposit', amount: 2100 },
    ],
  },
  {
    id: '2',
    type: 'Import From ROW',
    declarationNumber: '22222222',
    deposits: [
      { chargeType: 'Deposit Alternative Duty Rate', amount: 2300 },
      { chargeType: 'Missing Document Deposit', amount: 150 },
      { chargeType: 'Anti-Dumping Deposit', amount: 1300 },
    ],
  },
];

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
