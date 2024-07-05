'use client'

export default function ClientButton({states}) {
    function handleClick(){
        console.log('Buttons was clicked')
    }
    return (
        <section className=" bg-slate-900 text-white p-20 flex flex-col gap-10 justify-start">
                <h1 className="font-bold text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, omnis?</h1>
                <p dangerouslySetInnerHTML={{
                    __html: states
                }}>
                </p>
                <button onClick={handleClick} className="px-5 py-3 rounded-lg bg-white text-black">Click me
                </button>
        </section>
    );
}