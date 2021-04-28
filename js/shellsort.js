// sorting algorithm
//shell sort
var shellArr = [];
function pushDataShellsort(){

    var inputText = document.getElementById('shelltsort').value;
    shellArr.push(inputText);
    var ival = "";

    for(i=0;i<shellArr.length;i++)
    {
        ival = ival + shellArr[i]+"</br>";
    } 
    document.getElementById('shlText').innerHTML = ival;
    
}

function shellSort(shellArr) {
    
    for( var increment=shellArr.length/2;increment>0;increment /=2) {
        for (i = increment; i < shellArr.length; i++) {
            var j = i;
            var temp = shellArr[i];
            while (j >= increment && shellArr[j-increment] > temp) {
                shellArr[j] = shellArr[j-increment];
                j = j - increment;
            }
    
            shellArr[j] = temp;
        }
    
       
    }
    document.getElementById('shllText').innerHTML = shellArr;
}

