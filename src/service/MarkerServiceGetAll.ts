import { Marker } from "../model/marker";

type markerRessource = {
    id:string,
    latitude: number,
    longitude:number,
    name:string,
    description: string,
    label: string,
};

export async function getAllMarkers() {
    const markers = await Marker.find({}).exec();
    const markerRes: markerRessource[] = [];
    for (const x of markers){
        const marker: markerRessource = {
            id: x._id.toString(),
            latitude: x.latitude,
            longitude: x.longitude,
            name: x.name,
            description: x.description,
            label: x.label
        };
        markerRes.push(marker);
    }
    return markerRes;
}