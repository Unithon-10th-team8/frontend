import {
  type NextRequest,
  type NextFetchEvent,
  NextResponse,
} from "next/server";
import { API_HOST } from "./constants";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  try {
    const res = await fetch(`${API_HOST}/v1/users/me`, {
      headers: { Cookie: request.headers.get("Cookie") || "" },
    });
    if (res.status !== 200) throw Error("not logined");
    if (request.nextUrl.pathname.startsWith("/signIn")) {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  } catch (e) {
    if (!request.nextUrl.pathname.startsWith("/signIn")) {
      const url = request.nextUrl.clone();
      url.pathname = "/signIn";
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: ["/", "/my", "/signIn", "/contacts/:path*", "/calendar/:path*"],
};
