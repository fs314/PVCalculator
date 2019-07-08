
function areaFunc(txt) {
   document.getElementById("selectedZone").innerHTML = txt;

}

$(document).ready(function () {


      $('#zone1').click(function(){
          $('#table').load( './zones/zone1.html' );
      });
      $('#zone2').click(function(){
          $('#table').load( './zones/zone2.html' );
      });
      $('#zone3').click(function(){
          $('#table').load( './zones/zone3.html' );
      });
      $('#zone4').click(function(){
          $('#table').load( './zones/zone4.html' );
      });
      $('#zone5E').click(function(){
          $('#table').load( './zones/zone5E.html' );
      });
      $('#zone6').click(function(){
          $('#table').load( './zones/zone6.html' );
      });
      $('#zone7E').click(function(){
          $('#table').load( './zones/zone7E.html' );
      });
      $('#zone8E').click(function(){
          $('#table').load( './zones/zone8E.html' );
      });
      $('#zone9E').click(function(){
          $('#table').load( './zones/zone9E.html' );
      });
      $('#zone10').click(function(){
          $('#table').load( './zones/zone10.html' );
      });
      $('#zone11').click(function(){
          $('#table').load( './zones/zone11.html' );
      });
      $('#zone12').click(function(){
          $('#table').load( './zones/zone12.html' );
      });
      $('#zone13').click(function(){
          $('#table').load( './zones/zone13.html' );
      });
      $('#zone14').click(function(){
          $('#table').load( './zones/zone14.html' );
      });
      $('#zone15').click(function(){
          $('#table').load( './zones/zone15.html' );
      });
      $('#zone16').click(function(){
          $('#table').load( './zones/zone16.html' );
      });
      $('#zone17').click(function(){
          $('#table').load( './zones/zone17.html' );
      });
      $('#zone18').click(function(){
          $('#table').load( './zones/zone18.html' );
      });
      $('#zone19').click(function(){
          $('#table').load( './zones/zone19.html' );
      });
      $('#zone20').click(function(){
          $('#table').load( './zones/zone20.html' );
      });
      $('#zone21').click(function(){
          $('#table').load( './zones/zone21.html' );
      });
      $('#zone5W').click(function(){
          $('#table').load( './zones/zone5W.html' );
      });
      $('#zone7W').click(function(){
          $('#table').load( './zones/zone7W.html' );
      });
      $('#zone8S').click(function(){
          $('#table').load( './zones/zone8S.html' );
      });
      $('#zone9S').click(function(){
          $('#table').load( './zones/zone9S.html' );
      });

      $('#calculate').click(function(){
        var warning = "7";
        var slope =  parseInt($('#slope').val()) + 2;
        var orientation =  (parseInt($('#orientation').val())/5)+1;
        if(orientation>19) {
          warning = "orientation is not ideal to install PV, please contact us for a more detailed analysis"
        }
        var result = $('#myTable').find("tr:eq("+slope+")").find("td:eq("+orientation+")").text();
        alert(result + " any warning " + warning);
      });
});
