/**
 * Created by ehsan on 10/06/2017.
 */

/* this is css-engine's main javascript file. */
var inner=document.getElementById("inner").style; //inner is: the inner rectangle ..
var main=document.getElementById("main").style;  //main is : the bog rectangle ..now : the red rectangle.
var tl_corner=document.getElementById("tl_corner").style;
var tr_corner=document.getElementById("tr_corner").style;
var br_corner=document.getElementById("br_corner").style;
var bl_corner=document.getElementById("bl_corner").style;
var x1=50,x2=50,x3=50,x4=50;
var y1=25,y2=25,y3=25,y4=25;


var z=[]; // یک آرایه و متغیر سراسری است که فعلا نمیدونم دقیقا چکار می کند


var main_div=document.getElementById("main");
var tlc=document.getElementById("tl_corner");  //tlc yani: top left corner
var trc=document.getElementById("tr_corner");
var brc=document.getElementById("br_corner");
var blc=document.getElementById("bl_corner");


var lx1,ly1,lx2,ly2,lx3,ly3,lx4,ly4;


//مقدار پیش فرض برای عرض و ارتفاع مستطیل اولیه است
document.form1.elements[0].defaultValue="200px"; //meghdare pishfarze width , height
document.form1.elements[1].defaultValue="200px";//meghdare pishfarze width , height


z[0]="20px 40px 60px 80px / 30px 50px 70px 90px"; // start of the border radius  --z is global ..
inner.borderRadius=z; //n8(60,50,80,50,30,42,65,25);
inner.opacity="0.65";

var rect,dif_x,dif_y;
var click_hand=false;  //click hand haman dasti hast ke mikhaim vaghti roosh click shod betoonim main div ro harkat bedim
var click_main_div=false; //click_main_div baraye ine ke befahmin rooye main div click shode ya na ...
var hand=document.getElementById("hand"); //hand ye div hast ke alamate dast rooshe ..



var groupDIV=document.createElement("DIV");//yek div ijad mikonim
groupDIV.setAttribute("id","group"); //id in div ro barabar ba group gharar midim
document.body.appendChild(groupDIV); //in div ro be body ezafe mikonim


// اندیس های این آرایه یک مقدار بولین هستند. که مشخص می کنند آیا یک مستطیل فوکس شده است یا نه.
var focus0=[];



var n=0;
var x=0;//x is id of new main div m inner div
var z=[];//z is last coordinate

//متغیر E مشخص می کند که آیا بر روی یک عنصر ایجاد شده کلیک کرده ایم یا می خواهیم یک عنصر جدید ایجاد کنیم
//مقدار false یعنی می خواهیم یک عنصر جدید ایجاد کنیم
var E=false;


var group=document.getElementById("group");