var input_size = document.querySelector("#a_size");
var array_size = parseInt(input_size.value);
var input_speed = document.querySelector("#speed");
var array_speed = parseInt(input_speed.value);
var generate = document.querySelector(".shuffle");


generate.addEventListener('click', newarray);
input_size.addEventListener('input', updatearray);5

var bars = [];
var bar_size = [];
var visual = document.querySelector(".visuals");
visual.style = "flex:column;";
var margin_size;

function newarray() {
    visual.innerHTML = "";
    for (var i = 0; i < array_size; i++){
        bar_size[i] = Math.floor(Math.random() * (75 - 10)) + 10;
        bars[i] = document.createElement("div");
         margin_size = 0.2;
        bars[i].style = "margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (bar_size[i]) + "%;";
        visual.appendChild(bars[i]);
        
    }

}
function updatearray() {
    array_size = input_size.value;
    newarray();
}
window.onload = updatearray();

var btns = document.querySelectorAll(".sorting_techniques button");

for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", sort);
}

function sort() {
    console.log(this.innerHTML);
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble_Sort();
                        break;
        case "Selection Sort":Selection_Sort();
                        break;
        case "Insertion Sort":Insertion_Sort();
                        break;
        case "Merge Sort":Merge_Sort();
                        break;
        // case "Quick Sort":Quick_Sort();
        //                 break;
    }

}

var speed=50;

input_speed.addEventListener("input",vis_speed);

function vis_speed()
{
    array_speed=input_speed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=5;
                break;
        case 2: speed=10;
                break;
        case 3: speed=20;
                break;
        case 4: speed=50;
                break;
        case 5: speed=200;
                break;
    }
    
    delay_time=5000/(Math.floor(array_size/10)*speed);
}
var delay_time = 5000 / (Math.floor(array_size / 10) * speed);

var c_delay=0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}
