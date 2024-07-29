import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full py-16" style={{ position: "absolute", zIndex: -1, height: "100vh", backgroundImage: "url('/hero.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "bottom" }}>
        </section>
    );
}
