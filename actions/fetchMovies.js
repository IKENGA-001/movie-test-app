'use server'

export async function fetchMovies (page){
    const req = await fetch('https://movee.vercel.app/api/netnaija', {
        method: 'POST',
        body: JSON.stringify({page}),
    });
    const res = await req.json();
    if(res.success) return res.data;
    return null;
}