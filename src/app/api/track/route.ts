import { logVisit } from '@/app/actions';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function POST(req: NextRequest) {
  const { pathname } = await req.json();

  // Inject pathname into headers so action can read it
  const h = headers();
  (h as any).set('x-nextjs-pathname', pathname);

  await logVisit();
  return new Response(null, { status: 204 });
}