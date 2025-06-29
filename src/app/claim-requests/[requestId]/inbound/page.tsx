'use client';

import { summary } from '@/utils/common.utils';
import SummaryCard from '../../components/summary-card/summary-card.cmp';
import Wizard from '../../components/wizard/wizard.cmp';
import Title from '@/components/title/title.cmp';
import { ClaimAccordian } from '../../components/claim-accordion/claim-accordion.cmp';

export default function InboundPage() {
  return (
    <div className="mx-auto bg-gray-100 p-8">
      <div>
        <Wizard></Wizard>
      </div>
      <div>
        <Title title="Request Summary"></Title>
        <SummaryCard summary={summary} isLoading={false}></SummaryCard>
        <Title title='Claim Requests'></Title>
        <ClaimAccordian></ClaimAccordian>
      </div>
    </div>
  );
}
