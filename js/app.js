//Creating the variables
var selectFavoriteAlbum = document.getElementById('favorite_album');
var arrayOfOptionValues = [];



//Creating a for loop in order to loop through the array
for (var i = 1; i < selectFavoriteAlbum.length; i++) {
  //each option values has to be in lower case
  //the array is incremented with all the option values
  arrayOfOptionValues.push(selectFavoriteAlbum[i].value.toLowerCase());
}

//The array is sorted alphabetically
arrayOfOptionValues.sort();
