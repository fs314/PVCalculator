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
      creates a new form for each roof by clicking the "add roof" button (up to 4 roofs only)
      */
     var $i = 2;
     $("#addRoof").click(function() {
       if($i<5) {
       var newId = "roof" + $i;
       var newSlope = "slope" + $i
       var newOrient = "orientation" + $i;
       var newSf = "selectSF"  + $i;
       var newkWp = "kwp"  + $i;
       var newRoofName = "ROOF " + $i;
       $i++;

       var clone = $("#roof1").clone().attr("id", "roof" + $i);
       clone.find("#slope1").attr("id", newSlope);
       clone.find("#orientation1").attr("id", newOrient);
       clone.find("#selectSF1").attr("id", newSf);
       clone.find("#kwp1").attr("id", newkWp);

       clone.find('input[name=isslope1]').attr("name", "is" + newSlope);
       clone.find('input[name=isorientation1]').attr("name", "is" + newOrient);
       clone.find('input[name=isselectSF1]').attr("name", "is" + newSf);
       clone.find('input[name=iskwp1]').attr("name", "is" + newkWp);
       clone.find("#roofName1").text(newRoofName);

       $("#forms").append(clone);
     } else {
       alert("\n this calculator cannot add more than 4 roofs. Please contact us if you have any queries");
     }
     });

     /*
     deletes the last created roof form by clicking on "delete roof". Does not work on first form.
     */
     $("#deleteRoof").click(function() {
      if($i>2) {
        $('#forms').find('.roofs').not(':first').last().remove();
        $i--;
     } else {
       alert("\n there must be at least one roof for this calculator to work");
     }
     });

      /*
      sends an alert box containing the results of the calculation on click of the button "submit"
      */
     $('#calculate').click(function(){
        var $msg = getResults();
        alert($msg);
      });


      /*
      sends an alert box containing the results of the calculation on click of the button "submit"
      */
      $('#calculation').click(function(){
        //deletes results of previous calculations
        $(".result").empty();
        $(".warning").empty();

        //reveals div on clikc
        $('#modal').toggle('show');

        var results = getResults();
        for(var i=0; i<results.length; i++) {
            $( "#summary" ).append(results[i]);
        }
       });

       /*
       Allows user to print the results of the calculations
       */
       $("#printable").on('click',function(){
         printData();
       });

    /* returns message containig all inputs' errors or warning encountered per roof */
      $(function() {
        var amap = $('.map').maphilight().parent().addClass('center-map');
      });
});

/*
Calculates and returns values for Annual AC output(kWh and cost(£) for each roof depending on input zone, slope, orientation and shading factor
*/
function getResults() {
  var $msg = " ";
  var totalAC = 0;
  var totalKWP = 0;
  var costPerRoof = 0;
  var co2offset = 0;
  var results = [];

  for (var $a=1; $a<=$("#forms").children().length; $a++) {     //Loops over every roof (form completed) to extract information and calculate annual AC per roof

    var roofId = "roof" + $a;
    var slope = getSlope($a);
    var orientation = getOrientation($a);
    var shadingFactor = getShadingFactor($a);
    var kwp = getkWp($a);

    var kk = calcKk(slope, orientation);
    var annualAC = calcAC(shadingFactor, kwp, kk);
    totalAC = totalAC + annualAC;

    totalKWP = totalKWP + kwp;
    costPerRoof = costPerRoof + 800;

    var warning = getWarnings(slope, orientation, kwp, roofId, annualAC);
    $result = "\n Annual AC output (kWh) for " + roofId + " : " + annualAC + " \n";
    $msg = $msg + $result + warning; // final calculation output per single roof

    results.push("<p class=\"result\">" + $result +" </p>" );
    results.push("<p class=\"warning\">" + warning +" </p>");
  }  // loop ends here

  /* Cost range is calculated by inserting the sum of the kilowatt-peak value of each roof
    into the below equations (estimating lower and upper bound of range respectively) and adding an extra £800 per roof. */
  var lowest  = Math.round(2.4329*Math.pow(totalKWP,2) + 819.87*totalKWP + 1404.4) + costPerRoof;
  var highest = Math.round(1.2785*Math.pow(totalKWP,2) + 951.68*totalKWP + 2510.8) + costPerRoof;

  co2Offset = Math.round(totalAC * 0.304);

  /* stores in array each result of the calculations including annual AC for each roof, the total annual AC for the system, an overall cost range for the installation
  as well as, should there be any, warnings regarding user input mistakes or input values restrictions */
  results.push("<p class=\"result\">  ----------------------------------------- </p><br />");
  results.push("<p class=\"result\"> Total annual AC output for system: " + Math.round(totalAC) + "</p>");
  results.push("<p class=\"result\"> CO2 offset: " + co2Offset + "Kg </p>");
  results.push("<p class=\"result\"> range of costs: £" + lowest + " - £" + highest + "</p>");

  return results;
}

/* returns message containig all inputs' errors or warning encountered per roof */
function getWarnings(slope, orientation, kwp, roofId, annualAC) {
  var warning = " ";
  var alert = "\n Warning: we found the following errors for " + roofId + ": ";
  var error = false;

  if (isNaN(slope) || slope < 0 || slope > 92) {
    warning = warning + "\n" + " - please input valid value for slope \n";
    error = true;
  }

  if(kwp>50) {
    warning = warning + "\n" + " - with kWp values above than 50, please contact us for a more detailed analysis \n";
    error = true;
  } else if (isNaN(kwp) ||  kwp < 0 ) {
    warning = warning + "\n" + " - please input valid value for kWp \n";
    error = true;
  }

 if(orientation>19) {
    warning = warning + "\n" + " - an orientation above 90° is not ideal to install PV, please contact us for a more detailed analysis \n";
    error = true;
  }

 if(annualAC == 0){
     warning = warning + "\n" + " - we have found an error. Please check you have selected a Zone and that all inputs are valid";
     error = true;
  }

  if (error == true) {
    warning = alert + warning;
  }
return warning;
}

/* returns the kWp's value inputed by the user */
function getkWp($a) {
  var newkWp = "#kwp" + $a;
  var kwp =  parseInt($(newkWp).val());
  return kwp;
}

/* returns the shading factor's value inputed by the user */
function getShadingFactor($a){
  var newSf = "#selectSF" + $a;
  var shadingFactor = 1-(parseInt($(newSf).val())/100);
  return shadingFactor;
}

/* returns the index value of the orientation value inputed by the user according to the sap region table  */
function getOrientation($a) {
   var newOrient = "#orientation" + $a;
   var orientation =  (parseInt($(newOrient).val())/5)+1;
   return orientation;
}
/* returns the index value of the slope value inputed by the user according to the sap region table  */
function getSlope($a) {
  var newSlope = "#slope" + $a;
  var slope =  parseInt($(newSlope).val()) + 2;
  return slope;
}

/* extracts the correct Kk value from sap regions table depending on the slope and orientation */
function calcKk(slope, orientation) {
     var kk = $('#myTable').find("tr:eq("+slope+")").find("td:eq("+orientation+")").text(); //extracts table value based on slope and orientation
     return kk;
   }

/* returns the annual AC value of one roof */
function calcAC(shadingFactor, kwp, kk) {
   var annualAC = kwp * kk * shadingFactor;
   return annualAC;
}

/* populates orientation's dropdown list dynamically */
for (var ori=0; ori <=175; ori += 5) {
   var o = new Option(ori, ori); //option text, value
   $(o).html(ori + "°");
   $("#orientation1").append(o);
}

/* populates shading factor's dropdown list dynamically */
for(var sf=0; sf <101; sf ++) {
  var o = new Option(sf, sf);
  $(o).html(sf + "%");
  $("#selectSF1").append(o);
  }

} //end of window.onload


/*
prints selected zone to show user which zone has been clicked on
*/
function areaFunc(txt) {
   document.getElementById("selectedZone").innerHTML = "You selected: " + txt;
   document.getElementById("selectedZone").style.color = 'red';
}

/* Get the <span> element that closes the modal */
var span = document.getElementsByClassName("close")[0];

/* When the user clicks on <span> (x), close the modal */
function closeModal() {
  modal.style.display = "none";
}

/* When the user clicks anywhere outside of the modal, close it */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
Allows user to print content of alert box containing the result of the calculations
*/
function printData()
{
   var divToPrint=document.getElementById("modal");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}
