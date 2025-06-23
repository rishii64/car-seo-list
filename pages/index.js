import '../app/globals.css'
import Link from 'next/link';
import cars from '../data/cars';

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Car Listings</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map(car => (
                    <Link key={`${car.brand}-${car.model}-${car.year}`} href={`/cars/${car.brand}-${car.model}-${car.year}`}>
                        <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden cursor-pointer group">
                            <img
                                src={car.image}
                                alt={`${car.brand} ${car.model}`}
                                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-5 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold capitalize text-gray-800">
                                        {car.brand} {car.model}
                                    </h2>
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium 
                                        ${car.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {car.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Year: {car.year}</p>
                                <p className="text-gray-700 font-medium">
                                    Price: <span className="text-blue-600">{car.price}</span>
                                </p>
                                <div className="text-sm text-gray-500 flex gap-2">
                                    <span>Fuel: {car.fuel}</span>
                                    <span>|</span>
                                    <span>Trans: {car.transmission}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
