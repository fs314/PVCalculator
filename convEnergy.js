if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {

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
        var warning = " ";
        var slope =  parseInt($('#slope').val()) + 2;
        var orientation =  (parseInt($('#orientation').val())/5)+1;
        var percentageSF = 1-(parseInt($('#selectSF').val())/100);
        var kwp =  parseInt($('#kwp').val());
        if (isNaN(slope) || slope < 0 || slope > 92) {
          warning = warning + "\n" + "Warning: please input valid value for slope \n";
        }

        if(kwp>50) {
          warning = warning + "\n" + "Warning: with kWp values above than 50, please contact us for a more detailed analysis \n";
        } else if (isNaN(kwp) || kwp < 0 ) {
          warning = warning + "\n" + "Warning: please input valid value for kWp \n";
        }

        if(orientation>19) {
          warning = warning + "\n" + "Warning: an orientation above 90° is not ideal to install PV, please contact us for a more detailed analysis \n";
        }

        var kk = $('#myTable').find("tr:eq("+slope+")").find("td:eq("+orientation+")").text();
        var result = kwp * kk * percentageSF;

        if(result != 0){
            alert("\n Annual AC output (kWh): " + result + " " + warning); // (INSERT TO HAVE IDEA OF DATA) + "\n " + "slope: " + slope + "orientation: " + orientation + "percentageSF: " + percentageSF + "kwp " + kwp + "kk: " + kk
        } else {
            warning = warning + "\n" + "Warning: we have found an error. Please check you have selected a Zone and that all inputs are valid";
              alert("\n" + warning);
        }

      });
});
}

function areaFunc(txt) {
   document.getElementById("selectedZone").innerHTML = "You selected: " + txt;

}
