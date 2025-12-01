import TextSlider from "@/components/textslider";
import Aboutus from "@/components/Aboutus";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-white">
            <div className="pt-[80px]">
                <TextSlider />
            </div>
            <section className="mt-6">
                <Aboutus />
            </section>
            <div className="h-10" />
        </main>
    );
}
