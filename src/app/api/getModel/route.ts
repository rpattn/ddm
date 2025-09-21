"use server"

import { NextRequest } from "next/server";
import path from "path";
import fs from 'fs'


export async function GET(request: NextRequest) {
    // For example, fetch data from your DB here
    const resourcePath = request.nextUrl.searchParams.get('url')

    if(resourcePath === "/users.json") {
        return new Response('Bad Request', {status: 403})
    }

    if(resourcePath) {
        const filePath = path.join(process.cwd(), "data/", resourcePath)
        //const filePath = path.join('./data', resourcePath)
        //console.log("Current dir: ", __dirname)
        if (fs.existsSync(filePath)) {
        
            console.log("Reading Model: ", filePath)
            const buffer = fs.readFileSync(filePath)
            console.log("Sending Model: ", filePath)

            //console.log(buffer.toString())
            return new Response(buffer);
        }
        console.log(filePath)
        console.log("requested non-existant file path")
    }

    console.log("resource path does not exist")

    return new Response('Bad Request', {status: 403})
  }