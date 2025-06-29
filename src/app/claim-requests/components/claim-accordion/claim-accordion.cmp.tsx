import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';

export function ClaimAccordian() {
  return (
    <Accordion className="border-none bg-white">
      <AccordionPanel>
        <AccordionTitle className="bg-white">
          <div className='flex'>
            <div>circle</div>
            <div>something</div>
            <div>badges</div>
          </div>
        </AccordionTitle>
        <AccordionContent className="bg-white"></AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
