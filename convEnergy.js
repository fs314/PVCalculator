function myFunction() {
 var form = document.getElementById("myForm");

 if(document.getElementById("selectedZone").innerHTML == "Zone 2"){

 var array1 = [];
 var array2 = [];
 var orientation = form.elements["Orientation"]
 var Orientation = orientation.value;


 var index = (Orientation/5)*4;
 var index1 = index + 1;
 var index2 = index + 2;
 var index3 = index + 3;

console.log(index);
 var id = document.getElementById("id");

  var myTable = document.getElementById("myTable");
  var tr = myTable.getElementsByTagName("tr");
  var input = document.getElementById("myInput");

  var i;
  for (i = 1; i < tr.length; i++) {
    if(input.value == tr[i].getElementsByTagName("td")[0].textContent ) {

	         for(var r = 1;r < 37; r++) {
              array1 += tr[i].getElementsByTagName("td")[r].innerHTML ;
             }
			     if(array1[index] == 0) {
				 id.innerHTML += array1[index1] + array1[index2] + array1[index3];
         console.log(array1[index1] + array1[index2] + array1[index3]);
				 }
				 else {
				     id.innerHTML += array1[index] + array1[index1] + array1[index2] + array1[index3];

				 }

	}
  }

}
else {
var g = document.getElementById("g");
g.style.background = "yellow";

}
}


function areaFunc(txt) {
   document.getElementById("selectedZone").innerHTML = txt;

}
