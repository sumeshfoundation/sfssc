import TextSlider from "@/components/textslider";
import Aboutus from "@/components/Aboutus";
import Courses from "@/components/home/courses";
import Hero from "@/components/home/hero";
import Faculty from "@/components/home/Faculty";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-white">
            <div className="pt-[80px]">
                <TextSlider />
            </div>
            <section className="mt-0">
                <Hero />
            </section>
            <section className="mt-4">
                <Aboutus />
            </section>
            <section className="mt-4">
                <Faculty />
            </section>
            <section className="mt-4">
                <Courses />
            </section>

            {/*<div className="h-10" />*/}
        </main>
    );
}
