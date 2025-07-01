'use client';

import { Button, HelperText, Label, TextInput } from 'flowbite-react';
import { HiInformationCircle, HiOutlinePlus } from 'react-icons/hi';

type Props = {};

export default function AddClaimDeclaration() {
  return (
    <>
      <div className="mt-6 rounded-lg bg-green-100 p-6 text-green-700">
        <div className="flex items-center gap-2 text-sm font-bold">
          <HiInformationCircle className="text-xl"></HiInformationCircle>Add
          Claim Declaration
        </div>
        <div className="mt-2 text-sm">
          <p>
            Please enter the details for each individual claim declaration
            related to this request.
          </p>
          <p>
            You may add multiple declarations if applicable. Ensure that each
            entry is accurate and complete before submitting.
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="w-full">
            <TextInput placeholder="Input Declaration Number to Add" required />
          </div>
          <Button className='bg-green-500 text-nowrap gap-3 ml-2'>
            <HiOutlinePlus />
            <span className='hidden md:flex'>Add Declaration</span>
          </Button>
        </div>
      </div>
    </>
  );
}
