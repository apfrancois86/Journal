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
