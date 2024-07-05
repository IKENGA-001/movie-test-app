'use server'

import { cookies } from "next/headers"

export async function logoutUser(){
    const {delete:del} = cookies()
    del(`user_id`)
}