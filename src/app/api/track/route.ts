import { logVisit } from '@/app/actions';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // JSON body is guaranteed to be { pathname: string }
  const body = (await req.json()) as { pathname: string };

  await logVisit(body.pathname);

  return new NextResponse(null, { status: 204 });
}