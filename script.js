SC.initialize({
  client_id: 'd21c2cb6c2f98a1443f50d4e92599ee1'
});

$(document).ready(function() {
    SC.get('/tracks/293', function(track) {
      SC.oEmbed(track.permalink_url, document.getElementById('player'));
    });
});