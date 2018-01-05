/*
 * Entry point for the watch app
 */
let document = require('document');

console.log('App Started');


function renumber() {
  console.log('renumber');
  let list = document.getElementById('mylist');
  
  if (!list) {
    console.log('no list found');
    return;
  }
  
  let tiles = list.getElementsByClassName('item');

  tiles.forEach((tile, i) => {
    tile.getElementById('sampleText').text = tile.id + '-jox-' + i.toString();
  });
}

renumber();