import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { decrypt } from './app/(no_auth)/login/session'

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/']

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const cookie = cookies().get('token')?.value
    const session = await decrypt(cookie)

    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.uuid) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.uuid &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}