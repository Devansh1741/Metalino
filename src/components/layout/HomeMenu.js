import Image from "next/image";
import MenuItem from "../menu/MenuItems";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute text-fill -top-[70px] -z-10">
                    <Image src={'/salad1.png'} width={109} height={189} alt={'salad'}/>
                </div>
                <div className="absolute right-0 -z-10 -top-[100px]">
                    <Image src={'/salad2.png'} width={107} height={195} alt={'salad'}/>
                </div>
            </div>
            <div className="text-center">
                <SectionHeader subHeader={"Chech Out"}  mainHeader={"Menu"} />
            </div>
            <div className="grid grid-cols-3 gap-10">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}