(function(mw, $){
  var item = window.mw.config.values.wgRelevantPageName;
  var query = 'https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%3B%0A%28%0A%20%20node%5B"wikidata"%3D"' + item + '"%5D%3B%0A%20%20way%5B"wikidata"%3D"' + item + '"%5D%3B%0A%20%20relation%5B"wikidata"%3D"' + item + '"%5D%3B%0A%29%3B%0Aout%20body%3B%0A>%3B%0Aout%20skel%20qt%3B';
  $.ajax({
    url: query,
  }).done(function(result) {
    if (result.elements[0]) {
      var id = result.elements[0].id;
      var type = result.elements[0].type;

      var linkElement = '<li><a href="https://www.openstreetmap.org/' + type + '/' + id + '">OpenStreetMap Element</a></li>';

      var navList = document.getElementById('p-tb').lastElementChild.firstElementChild;
      navList.innerHTML += linkElement;
    }
  });
})(mediaWiki, jQuery);
