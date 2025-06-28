
  export type SummaryType = {
    requestNumber: string;
    status: string;
    claimDate: string;
    account: string;
    accountType: string
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
    requestNumber: 'string',
    status: 'string',
    claimDate: "123",
    account: 'string',
    accountType: 'SG',
    claimant: {
      title: 'string',
      type: 'string',
      email: 'string',
      phone: "123",
    },
    claimType: 'string',
    beneficiary: {
      title: 'string',
      type: 'string',
      email: 'string',
      phone: "123",
    },
  };
