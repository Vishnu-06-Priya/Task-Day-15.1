
function create(tag,attr1,value1,attr2,value2,attr3,value3,attr4,value4){

    var ele=document.createElement(tag);

    ele.setAttribute(attr1,value1);
    ele.setAttribute(attr2,value2);
    ele.setAttribute(attr3,value3);
    ele.setAttribute(attr4,value4);
    return ele;
    
}

var input1 = create("input","class","button number","type","button","value","7","onclick","btnClick(value)");
var input2 = create("input","class","button number","type","button","value","8","onclick","btnClick(value)");
var input3 = create("input","class","button number","type","button","value","9","onclick","btnClick(value)");
var input4 = create("input","class","button operator","type","button","value","/","onclick","btnClick(value)");

var input5 = create("input","class","button number","type","button","value","6","onclick","btnClick(value)");
var input6 = create("input","class","button number","type","button","value","5","onclick","btnClick(value)");
var input7 = create("input","class","button number","type","button","value","4","onclick","btnClick(value)");
var input8 = create("input","class","button operator","type","button","value","*","onclick","btnClick(value)");

var input9 = create("input","class","button number","type","button","value","3","onclick","btnClick(value)");
var input10 = create("input","class","button number","type","button","value","2","onclick","btnClick(value)");
var input11 = create("input","class","button number","type","button","value","1","onclick","btnClick(value)");
var input12 = create("input","class","button operator","type","button","value","+","onclick","btnClick(value)");

var input13 = create("input","class","button clear","type","button","value","C","onclick","clearscreen()");
var input14 = create("input","class","button number","type","button","value","0","onclick","btnClick(value)");
var input15= create("input","class","button result","type","button","value","=","onclick","findresult()");
var input16= create("input","class","button operator","type","button","value","-","onclick","btnClick(value)");

var input17 = create("input","class","button operator","type","button","value","←","onclick","delscreen()");

var h1=document.createElement("h1");
h1.innerHTML="CALCULATOR";

var div=document.createElement("div");
div.setAttribute("class","container");

var p=document.createElement("p");
p.innerHTML="VIP Calci";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","screen");

var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
var br4 = document.createElement("br");

// input.append(br1);
// input4.append(br2);
// input8.append(br3);
// input12.append(br4);

div.append(p,input17,input,br1,input1,input2,input3,input4,br2,input5,input6,input7,input8,br3,input9,input10,input11,input12,br4,input13,input14,input15,input16);
document.body.append(h1,div);

var screen = document.getElementById("screen");

function btnClick(value){
    screen.value += value;
}

function clearscreen(){
    screen.value = " ";
}
function delscreen(){
    screen.value = screen.value.slice(0,-1);
}

function findresult(){

    try{
    var result = eval(screen.value)
    screen.value = result;
}
catch{
    alert("Only For Numbers");
}
}