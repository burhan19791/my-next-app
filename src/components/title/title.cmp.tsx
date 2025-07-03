'use client';

type Props = {title: string};

export default function Title({title}: Props) {
  return <div className="text-2xl leading-none font-bold mt-12 mx-2 mb-4">{title}</div>;
}