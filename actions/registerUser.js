'use server'

import UserModel from "@/models/user";
import { connectDb } from "@/utils/connectDb";
import { formdataToObject } from "@/utils/helpers";
import bcrypt from 'bcrypt'
import { RedirectType, redirect } from "next/navigation";
import {z} from 'zod';
import { cookies } from "next/headers";

const signupSchema = z.object({
    email: z.string().email("enter a valid email"),
    userName: z.string().min(3, "username too short"),
    password: z.string()
    .min(6, 'password too short')
    .max(25, 'password too long')
    .regex(/^\d+$/, "include a number")
})

export async function registerUser(_, formData ){
    const {userName, email, password} = formdataToObject(formData);
    console.log({email, password, userName});

    const tryparse = signupSchema.safeParse({userName, email, password});
    if(!tryparse.success) return {
        error: (tryparse.error.flatten().fieldErrors)
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    try{
        await connectDb();
        const emailInUse = await UserModel.findOne({email});
        if(emailInUse) return {err: "email already registered"}
        const newUser = new UserModel ({email, userName, password: hashedPassword});
        const saved = await newUser.save();
        if(!saved) return {err: "Failed to register"}
        const {set} = cookies();
        set("user_id", saved._id.toString(), {
            maxAge: 60 * 60 * 24
        })
        
    }catch(err){
        console.error(err);
        return {err: "something went wrong"}
    }
    redirect('/movies', RedirectType.replace)
}