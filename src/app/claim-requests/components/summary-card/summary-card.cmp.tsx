'use client';

import Title from '@/components/title/title.cmp';
import { summarydb, Summary, delay } from '@/utils/common.utils';
import { useQuery } from '@tanstack/react-query';
import { Badge } from 'flowbite-react';
import { HiMail, HiPhone } from 'react-icons/hi';
import SummaryCardSkeleton from './summary-card-skeleton.cmp';
import { DiVim } from 'react-icons/di';
import { useEffect, useState } from 'react';
import { log } from 'console';

export default function SummaryCard() {
  const [showContent, setShowContent] = useState(false);

  const {
    isLoading,
    data: summary,
    isError,
    error,
  } = useQuery<Summary, Error>({
    queryKey: ['getClaimDeclaration'],
    queryFn: loadSummary,
    staleTime: 1000 * 60 * 5,
  });

  async function loadSummary(){
   await delay(2000)
   return summarydb
  }

  return (
    <>
      {isLoading && <SummaryCardSkeleton></SummaryCardSkeleton>}

      {isError && <div>some error</div>}

      {!isLoading && summary && (
        <div className="rounded-lg bg-white p-6">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="text-sm text-gray-400">Request Number</div>
              <div className="width-full flex items-center gap-2">
                <div>{summarydb.requestNumber}</div>
                <div>
                  <Badge color="info">{summary.status}</Badge>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">{summary.accountType}</div>
              <div className="width-full flex items-center gap-2">
                <div>{summary.account}</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Claim Type</div>
              <div className="width-full flex items-center gap-2">
                <div>{summary.claimType}</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Claim Date</div>
              <div className="width-full flex items-center gap-2">
                <div>{summary.claimDate}</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Claimant</div>
              <div className="width-full gap-2">
                <div className="flex items-center gap-2">
                  <div>{summary.claimant.title}</div>
                  <div>
                    <Badge color="info">{summary.claimant.type}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>
                    <HiPhone></HiPhone>
                  </span>
                  {summary.claimant.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>
                    <HiMail></HiMail>
                  </span>
                  {summary.claimant.email}
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Beneficiary</div>
              <div className="width-full gap-2">
                <div className="flex items-center gap-2">
                  <div>{summary.beneficiary.title}</div>
                  <div>
                    <Badge color="info">{summary.beneficiary.type}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>
                    <HiPhone></HiPhone>
                  </span>
                  {summary.beneficiary.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>
                    <HiMail></HiMail>
                  </span>
                  {summary.beneficiary.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
