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
      creates a new form for roof on clicking the "add roof" button
      */
     var $i = 1;
     $("#addRoof").click(function() {
       if($i<4) {
       var newId = "roof" + $i;
       var newSlope = "slope" + $i
       var newOrient = "orientation" + $i;
       var newSf = "selectSF"  + $i;
       var newkWp = "kwp"  + $i;
       var newCalc = "calculate"  + $i++;

       var clone = $("#roof0").clone().attr("id", newId);
       clone.find("#slope").attr("id", newSlope);
       clone.find("#orientation").attr("id", newOrient);
       clone.find("#selectSF").attr("id", newSf);
       clone.find("#kwp").attr("id", newkWp);
       clone.find("#calculate").attr("id", newCalc);
       $("#calculator").append(clone);
     } else {
       alert("\n this calculator cannot add more than 4 roofs. Please contact us if you have any queries");
     }
     });

      /*
      Calculates Annual AC output(kWh) depending on input zone, slope, orientation and shading factor
      */
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

        //extracts table value based on slope and orientation
        var kk = $('#myTable').find("tr:eq("+slope+")").find("td:eq("+orientation+")").text();
        var result = kwp * kk * percentageSF;

        if(result != 0){
            alert("\n Annual AC output (kWh): " + result + " " + warning); // (INSERT TO HAVE IDEA OF DATA) + "\n " + "slope: " + slope + "orientation: " + orientation + "percentageSF: " + percentageSF + "kwp " + kwp + "kk: " + kk
        } else {
            warning = warning + "\n" + "Warning: we have found an error. Please check you have selected a Zone and that all inputs are valid";
              alert("\n" + warning);
        }
      });

      /*
      TRIAL TRIAL TRIAL TRIAL TRIAL TRIAL
      */
      $('#calculate1').click(function(){
        var warning = " ";
        var slope =  parseInt($('#slope1').val()) + 2;
        var orientation =  (parseInt($('#orientation1').val())/5)+1;
        var percentageSF = 1-(parseInt($('#selectSF1').val())/100);
        var kwp =  parseInt($('#kwp1').val());

        //extract value from zone table selected according to slope and orientation
        var kk = $('#myTable').find("tr:eq("+slope+")").find("td:eq("+orientation+")").text();
        //result Annual AC(kWh):
        var result = kwp * kk * percentageSF;

        //Warnings:
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

        if(result != 0){
            alert("\n Annual AC output (kWh): " + result + " " + warning); // (INSERT TO HAVE IDEA OF DATA) + "\n " + "slope: " + slope + "orientation: " + orientation + "percentageSF: " + percentageSF + "kwp " + kwp + "kk: " + kk
        } else {
            warning = warning + "\n" + "Warning: we have found an error. Please check you have selected a Zone and that all inputs are valid";
              alert("\n" + warning);
        }

      });
});
}


/*
prints selected zone to show user which zone has been clicked on
*/
function areaFunc(txt) {
   document.getElementById("selectedZone").innerHTML = "You selected: " + txt;

}


/*
creates a new form for roof on clicking the "add roof" button
*/
/*
var i =0;

function duplicate() {
  if (i<3) {
  var original = document.getElementById("roof" + i);
  var clone = original.cloneNode(true);
  i++;

  clone.id = "roof" + i;
  clone.getElementsByTagName('select')[0].id = "orientation" + i;
  clone.getElementsByTagName('select')[1].id = "selectSF" + i;
  clone.getElementsByTagName('input')[0].id = "slope" + i;
  clone.getElementsByTagName('input')[1].id = "kwp" + i;
  clone.getElementsByTagName('input')[2].id = "calculate" + i;
  original.parentNode.appendChild(clone);
} else {
  alert("\n this calculator cannot add more than 4 roofs. Please contact us if you have any queries");
}
} */
