'use server'

export async function fetchGoogle (){
    const req = await fetch('https://google.com');
    const res = await req.text();

    return res;
}