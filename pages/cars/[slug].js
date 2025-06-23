import Head from 'next/head';
import cars from '../../data/cars';
import { parseSlug, generateMetadata } from '../../utils/generateMetadata';

export default function CarPage({ car, meta }) {
    if (!car) return <div className="text-center mt-10 text-xl text-red-500">Car not found</div>;

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": `${car.brand} ${car.model}`,
                        "image": car.image,
                        "description": meta.description,
                        "brand": {
                            "@type": "Brand",
                            "name": car.brand
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": car.price,
                            "priceCurrency": "USD",
                            "availability": car.status === 'Available' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
                        }
                    })
                }} />
            </Head>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-8">
                    <img
                        src={car.image}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full md:w-md h-auto rounded-xl shadow-md object-cover"
                    />

                    <div className="flex-1 space-y-6">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-gray-900 capitalize">
                                {car.brand} {car.model} <span className="text-gray-500 text-xl">({car.year})</span>
                            </h1>
                            <span className={`text-sm px-3 py-1 rounded-full font-semibold ${car.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {car.status}
                            </span>
                        </div>

                        <ul className="space-y-2 text-gray-700 text-lg">
                            <li><strong>Fuel:</strong> {car.fuel}</li>
                            <li><strong>Transmission:</strong> {car.transmission}</li>
                            <li><strong>Price:</strong> <span className="text-blue-600 font-semibold">{car.price}</span></li>
                        </ul>

                        <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300">
                            Contact Seller
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const paths = cars.map(car => ({
        params: { slug: `${car.brand}-${car.model}-${car.year}` }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { brand, model, year } = parseSlug(params.slug);
    const car = cars.find(c => c.brand === brand && c.model === model && c.year === year);
    const meta = car ? generateMetadata(car) : {};

    return {
        props: { car: car || null, meta }
    };
}
