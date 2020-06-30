/* main-es5.js */

// look this up :)
'use strict';

function updateName() {
    var name = document.getElementById('name-input').value;
    document.getElementById('author-info').innerHTML = '<strong>Author:</strong> ' + name;
  }
  
  function updateMajor() {
    var name = document.getElementById('major-input').value;
    document.getElementById('major-info').innerHTML = '<strong>Major:</strong> ' + name;
  }
  
function update(){
    updateName();
    updateMajor();
  }