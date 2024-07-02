console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];


function addToCollection(collection, title, artist, yearPublished){
  let myAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    
  } 
  collection.push(myAlbum);
  
    return myAlbum
}

console.log(addToCollection(myCollection, 'Bubble Gum', 'New Jeans', 2024));
console.log(addToCollection(myCollection, 'Pluto Projector', 'Rex Orange County', 2019));
console.log(addToCollection(myCollection, 'Intro', 'Ariana Grande', 2024));
console.log(addToCollection(myCollection, 'August', 'Taylor Swift', 2020));
console.log(addToCollection(myCollection, 'Strange', 'Celeste', 2019));
console.log(addToCollection(myCollection, 'Birds Of A Feather', 'Billie Ellish', 2024));

console.log('myAlbum', myCollection);




function showCollection(collection) {
  for (let items of collection) {
    console.log(`${items.title} by ${items.artist}, published in ${items.yearPublished}`);
  }
  

}

(showCollection(myCollection));


function findByArtist(collection, artist){
  let matchedArtists = [];
  for (let singer of collection) {
   if (singer.artist === artist)
    matchedArtists.push(singer);
  }
  return matchedArtists;

  
}

console.log(findByArtist(myCollection, 'Taylor Swift'));
console.log(findByArtist(myCollection, 'retretretgfdgerte'));
console.log(findByArtist(myCollection, 'Celeste'));




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
