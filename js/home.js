
//Navigation Bar color chnge code
const navg = document.querySelector('.nvgtn')
window.onscroll=function(){
    var top =window.scrollY;
    if(top>=100)
    {
        navg.classList.add('active');
    }
    else
    {
        navg.classList.remove('active');
    }
}

// Linear search Algorithms
var linrArr = [];
function pushDatalnr(){

    var inputText = document.getElementById('linearsrch').value;
   
    linrArr.push(inputText);
    var aval = "";

    for(i=0;i<linrArr.length;i++)
    {
        aval = aval + linrArr[i]+"</br>";
    } 
    document.getElementById('aText').innerHTML = aval;
    
    return linrArr;
}

function linearSearch() {
    
    var inputText1 = document.getElementById("linearsrch1").value;
    for(i=0;i<linrArr.length;i++)
    {
        if(inputText1==linrArr[i])
        {
            i=i+1;
            document.getElementById('lText').innerHTML = i;
            break;
        }
        document.getElementById('lText').innerHTML="Data not found";
    }     
 }
// Linear search Algorithm End

// Binary Search Algorithm

function binarySearch(){
    var inputText1 = document.getElementById('binarysrch').value;
    var low = 0;
    var high = linrArr.length-1;
    var div =(low+high)/2;
    var mid =Math.floor(div);

    while(low<=high && linrArr[mid]!=inputText1)
    {
        if(linrArr[mid]>inputText1)
        high=mid-1;
        else
        low=mid+1;                                                                    
         var mid2=(low+high)/2;
         mid= Math.round(mid2);
    }
    var value=[];
    value = linrArr[mid];
    if(linrArr[mid]==inputText1){
        document.getElementById('bText').innerHTML=mid+1;
    }
    else
    document.getElementById('bText').innerHTML="Data not found";
}

