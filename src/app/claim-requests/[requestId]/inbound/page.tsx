'use client';

import { summary } from '@/utils/common.utils';
import SummaryCard from '../../components/summary-card/summary-card.cmp';
import Wizard from '../../components/wizard/wizard.cmp';
import Title from '@/components/title/title.cmp';
import { ClaimDeclarationCard } from '../../components/claim-declaration-card/claim-declaration-card.cmp';
import SummaryCardSkeleton from '../../components/summary-card/summary-card-skeleton.cmp';
import AddClaimDeclaration from '../../components/add-claim-declaration/add-claim-declaration.cmp';
import Legend from '../../partial/legend.cmp';
import { Button } from 'flowbite-react';
import { HiArrowNarrowRight, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiArrowLongRight } from 'react-icons/hi2';

export default function InboundPage() {
  return (
    <div className="mx-auto bg-gray-100 p-8">
      <div>
        <Wizard></Wizard>
      </div>
      <div>
        <Title title="Request Summary"></Title>
        <SummaryCard summary={summary} isLoading={false}></SummaryCard>
        <Title title="Claim Requests"></Title>
        <ClaimDeclarationCard></ClaimDeclarationCard>
        <AddClaimDeclaration></AddClaimDeclaration>
        <Legend></Legend>
        <div className="mt-6 flex items-center justify-between">
          <div>Message</div>
          <Button className="cursor-pointer bg-blue-700">
            NEXT
            <HiOutlineArrowNarrowRight className="ml-2 text-xl font-bold" />
          </Button>
        </div>
      </div>
    </div>
  );
}
