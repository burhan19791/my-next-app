'use client';

import { Spinner } from 'flowbite-react';

type Props = {};

export default function SummaryCardSkeleton() {
  return (
    <>
      <div className="rounded-lg bg-white p-6">
        <div className="flex items-center gap-3">
          <div>
            <Spinner color="info" aria-label="Info spinner example" size="sm" />
          </div>
          <div className="text-sm font-bold text-gray-700">
            Nothing To Show Just Yet
          </div>
        </div>
        <div className="mt-1 text-sm">
          Your Request Summary Will Appear Here After It's Loaded
        </div>
      </div>
    </>
  );
}
