import PocketBase from 'pocketbase'; 
const pb = new PocketBase('https://sae203-2026.lola-brouart.fr');

export async function allArtistsDate() { 
    const records = await pb.collection('ARTISTE').getFullList({
        sort: 'show_artiste',
        expand: 'performe'
    }); 
    return records; 
}

export async function allArtists() { 
    const records = await pb.collection('ARTISTE').getFullList({
        sort: 'nom_artiste',
        expand: 'performe'
    }); 
    return records; 
}

export async function oneArtisteID(id) { 
  const records = await pb.collection('ARTISTE').getOne(id, {
    expand: "performe"
  });
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
  const artistes = await pb.collection("ARTISTE").getFullList({
    filter: `performe = "${sceneId}"`,
    sort: "show_artiste",
    expand: "performe",
  });
  return artistes;
}

export async function artistesParNomScene(nomScene) {
  const scenes = await pb.collection("SCENE").getFullList({
    filter: `nom_scene ~ "${nomScene}"`,
    expand: "performe",
  });

  if (scenes.length === 0) {
    throw new Error(`Scène "${nomScene}" introuvable`);
  }

  return artistesParScene(scenes[0].id);
}

export async function addNewArtistToScene(artistData, sceneId) {
  const artiste = await pb.collection("ARTISTE").create({
    ...artistData,
    performe: sceneId,
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

export async function artistesParGenre(genre) {
  return await pb.collection("ARTISTE").getFullList({
    filter: `genre_music_artiste = "${genre}"`,
    sort: "show_artiste",
    expand: "performe",
  });
}

export async function artistesParDate(dateISO) {
  // dateISO attendu: "2026-08-28"
  const debut = `${dateISO} 00:00:00.000Z`;

  const d = new Date(`${dateISO}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  const nextDate = d.toISOString().substring(0, 10);
  const fin = `${nextDate} 00:00:00.000Z`;

  return await pb.collection("ARTISTE").getFullList({
    filter: `show_artiste >= "${debut}" && show_artiste < "${fin}"`,
    sort: "show_artiste",
    expand: "performe",
  });
}