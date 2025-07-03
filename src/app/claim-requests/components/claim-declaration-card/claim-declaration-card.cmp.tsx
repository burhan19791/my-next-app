'use client';

import { declarationdb, DeclarationType } from '@/utils/common.utils';
import { useQuery } from '@tanstack/react-query';
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Badge,
  Checkbox,
  FileInput,
  HelperText,
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import { useEffect, useState } from 'react';
import {
  HiArrowCircleUp,
  HiDuplicate,
  HiEye,
  HiEyeOff,
  HiPencil,
  HiPlusCircle,
} from 'react-icons/hi';
import fromClaimDeclarationCardSkeleton from './claim-declaration-card-skeleton.cmp';
import ClaimDeclarationCardSkeleton from './claim-declaration-card-skeleton.cmp';

export default function ClaimDeclarationCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const {
    isLoading,
    data: declaration,
    isError,
    error,
  } = useQuery<DeclarationType, Error>({
    queryKey: ['getDeclaration'],
    queryFn: () => declarationdb,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (!isLoading) {
      const delay = setTimeout(() => setShowContent(true), 1000); // 500ms delay
      return () => clearTimeout(delay);
    } else {
      setShowContent(false); // reset if reloading
    }
  }, [isLoading]);

  if (!showContent) {
    return <ClaimDeclarationCardSkeleton />;
  }

  return (
    <>
      {isLoading && <ClaimDeclarationCardSkeleton />}
      {!isLoading && declaration && (
        <Accordion className="border-none bg-white hover:bg-white">
          <AccordionPanel>
            <AccordionTitle className="cursor-pointer bg-white hover:bg-white focus:ring-transparent">
              <div className="flex items-center gap-3">
                <div className="flex h-8 min-w-8 items-center justify-center rounded-full border-3 border-blue-500 text-sm font-bold text-black">
                  1 <span className="text-xs">/1</span>
                </div>
                <div className="flex items-end gap-3">
                  <div>
                    <div className="text-md font-bold text-black">
                      {declaration.id}
                    </div>
                    <div className="font-gray-500 text-xs font-bold tracking-wide text-gray-400 uppercase">
                      {declaration.type}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      <Badge
                        className="flex h-5 w-5 items-center justify-center"
                        color="info"
                      >
                        <HiDuplicate />
                      </Badge>
                    </div>
                    <div>
                      <Badge
                        className="flex h-5 w-5 items-center justify-center"
                        color="failure"
                      >
                        <HiArrowCircleUp />
                      </Badge>
                    </div>
                    <div>
                      <Badge
                        className="flex h-5 w-5 items-center justify-center"
                        color="light"
                      >
                        <HiPlusCircle />
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTitle>
            <AccordionContent className="bg-white">
              <div className="overflow-x-auto">
                <Table hoverable>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell className="p-4"></TableHeadCell>
                      <TableHeadCell>
                        <div className="flex flex-col">
                          Charge <span>Type</span>
                        </div>
                      </TableHeadCell>
                      <TableHeadCell>
                        <div className="flex flex-col">
                          Deposit <span className="text-gray-500">(AED)</span>
                        </div>
                      </TableHeadCell>
                      <TableHeadCell>
                        <div className="flex flex-col">
                          Export <span>Status</span>
                        </div>
                      </TableHeadCell>
                      <TableHeadCell>
                        <div className="flex flex-col">
                          Claim <span className="text-gray-500">(AED)</span>
                        </div>
                      </TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="divide-y">
                    <TableRow className="border-b-1 border-b-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="p-4">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="flex gap-2 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                        {declaration.chargeType1}
                        <Badge
                          className="flex h-5 w-5 items-center justify-center"
                          color="info"
                        >
                          <HiArrowCircleUp />
                        </Badge>
                      </TableCell>
                      <TableCell>{declaration.deposit1}</TableCell>
                      <TableCell>
                        <HiPencil></HiPencil>
                      </TableCell>
                      <TableCell>
                        <HiPencil></HiPencil>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b-1 border-b-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="p-4">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="flex gap-2 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                        {declaration.chargeType2}
                        <Badge
                          className="flex h-5 w-5 items-center justify-center"
                          color="info"
                        >
                          <HiArrowCircleUp />
                        </Badge>
                      </TableCell>
                      <TableCell>{declaration.deposit2}</TableCell>
                      <TableCell>
                        <HiPencil></HiPencil>
                      </TableCell>
                      <TableCell>
                        <HiPencil></HiPencil>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="p-4">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="flex gap-2 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                        {declaration.chargeType3}
                        <Badge
                          className="flex h-5 w-5 items-center justify-center"
                          color="info"
                        >
                          <HiArrowCircleUp />
                        </Badge>
                      </TableCell>
                      <TableCell>{declaration.deposit3}</TableCell>
                      <TableCell>
                        <HiPencil></HiPencil>
                      </TableCell>
                      <TableCell>
                        <HiPencil></HiPencil>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 rounded-b-lg bg-gray-50 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                  <span className="text-xl">
                    <HiDuplicate></HiDuplicate>
                  </span>
                  Declaration Attachments
                  <div
                    className="cursor pointer text-lg"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {isOpen ? (
                      <HiEyeOff className="cursor-pointer" />
                    ) : (
                      <HiEye className="cursor-pointer" />
                    )}
                  </div>
                </div>
                {!isOpen && (
                  <div className="mt-2 text-xs text-gray-500 italic">
                    To upload or view attachments, you may expand the section by
                    clicking above icon
                  </div>
                )}

                {isOpen && (
                  <div className="mt-4 text-gray-500">
                    <div className="text-sm lg:w-4/6">
                      Please upload the relevant documents for your claim
                      submission. Make sure your files are clear, complete, and
                      meet the following requirements:
                    </div>
                    <div className="mt-4 text-xs italic">
                      <div>Accepted formats: PDF, JPG, PNG</div>
                      <div>Maximum size: 5MB per file</div>
                      <div>You may upload multiple files if needed</div>
                    </div>
                    <div>
                      <div className="mt-4 text-xs text-yellow-500 italic">
                        There is no attachment, so nothing to show here.
                      </div>
                      <div id="fileUpload" className="mt-3 w-full">
                        <FileInput id="file" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      )}
    </>
  );
}
