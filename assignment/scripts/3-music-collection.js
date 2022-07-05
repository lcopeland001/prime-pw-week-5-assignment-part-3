console.log('***** Music Collection *****')

let collection = [];

function addToCollection ( title, artist, yearPublished) {
    //console.log('Add this to collection:', addToCollection(title, artist, yearPublished));
    const newReccord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(newReccord);
    return newReccord;
}

addToCollection ('My Girl', 'MJ', 1986);
addToCollection ('Sage', 'Fargo', 1979);
addToCollection ('Dakoda', 'Jim', 1986);
addToCollection ('She is', 'Jim', 1986);
addToCollection ('Grapes', 'Shear', 1954);
addToCollection ('French', 'Kobe', 1986);

console.log(collection);

function showCollection(array){
    console.log(array.length);
    for (let record of array) {
        console.log(record.title, 'by', record.artist, ', published in', record.yearPublished);
    }
}

showCollection(collection);

function findByArtist(artist){
    console.log('in findByArtist:', artist);
    let recordByArtist=[ ];
    for (record of collection) {
        if (record.artist === artist){
            recordByArtist.push(record);
        }
    }
    return recordByArtist;
}

console.log(findByArtist('MJ'));
