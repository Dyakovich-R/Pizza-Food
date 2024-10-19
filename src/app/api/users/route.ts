import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

/**
 * GET /api/users
 *
 * Returns a list of all users.
 *
 */
export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

/**
 * POST /api/users
 *
 * Creates a new user.
 *
 * @param {NextRequest} req - The request object.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.name - The user's name.
 * @param {string} req.body.email - The user's email.
 * @param {string} [req.body.password] - The user's password.
 *
 * @returns {Promise<NextResponse>} The response object.
 */
export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
