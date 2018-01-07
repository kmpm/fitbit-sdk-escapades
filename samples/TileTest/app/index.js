/*
 * Entry point for the watch app
 */
let document = require('document');

import { dumpObject } from './util';

console.log('App Started');


var tiles;

function updateList() {
  console.log('updateList()')
  //update the text element on each item to show it's id and index in the array.
  tiles.forEach((tile, index) => {
    setText(tile, tile.id + ', index:' + index.toString());
    //console.log('tile:', JSON.stringify(tile));
    //tile.onactivate(handlerFactory(index));
  });
}

function addItem(tileType) {
  console.log('addItem()');
  let tile = list.obtainTile(tileType);
  console.log('expected:' + tileType + ', actual:' + typeof tile + ':' + tile);
  if (tile) {
    dumpObject(tile);
    list.insertTile(tile, 0);
    updateList();
  }
}


function setText(tileElement, text) {
  tileElement.getElementById('sampleText').text = text;
}

function handlerFactory(index) {
  var tile = tiles[index];
  return function onActivate(evt) {
    setText(tile, 'Clicked ' + index.toString());
  }
}

function dumpTile(position) {
  console.log(`dumpTile(${position})`);
  if (typeof list.getTile === 'function') {
    var t = list.getTile(position);
    dumpObject(t);
  }
  else {
    console.log('dump list');
    dumpObject(list);
  }
}

let list = document.getElementById('mylist');   
tiles = list.getElementsByClassName('item');



//update the list after 2 seconds
setTimeout(function() {
  updateList();
  dumpTile(0);
  addItem('tile-list-item');
  addItem('#tile-list-item');
  addItem('TileListItem');
  
  
}, 2000);