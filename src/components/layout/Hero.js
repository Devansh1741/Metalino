import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">Indulge in the Authentic Flavors of Italy with &nbsp;
                <span className="text-primary">Metalino</span>  
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                Discover a curated selection of premium Italian ingredients, from artisanal pasta to rich olive oils and delectable sauces. Our collection features handpicked products from small-scale Italian producers dedicated to quality and tradition. Enhance your cooking with our premium olive oils, traditional pasta, and an assortment of gourmet pantry staples like balsamic vinegar and truffles. Join our community of food lovers and embark on a gastronomic journey with Metalino, where every meal celebrates good food, good company, and the joy of cooking. Buon appetito!
                </p>
                <div className="flex gap-2 text-sm">
                    <button 
                    className="bg-primary flex justify-center items-center uppercase gap-2 text-white px-4 py-2 rounded-full">
                        Order Now <Right />
                    </button>
                    <button className="flex border-0 gap-2 py-2 justify-center items-center text-gray-600 font-semibold">Learn More <Right /> </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza2.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
        </section>
    )
}