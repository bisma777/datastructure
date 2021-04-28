// sorting algorithm
// selection sort
var slctnArr = [];
function pushDataslctsort(){

    var inputText = document.getElementById('slctnsort').value;
    slctnArr.push(inputText);
    var sval = "";

    for(i=0;i<slctnArr.length;i++)
    {
        sval = sval + slctnArr[i]+"</br>";
    } 
    document.getElementById('sText').innerHTML = sval;
    
    return slctnArr;
}

function slctsort(slctnArr){
    let n = slctnArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let innerMin = slctnArr[i];
        let innerMinIndex =i;
        for(let j = i+1; j < n; j++){
            if(slctnArr[j] < innerMin) {
                innerMin =slctnArr[j];
                innerMinIndex=j; 
            }
         }
             // Swapping the elements
        
             let tmp = slctnArr[innerMinIndex]; 
             slctnArr[innerMinIndex] = slctnArr[i];
             slctnArr[i] = tmp;
            
    }
    document.getElementById('ssText').innerHTML=slctnArr;
}