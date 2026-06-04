import { NextRequest, NextResponse } from 'next/server'

const VALID_USER = 'arcrise'
const VALID_PASS = 'labo2026'

export function proxy(request: NextRequest) {
  const auth = request.headers.get('authorization')

  if (auth?.startsWith('Basic ')) {
    const decoded = atob(auth.slice(6))
    const colon = decoded.indexOf(':')
    if (colon !== -1) {
      const user = decoded.slice(0, colon)
      const pass = decoded.slice(colon + 1)
      if (user === VALID_USER && pass === VALID_PASS) {
        return NextResponse.next()
      }
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Arcrise Labo"' },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico).*)'],
}
