import { Marker } from "../model/marker";

type markerRessource = {
    latitude: number,
    longitude:number,
    name:string,
    description: string,
    label: string,
};

export async function getMarker(id:string) {
    const marker = await Marker.findById(id).exec();
    if(marker == null){
        throw new Error ("getMarker failed. No marker with this id");
    }
    
    return{
        id: marker._id.toString(),
        latitude: marker.latitude,
        longitude: marker.longitude,
        name: marker.name,
        description: marker.description,
        label: marker.label
    };
}

export async function createMarker(markerRessource: markerRessource) {
    await Marker.create(markerRessource);
}


export async function getAllMarkers() {
    const markers = await Marker.find({}).exec();
    const markerRes: markerRessource[] = [];
    for (const x of markers){
        const marker = {
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