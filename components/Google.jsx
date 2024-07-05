import { fetchGoogle } from "@/actions/fetchGoogle";

export default async function Google() {
    const res = await fetchGoogle();
    return (
        <div dangerouslySetInnerHTML={{
            __html: res
        }}></div>
    );
}