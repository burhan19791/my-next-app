'use client';

import { Spinner } from "flowbite-react";

export default function ClaimDeclarationCardSkeleton() {
  return <>
    <div className="bg-white p-6 rounded-lg">
        <Spinner color="info" aria-label="Info spinner example" size="md" />
    </div>
  </>;
}