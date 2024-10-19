import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients, products } from './constants';
import { Prisma } from '@prisma/client';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariations = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomNumber(300, 500),
    pizzaType,
    size,
  } as Prisma.ProductVariationsUncheckedCreateInput;
};
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Roman',
        email: 'user@gmail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Roman',
        email: 'admin@gmail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Піца Тоні Пепероні',
      imageUrl:
        'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Ftony-pepperony.webp&w=600&q=75',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Піца П'ять Сирів",
      imageUrl:
        'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2F5-syrov.webp&w=600&q=75',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Піца Біф енд Кріспі',
      imageUrl:
        'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-fullpizza.webp&w=600&q=75',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productVariations.createMany({
    data: [
      // Піца Тоні Пепероні
      generateProductVariations({
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariations({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariations({
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
      }),

      // Піца П'ять Сирів
      generateProductVariations({
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariations({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductVariations({
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductVariations({
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
      }),
      generateProductVariations({
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariations({
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
      }),

      // Піца Біф енд Кріспі
      generateProductVariations({
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariations({
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariations({
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
      }),

      // Інші продукти
      generateProductVariations({ productId: 1 }),
      generateProductVariations({ productId: 2 }),
      generateProductVariations({ productId: 3 }),
      generateProductVariations({ productId: 4 }),
      generateProductVariations({ productId: 5 }),
      generateProductVariations({ productId: 6 }),
      generateProductVariations({ productId: 7 }),
      generateProductVariations({ productId: 8 }),
      generateProductVariations({ productId: 9 }),
      generateProductVariations({ productId: 10 }),
      generateProductVariations({ productId: 11 }),
      generateProductVariations({ productId: 12 }),
      generateProductVariations({ productId: 13 }),
      generateProductVariations({ productId: 14 }),
      generateProductVariations({ productId: 15 }),
      generateProductVariations({ productId: 16 }),
      generateProductVariations({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '111111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data:  {
        productVariationId: 1,
        cartId: 1,
        quantity: 2,
        ingredients: {
          connect: [{ id: 1 }, { id: 2 }, { id: 3 }, ],
        },
      },
  });
}

/**
 * Drop all the data in the User table.
 * The CASCADE option is used to delete all the related data as well.
 */
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariations" RESTART IDENTITY CASCADE`;
}

/**
 * Seed the database with data.
 * The function creates two users with roles USER and ADMIN.
 * The passwords are hashed using the bcrypt library.
 */

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async error => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
