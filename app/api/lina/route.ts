import { NextRequest, NextResponse } from "next/server";

export function  GET(req : NextRequest){
    const users = [
        {name : "mohamed", age : 30},
        {name : "lina", age : 25},
        {name : "ahmed", age : 35},
        { name : "sara", age : 28},


    ]
    return NextResponse.json( users)

}