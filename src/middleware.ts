export const config = {
    runtime: "experimental-edge",
    unstable_allowDynamic: ["/.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"],
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
