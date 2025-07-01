'use client';

import { Badge } from 'flowbite-react';
import { HiArrowCircleUp, HiDuplicate, HiPlusCircle } from 'react-icons/hi';

export default function Legend() {
  return (
    <>
      <div className="mt-4 flex flex-wrap gap-4 gap-y-2">
        <div className="flex items-center gap-1 text-xs italic">
          <Badge
            className="flex h-5 w-5 items-center justify-center"
            color="failure"
          >
            <HiArrowCircleUp />
          </Badge>
          Outbound Declaration Detail Required
        </div>
        <div className="flex items-center gap-1 text-xs italic">
          <Badge
            className="flex h-5 w-5 items-center justify-center"
            color="info"
          >
            <HiArrowCircleUp />
          </Badge>
          Outbound Declaration Detail Provided
        </div>
        <div className="flex items-center gap-1 text-xs italic">
          <Badge
            className="flex h-5 w-5 items-center justify-center"
            color="light"
          >
            <HiArrowCircleUp />
          </Badge>
          Outbound Declaration Detail Applicable
        </div>
        <div className="flex items-center gap-1 text-xs italic">
          <Badge
            className="flex h-5 w-5 items-center justify-center"
            color="failure"
          >
            <HiDuplicate />
          </Badge>
          Declaration Attachments Required
        </div>
        <div className="flex items-center gap-1 text-xs italic">
          <Badge
            className="flex h-5 w-5 items-center justify-center"
            color="info"
          >
            <HiDuplicate />
          </Badge>
          Declaration Attachments Provided
        </div>
        <div className="flex items-center gap-1 text-xs italic">
          <Badge
            className="flex h-5 w-5 items-center justify-center"
            color="failure"
          >
            <HiPlusCircle />
          </Badge>
          Deposit's Additional Reference Required
        </div>
        <div className="flex items-center gap-1 text-xs italic">
          <Badge
            className="flex h-5 w-5 items-center justify-center"
            color="info"
          >
            <HiPlusCircle />
          </Badge>
          Deposit Additional Reference Provided
        </div>
      </div>
    </>
  );
}
