/* main.js */

// no need to 'use strict' as it is implied in modules
// look up 'use strict' :) 

let $ = (selector) => document.querySelector(selector);


function _updateName() {
  const name = $('#name-input').value;
  $('#name-info').innerHTML = `<strong>Author:</strong>  ${name}`;
}

function _updateMajor() {
  const major = $('#major-input').value;
  $('#major-info').innerHTML = `<strong>Major:</strong>  ${major}`;
}

function update(){
  _updateName();
  _updateMajor();
}

export {update};