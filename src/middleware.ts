export const config = {
    runtime: "experimental-edge",
    unstable_allowDynamic: ["**/node_modules/lodash/lodash.js"],
};

import _ from "lodash";

import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/new-page") {
        const isArray = _.isArray([]);
        console.log("using lodash.isArray", isArray)
        return NextResponse.next();
    }

    return NextResponse.next();
}
