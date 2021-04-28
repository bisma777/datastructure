// sorting algorithm
// Insertion sort
var insrtnArr = [];
function pushDataInsrtnsort(){

    var inputText = document.getElementById('insrtsort').value;
    insrtnArr.push(inputText);
    var ival = "";

    for(i=0;i<insrtnArr.length;i++)
    {
        ival = ival + insrtnArr[i]+"</br>";
    } 
    document.getElementById('iText').innerHTML = ival;
    
    return insrtnArr;
}
function insertionSort(insrtnArr) {
    var len = insrtnArr.length,
        current;
    
    for ( var i = 1; i < len; i++ ) { 
      current = insrtnArr[i];
      
      for ( var j = i - 1; j > -1 && insrtnArr[j] > current; j-- ) {
        insrtnArr[j+1] = insrtnArr[j];
      }
      
      insrtnArr[j+1] = current;
      
    }
    
    document.getElementById('inText').innerHTML=insrtnArr;
  }
