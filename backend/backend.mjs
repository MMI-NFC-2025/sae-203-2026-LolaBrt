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

export async function oneArtisteID(id) { 
    const records = await pb.collection('ARTISTE').getOne(id); 
    return records; 
}

export async function allScenes() { 
    const records = await pb.collection('SCENE').getFullList({
        sort: 'nom_scene'
    }); 
    return records; 
}

export async function oneSceneID(id) { 
    const records = await pb.collection('SCENE').getOne(id); 
    return records; 
}

export async function artistesParScene(sceneId) { 
    const scene = await pb.collection('SCENE').getOne(sceneId, {
        expand: 'performe'
    });
    
    let artistes = scene.expand?.performe || [];
    if (!Array.isArray(artistes)) {
        artistes = [artistes];
    }
    
    artistes.sort((a, b) => new Date(a.show_artiste) - new Date(b.show_artiste));
    
    return artistes;
}

export async function artistesParNomScene(nomScene) { 
    const scenes = await pb.collection('SCENE').getFullList({
        filter: `nom_scene ~ "${nomScene}"`, 
        expand: 'performe'
    });
    
    if (scenes.length === 0) {
        throw new Error(`Scène "${nomScene}" introuvable`);
    }
    
    let artistes = scenes[0].expand?.performe || [];
    
    if (!Array.isArray(artistes)) {
        artistes = [artistes];
    }
    
    artistes.sort((a, b) => new Date(a.show_artiste) - new Date(b.show_artiste));
    
    return artistes;
}

export async function addNewArtistToScene(artistData, sceneId) {

    const artiste = await pb.collection('ARTISTE').create(artistData);
    
    const scene = await pb.collection('SCENE').getOne(sceneId);
    
    const performe = Array.isArray(scene.performe) 
        ? [...scene.performe, artiste.id] 
        : [artiste.id];
    
    await pb.collection('SCENE').update(sceneId, {
        performe: performe
    });
    
    return artiste;
}

export async function addNewUser(newUser) {
    await pb.collection('users').create(newUser);
}

export async function Userauth(email, password) {
    const authData = await pb.collection('users').authWithPassword(email, password);
    return authData;
}

//*******************************************************************************/

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}