console.log('***** Music Collection *****')

let collection = [];

function addToCollection ( title, artist, yearPublished) {
    //console.log('Add this to collection:', addToCollection);
    const newReccord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(newReccord);
    return newReccord;
}

addToCollection ('My Girl', 'Michael Jackson', 1986);

// console.log(collection);