import PocketBase from 'pocketbase'; 
const pb = new PocketBase('https://sae203-2026.lola-brouart.fr');

export async function allArtistsDate() { 
    const records = await pb.collection('ARTISTE').getFullList({
        sort: 'show_artiste'
    }); 
    return records; 
}

export async function allArtists() { 
    const records = await pb.collection('ARTISTE').getFullList({
        sort: 'nom_artiste'
    }); 
    return records; 
}

export async function allScenes() { 
    const records = await pb.collection('SCENE').getFullList({
        sort: 'nom_scene'
    }); 
    return records; 
}

export async function oneArtisteID(id) { 
    const records = await pb.collection('ARTISTE').getOne(id); 
    return records; 
}