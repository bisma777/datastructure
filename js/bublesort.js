// sorting algorithm
// buble sort

var bblArr = [];
function pushDataBblsort(){

    var inputText = document.getElementById('bblsort').value;
    bblArr.push(inputText);
    var bval = "";

    for(i=0;i<bblArr.length;i++)
    {
        bval = bval + bblArr[i]+"</br>";
    } 
    document.getElementById('bText').innerHTML = bval;
    
    return bblArr;
}
function bubblesort(bblArr) {
    var i=j=v=0;
    var n =bblArr.length;
    for(i=1;i<n;i++){
        v=bblArr[i];
        j=i;
        while(j>0 && bblArr[j-1]>v) {
            bblArr[j]=bblArr[j-1];
            j--;
        };
        bblArr[j]=v;
        
    }
    document.getElementById('bbText').innerHTML= bblArr;
};
    