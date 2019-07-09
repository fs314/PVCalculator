if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {
$(document).ready(function () {

  /*
  loads the correct kWh/kWp value (Kk) table for each zone depending on the map area that has been clicked
  */
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

      /*
      creates a new form for each roof by clicking the "add roof" button
      */
     var $i = 2;
     $("#addRoof").click(function() {
       if($i<5) {
       var newId = "roof" + $i;
       var newSlope = "slope" + $i
       var newOrient = "orientation" + $i;
       var newSf = "selectSF"  + $i;
       var newkWp = "kwp"  + $i;
       $i++;

       var clone = $("#roof1").clone().attr("id", newId);
       clone.find("#slope1").attr("id", newSlope);
       clone.find("#orientation1").attr("id", newOrient);
       clone.find("#selectSF1").attr("id", newSf);
       clone.find("#kwp1").attr("id", newkWp);
       $("#calculator").append(clone);
     } else {
       alert("\n this calculator cannot add more than 4 roofs. Please contact us if you have any queries");
     }
     });

      /*
      Calculates Annual AC output(kWh) for each roof depending on input zone, slope, orientation and shading factor
      */
     $('#calculate').click(function(){
       var $msg = "\n ";
       for (var $a=1; $a<=$("#calculator").children().length; $a++) {
         var $roofId = "roof" + $a;
         var $newSlope = "#slope" + $a;
         var $newOrient = "#orientation" + $a;
         var $newSf = "#selectSF" + $a;
         var $newkWp = "#kwp" + $a;
         var $roof = $("#calculator").find($roofId);
         var warning = "\n Warning: we found the following errors for " + $roofId + ": ";

          var slope =  parseInt($($newSlope).val()) + 2;
          var orientation =  (parseInt($($newOrient).val())/5)+1;
          var percentageSF = 1-(parseInt($($newSf).val())/100);
          var kwp =  parseInt($($newkWp).val());

          //extracts table value based on slope and orientation
          var kk = $('#myTable').find("tr:eq("+slope+")").find("td:eq("+orientation+")").text();
          var result = kwp * kk * percentageSF;

          //Warnings:
          if (isNaN(slope) || slope < 0 || slope > 92) {
            warning = warning + "\n" + " - please input valid value for slope \n";
          }

          if(kwp>50) {
            warning = warning + "\n" + " - with kWp values above than 50, please contact us for a more detailed analysis \n";
          } else if (isNaN(kwp) || kwp < 0 ) {
            warning = warning + "\n" + " - please input valid value for kWp \n";
          }

          if(orientation>19) {
            warning = warning + "\n" + " - an orientation above 90° is not ideal to install PV, please contact us for a more detailed analysis \n";
          }

          if(result != 0){
            $msg = $msg + "\n Annual AC output (kWh) for " + $roofId + " : " + result + " \n";
          } else {
              warning = warning + "\n" + " - we have found an error. Please check you have selected a Zone and that all inputs are valid";
          }
          $msg = $msg + warning;
       }
       alert($msg);
      });
});
}


/*
prints selected zone to show user which zone has been clicked on
*/
function areaFunc(txt) {
   document.getElementById("selectedZone").innerHTML = "You selected: " + txt;

}
