
interface locationInfo {
    city: string;
    address: string;
}

export const getLocation = async ({city, address}: locationInfo): Promise<{lat: string, lon: string} | null> => {
    try {
        const location = await fetch(`https://nominatim.openstreetmap.org/search?format=json&city=${city}&street=${encodeURIComponent(address)}`);
        const geoData = await location.json();


        const lat: string = geoData[0].lat;
        const lon: string = geoData[0].lon;


        return {
            lat,
            lon
        }

    } catch (e) {
        return null;
    }

}