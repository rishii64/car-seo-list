export function parseSlug(slug) {
    const [brand, model, year] = slug.split("-");
    return { brand, model, year };
}

export function generateMetadata(car) {
    return {
        title: `${car.brand.toLowerCase()} ${car.model.toUpperCase()} ${car.year} - ${car.status}`,
        description: `Buy ${car.brand} ${car.model} (${car.year}) with ${car.fuel}, ${car.transmission}. Status: ${car.status}. Price: ${car.price}`,
        image: car.image
    };
}
