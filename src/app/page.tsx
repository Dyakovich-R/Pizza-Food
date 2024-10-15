import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';
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
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={'Піца'}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                  {
                    id: 2,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                  {
                    id: 3,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                  {
                    id: 4,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={'Комбо'}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                  {
                    id: 2,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                  {
                    id: 3,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                  {
                    id: 4,
                    name: 'Біф енд Кріспі',
                    imageUrl:
                      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
                    price: 345,
                    items: [{ price: 345 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
