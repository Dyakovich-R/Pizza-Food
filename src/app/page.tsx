import { Container, Filters, Title, TopBar } from '@/components/shared';
import React from 'react';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title
          text="Усі піци"
          size="lg"
          className="font-extrabold"
        />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*filter*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">list products</div>
          </div>
        </div>
      </Container>
    </>
  );
}
