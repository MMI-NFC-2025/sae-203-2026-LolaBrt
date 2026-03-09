import * as backend from './backend.mjs'
/*
Trier par date
try { const records = await backend.allArtistsDate(); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e); 
} 

Trier par nom de scène
try { const records = await backend.allScenes(); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e); 
}

Trier par nom d'artiste
try { const records = await backend.allArtists(); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e); 
}  

Afficher les infos d'un artiste à partir de son id
try { const records = await backend.oneArtisteID('ps5wruu20nkjt7s'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
     console.error(e); 
} 
     
Afficher les infos d'une scène à partir de son id
try { const records = await backend.oneSceneID('4efpxy1ejugf88p'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
     console.error(e); 
}
     
Trier tous les artistes se produisant sur une scène donnée par son id, triés par date
try { 
    const records = await backend.artistesParScene('gc68r8iy86w9vg6'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e); 
}

Trier tous les artistes se produisant sur une scène donnée par son nom, triés par date
try { 
    const records = await backend.artistesParNomScene('scene2'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e); 
}

Ajouter un artiste à une scène donnée par son id
try {
    const newArtist = {
        "nom_artiste" : "Lorem Ipsum",
        "genre_music_artiste" : "Folk",
        "descr_artiste" : "oui",
        "img_main_artiste" : "",
        "gallery_artiste" : "",
        "show_artiste" : "2024-07-01T20:00:00Z"
    };

    const artiste = await backend.addNewArtistToScene(newArtist, 'gc68r8iy86w9vg6');
    console.log('Artiste créé et assigné:', artiste);
} catch (e) {
    console.error(e);
}



try {
    const newUser = {
        "email" : "test2@test.fr",
        "password" : "Test12345*",
        "passwordConfirm" : "Test12345*",
    };
    await backend.addNewUser(newUser);
} catch (e) {
    console.error(e);
}

try {    const authData = await backend.Userauth('test2@test.fr', 'Test12345*');
    console.log('Utilisateur authentifié:', authData);
} catch (e) {
    console.error(e);
}

*/
