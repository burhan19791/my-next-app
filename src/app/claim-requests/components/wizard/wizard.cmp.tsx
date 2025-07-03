'use client';

type Props = {};

export default function Wizard() {
  return <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500 text-base text-white">
            1
          </div>
          <span className="leading-none">Claim Declarations</span>
        </div>
        <div className="hidden h-1 w-14 rounded-2xl bg-gray-300 lg:block"></div>
        <div className="hidden sm:block lg:hidden">/</div>
        <div className="flex items-center gap-2">
          <div className="text-primary-500 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-blue-500 text-base">
            2
          </div>
          <span className="leading-none">Outbound Details</span>
        </div>
        <div className="hidden h-1 w-14 rounded-2xl bg-gray-300 lg:block"></div>
        <div className="hidden sm:block lg:hidden">/</div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-gray-400 text-base text-gray-400">
            3
          </div>
          <span className="leading-none text-gray-400">Charges & Payment</span>
        </div>
        <div className="hidden h-1 w-14 rounded-2xl bg-gray-300 lg:block"></div>
        <div className="hidden text-gray-400 sm:block lg:hidden">/</div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-gray-400 text-base text-gray-400">
            4
          </div>
          <span className="leading-none text-gray-400">Review & Submit</span>
        </div>
      </div>;
}
