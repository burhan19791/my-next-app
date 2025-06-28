'use client';

import { SummaryType } from '@/utils/common.utils';

type Props = { summary: SummaryType };

export default function SummaryCard({ summary }: Props) {
  return (
    <div>
      <h3>Claim Type</h3>
      <h3>{summary.claimType}</h3>
    </div>
  );
}
