/**
 * Created by ehsan on 10/06/2017.
 */
//این بخش خروجی را مشخص می کند. یعنی همان جا که اطلاعات خروجی چاپ می شود.
var output=document.getElementById("output");//================output=============
var position_o=document.createElement("DIV");
var width_o=document.createElement("DIV");
var height_o=document.createElement("DIV");
var left_o=document.createElement("DIV");
var top_o=document.createElement("DIV");
var radius_o=document.createElement("DIV");
var color_o=document.createElement("DIV");
var borderLeft_o=document.createElement("DIV");
var borderTop_o=document.createElement("DIV");
var borderRight_o=document.createElement("DIV");
var borderBottom_o=document.createElement("DIV");
var rotate_o=document.createElement("DIV");

output.appendChild(position_o); //عناصر خروجی را در متغیر output قرار می دهد
output.appendChild(width_o);
output.appendChild(height_o);
output.appendChild(left_o);
output.appendChild(top_o);
output.appendChild(radius_o);
output.appendChild(color_o);
output.appendChild(borderLeft_o);
output.appendChild(borderTop_o);
output.appendChild(borderRight_o);
output.appendChild(borderBottom_o);
output.appendChild(rotate_o);