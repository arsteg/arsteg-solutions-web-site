import { logVisit } from '@/app/actions';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let pathname = '';
  try {
    const body = (await req.json()) as { pathname?: unknown };
    if (typeof body?.pathname === 'string') pathname = body.pathname;
  } catch {
    // Ignore malformed bodies — tracking is best-effort.
  }

  if (pathname) {
    // logVisit is consent-gated and time-bounded; it never throws.
    await logVisit(pathname);
  }

  return new NextResponse(null, { status: 204 });
}
