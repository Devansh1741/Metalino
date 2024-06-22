import SectionHeader from "./SectionHeader";

export default function SectionAbout() {
    return (
        <>
            <section className="text-center my-16">
            <SectionHeader subHeader={'Our Story'} mainHeader={'About Us'}/>
            <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
            <p>
            Lorem ipsum dolor sit amet. Hic mollitia ratione sed recusandae galisum a esse autem ut consequatur omnis. Sit molestiae culpa et expedita amet qui obcaecati illum et facere omnis. Est expedita neque id explicabo earum id internos dolores qui mollitia velit nam modi doloribus rem repellat quia ut suscipit molestias. Non maxime quisquam quo veritatis eveniet sed iusto ipsam sed voluptatibus architecto aut expedita illum sed veniam asperiores et consequuntur voluptas. Aut ullam voluptatem aut vitae voluptatem ab voluptas molestias.
            </p>
            <p>
            Sit molestiae culpa et expedita amet qui obcaecati illum et facere omnis. Est expedita neque id explicabo earum id internos dolores qui mollitia velit nam modi doloribus rem repellat quia ut suscipit molestias. Non maxime quisquam quo veritatis eveniet sed iusto ipsam sed voluptatibus architecto aut expedita illum sed veniam asperiores et consequuntur voluptas. Aut ullam voluptatem aut vitae voluptatem ab voluptas molestias.
            </p>
            </div>
        </section>
        <section className="text-center my-8">
            <SectionHeader subHeader={'Don\'t Hesitate'} mainHeader={'Contact Us'}/>
            <div className="mt-8">
            <a className="text-4xl underline text-gray-500" href="tel:+91111222333">+91 111 222 333</a>
            </div>
        </section>
        </>
    )
}