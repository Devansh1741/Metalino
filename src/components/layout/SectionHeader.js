export default function SectionHeader({subHeader, mainHeader}) {
    return (
        <>
        <h3 className="uppercase text-gray-500 font-semibold leading-8">{subHeader}</h3>
        <h2 className="text-primary font-bold text-4xl italic mb-4">{mainHeader}</h2>
        </>
    )
}