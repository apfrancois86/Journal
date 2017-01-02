(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(vowels, consonants) {
  this.vowels = 0;
  this.consonants = 0;
  this.teaserArray = [];
}

Journal.prototype.vowelCount = function(body) {
  var lowerCaseBody = body.toLowerCase();
  for (var i = 0; i < lowerCaseBody.length; i++) {
    if (lowerCaseBody[i] == 'a' || lowerCaseBody[i] == 'e' || lowerCaseBody[i] == 'i' || lowerCaseBody[i] == 'o' || lowerCaseBody[i] == 'u') {
      this.vowels += 1;
    }
  }
};

Journal.prototype.consonantCount = function(body) {
  var lowerCaseBody = body.toLowerCase();
  for (var i = 0; i < lowerCaseBody.length; i++) {
    if (lowerCaseBody[i] != 'a' && lowerCaseBody[i] != 'e' && lowerCaseBody[i] != 'i' && lowerCaseBody[i] != 'o' && lowerCaseBody[i] != 'u' && lowerCaseBody[i] != " ") {
      this.consonants += 1;
    }
  }
};

Journal.prototype.getTeaser = function(body){
  var bodyArray = body.split(' ');
  for (var i = 0; i < 8; i++) {
    this.teaserArray.push(bodyArray[i]);
  }

}

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $("#entry-form").submit(function(event) {
    event.preventDefault();
    var userEntry = $("#body").val();
    var newEntry = new Journal();
    newEntry.vowelCount(userEntry);
    newEntry.consonantCount(userEntry);
    newEntry.getTeaser(userEntry);
    $(".output").append("vowels: " + newEntry.vowels + ". consonants: " + newEntry.consonants);
    $(".output").append("teaser: " + newEntry.teaserArray);
  });
});


},{"./../js/journal.js":1}]},{},[2]);
