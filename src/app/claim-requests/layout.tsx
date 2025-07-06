'use client';

import Image from 'next/image';
import { HiOutlineBell } from 'react-icons/hi';
import { MdHeight } from 'react-icons/md';

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
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <HiOutlineBell />
            <span className="absolute top-2 left-4 me-3 flex h-2 w-2 rounded-full bg-red-500"></span>
          </div>
          <div>
            <Image
              src="/logo.png"
              alt="My Logo"
              className="h-8 w-38"
              width={152}
              height={32}
            />
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
