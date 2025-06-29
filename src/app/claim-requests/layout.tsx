'use client';

import Image from 'next/image';
import { HiOutlineBell } from 'react-icons/hi';

export default function ClaimRequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="shadow-gray-2d00 mx-auto flex items-center justify-between rounded-t-2xl bg-white p-8 drop-shadow-xl">
        <div className="text-xl font-bold">Submit Claim</div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full relative bg-gray-100">
            <HiOutlineBell />
            <span className="flex w-2 h-2 me-3 bg-red-500 rounded-full absolute top-2 left-4"></span>
          </div>
          <div>
            <Image
              src="/logo.png"
              alt="My Logo"
              width={152}
              height={132}
              className=""
            />
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
