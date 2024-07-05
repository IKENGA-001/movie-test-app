export default function Layout({children}) {
    return (
        <section className="p-20">
            <div className="max-w-[400px] mx-auto">
                {children}
            </div>
        </section>
    );
}