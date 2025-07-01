'use client';

type Props = {};

export default function SummaryCardSkeleton() {
  return (
    <>
      <div role="status" className="animate-pulse">
        <div className="mb-4 h-52 min-w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </>
  );
}
