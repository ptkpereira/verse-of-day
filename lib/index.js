const fetch = require('node-fetch');
const translate = require('translate');
translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20190911T115603Z.e96c4c81761c3568.6ce9d5cceb22f7f8234be896a52e8f1ae4a5e207';

const verse = function () {
  fetch('https://developers.youversionapi.com/1.0/verse_of_the_day/2?version_id=1', {
    headers: {
      'X-YouVersion-Developer-Token': '2Nz1E_pPKyogGWQNVoDw9EcebAM',
      Accept: 'application/json',
      'Accept-Language': 'en',
    }
  })
    .then((result) => result.json())
    .then((json) => {
      const verse = json.verse.text;
      console.log(verse)
      translate(verse, { to: 'pt' }).then(text => {
        console.log(text);
        console.log(json.verse.human_reference)
        console.log('https://www.bible.com/bible/1930/' + json.verse.url.substring(30, json.verse.url.length));
      });
    })
};

exports.verse = verse;