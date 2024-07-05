import { fetchMovies } from "@/actions/fetchMovies";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import UserModel from "@/models/user";
import LogoutButton from "@/components/logOutButton";
import { pages } from "next/dist/build/templates/app-page";

export default async function page({searchParams}) {
    const {has, get} = cookies();
    if(!has('user_id')) redirect('/login');
    const userId = await get('user_id').value
    const user = await UserModel.findById(userId);
    if(!user) redirect('/login');

    const page = searchParams.page ?? 1;

    const movies = await fetchMovies(pages);
    console.log(movies);

    return(
        <main>
            <div className="p-20 flex justify-between">
                {user.userName} <LogoutButton/>
            </div>
            <section className=" p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    movies.map(item=>
                        <div key={item.title} className="flex flex-col gap-4">
                            <img 
                            src={item.imgUrl}
                            alt={item.title}
                            className="rounded-lg h-32 w-full bg-black object-cover"/>
                            <h2 className="font-semibold line-clamp-2">{item.title}</h2>
                        </div>
                    )
                }
            </section>
            <div className="flex gap-6 justify-center">
                <Link href={`/movies?page=${Number(page) - 1}`}>Prev</Link>
                <Link href={`/movies?page=${Number(page) + 1}`}>Next</Link>
            </div>
        </main>
    );
}