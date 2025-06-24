const cars = [
    {
        brand: "mercedes",
        model: "gls",
        year: "2023",
        fuel: "Diesel",
        transmission: "Automatic",
        price: "$90,000",
        status: "Available",
        image: "/images/mercedes-gls.png"
    },
    {
        brand: "audi",
        model: "a6",
        year: "2022",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$70,000",
        status: "Sold",
        image: "/images/audi-a6.jpg"
    },
    {
        brand: "bmw",
        model: "x5",
        year: "2024",
        fuel: "Diesel",
        transmission: "Automatic",
        price: "$85,000",
        status: "Available",
        image: "/images/bmw-x5.avif"
    },
    {
        brand: "toyota",
        model: "camry",
        year: "2021",
        fuel: "Hybrid",
        transmission: "Automatic",
        price: "$35,000",
        status: "Available",
        image: "/images/toyota-camry.avif"
    }
];

export default cars;

// get-car function
export function getCars(){
    return cars;
}

// add-car function
export function addCars(car){
    cars.push(car);
}