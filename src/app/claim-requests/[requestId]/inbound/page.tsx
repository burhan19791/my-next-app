'use client';

import { summary } from "@/utils/common.utils";
import SummaryCard from "../../components/summary-card/summary-card.cmp";

export default function InboundPage() {
  return <div>Inbound
    <div>
      <SummaryCard summary={summary}></SummaryCard>
    </div>
  </div>;
}