// alert("working");

$(function(){

  var PULSEBALL = new PulseBall();
  var rankingsJson = [
{ "team": { "name": "Australia", "id": 32 }, "pos": 1, "pts": 54.23 },
{ "team": { "name": "New Zealand", "id": 62 }, "pos": 2, "pts": 54.00 }, 
{ "team": { "name": "France", "id": 2 }, "pos": 3, "pts": 52.95 },
{ "team": { "name": "England", "id": 1 }, "pos": 4, "pts": 52.32 },
{ "team": { "name": "Romania", "id": 24 }, "pos": 5, "pts": 43.50 }
];

  var appendNewRankingTable = function(){
    PULSEBALL.rankingsTable.forEach(function(object){
      $('#squares').append('<tr><td>' + object.team.name + '</td>' + '<td>' + object.pts.toFixed(2) + '</td></tr>');
    });
  };

  PULSEBALL.init(rankingsJson); 
  appendNewRankingTable();

  $( ".addMatchBTN" ).click(function() {
  alert( "Result" );
});
  
});