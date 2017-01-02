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

