export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center"> 
                <img src="/pizza1.png" alt="pizza" className="max-h-36 block mx-auto"/>
            </div>
            <h4 className="font-semibold my-3 text-xl">Pineapple Pizza</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet. Qui accusamus accusantium id 
            </p>
            <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">Add to Cart $12</button>
        </div>
    );
}