'use client';

import Title from '@/components/title/title.cmp';
import { SummaryType } from '@/utils/common.utils';
import { Badge } from 'flowbite-react';
import { HiMail, HiPhone } from 'react-icons/hi';

type Props = { summary: SummaryType; isLoading: boolean };

export default function SummaryCard({ summary, isLoading }: Props) {
  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="rounded-lg bg-white p-6">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="text-sm text-gray-400">Request Number</div>
              <div className="width-full flex items-center gap-2">
                <div>{summary.requestNumber}</div>
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
          </div>
        </div>
      )}
    </>
  );
}
