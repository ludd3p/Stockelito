import BusinessMenu from "../BusinessMenu/BusinessMenu";

export default function Hero() {
    return (
        <section
            className="w-full"
            style={{
                position: "relative",
                backgroundImage: "url('/hero.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                maxWidth: '2100px',
                width: '100%',
                borderRadius: "16px",
                minHeight:"100vh"
            }}>

            <BusinessMenu />
        </section>
    );
}