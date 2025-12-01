import TextSlider from "@/components/textslider";
import Aboutus from "@/components/Aboutus";
import Courses from "@/components/home/courses";
import Infrastructure from "@/components/home/Infrastructure";
import Hero from "@/components/home/hero";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-white">
            <div className="pt-[80px]">
                <TextSlider />
            </div>
            <section className="mt-0">
                <Hero />
            </section>
            <section className="mt-6">
                <Aboutus />
            </section>
            <section className="mt-6">
                <Courses />
            </section>
            <section className="mt-6">
                <Infrastructure />
            </section>
            <div className="h-10" />
        </main>
    );
}
