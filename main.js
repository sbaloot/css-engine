/**
 * Created by ehsan on 05/06/2017.
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


function number_to_px(a){
    var b=a.toString();
    var c=b.concat("px"); //خیلی راحت می شد مقدار px رو بهش اضافه کرد
    return c;
}
function px_to_number(p){  //ابتدا رشته ی p را بگیر
    p=p.substring(0,p.length-2);//دو حرف آخر این رشته را حذف کن یعنی مقدار px را حذف کن
    var n=Number(p); //این رشته رو به عدد تبدیل کن
    return n; //حالا عدد رو برگردان

}
//**************************ok buttons********************************************************
document.getElementById("ok_width").onclick=function(){set_width();}; //ok baraye set kardane width va heighte rectangleha
function set_width(inner,main){  //the set width function sets the width of the main rectangle
    var inner=document.getElementById('inner'+n).style;
    var main=document.getElementById('main'+n).style;

    var width=document.form1.elements[0].value;
    inner.width=px_to_number(width);
    var height=document.form1.elements[1].value;
    inner.height=px_to_number(height);
    set_pro(n,width,height,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
    main.width=inner.width;
    main.height=inner.height;
}
document.getElementById("color_button").onclick=function(){  //in ghesmat baraye set kardene range inner ast.
    var inner=document.getElementById('inner'+n).style;
    var color=document.border_form.input_color.value;
    inner.backgroundColor=color;
    set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,color);
};

//***************************************************shorooe taksire main div *********************************
var groupDIV=document.createElement("DIV");//yek div ijad mikonim
groupDIV.setAttribute("id","group"); //id in div ro barabar ba group gharar midim
document.body.appendChild(groupDIV); //in div ro be body ezafe mikonim
var focus0=[]; //yek araye be name focus0 misazim
var n=0;
var x=0;//x is id of new main div m inner div
var z=[];//z is last coordinate
var E=false; //e moshakhas mikone ke aya rooye yek onsore ijad shode click kardim ya mi khaym ye onsore jadid basazim
var group=document.getElementById("group");
document.getElementById("new_rect").onclick=function(){
    new_array(24); //tebe`e new_array ro seda mizane  va yek arayeye jadid ro dorost mikone
    set_pro(x,200,200,false,false,false,false,1,1,1,1,1,1,1,1,true,true,true,true,0,true,false,"#CCFF33","hidden","");
    E=false;
    set_width0();


};

function set_width0(focus,n){  //modern set width   *******new**********//////////////
    if(E==false)
    {

        z[x]="10px 20px 30px 40px / 50px 60px 70px 80px";
        focus0[focus0.length]=false;
        var div0=document.createElement("DIV");
        var div1=document.createElement("DIV");
        var div2=document.createElement("DIV");
        var div3=document.createElement("DIV");
        var div4=document.createElement("DIV");
        var div5=document.createElement("DIV");
        console.log("x is:"+x);
        div0.setAttribute("id",'main'+x);
        div1.setAttribute("id",'inner'+x);
        div2.setAttribute("id",'tl_corner'+x);
        div3.setAttribute("id",'tr_corner'+x);
        div4.setAttribute("id",'br_corner'+x);
        div5.setAttribute("id",'bl_corner'+x);

        div0.appendChild(div1);
        div0.appendChild(div2);
        div0.appendChild(div3);
        div0.appendChild(div4);
        div0.appendChild(div5);
        group.appendChild(div0);


        tl_corner0=document.getElementById('tl_corner'+x).style;
        tr_corner0=document.getElementById('tr_corner'+x).style;
        br_corner0=document.getElementById('br_corner'+x).style;
        bl_corner0=document.getElementById('bl_corner'+x).style;

        tlc0=document.getElementById('tl_corner'+x);//inja name 4 morabae gooshe ro moshakhas mikonim
        trc0=document.getElementById('tr_corner'+x);
        brc0=document.getElementById('br_corner'+x);
        blc0=document.getElementById('bl_corner'+x);
        console.log("tlc id is:"+tlc0.id);

        tlc0.onmousedown=function(event){corner_analize(event,tlc0,1)};  //inja baraye hat morabae gooshe yek shenevandeye rooydad tarif mikonim
        trc0.onmousedown=function(event){corner_analize(event,trc0,2)}; //va mikhain ke ba click kardan roye oona tabe`e corner_analize ejra beshe
        brc0.onmousedown=function(event){corner_analize(event,brc0,3)};
        blc0.onmousedown=function(event){corner_analize(event,blc0,4)};

        inner00=document.getElementById('inner'+x);
        inner0=document.getElementById('inner'+x).style;
        main00=document.getElementById('main'+x);
        main0=main00.style;
        inner0.width=document.form1.elements[0].value;
        inner0.height=document.form1.elements[1].value;
        inner0.border="0px solid black transparent";

        inner0.backgroundColor="#FF7560";
        var getted_rect=get_pro(x);
        inner0.width=getted_rect.width+'px'; //baraye taiin kardane inke meghdare width , height avaliyeye rectangle cheghadr bashe
        inner0.height=getted_rect.height+'px';//baraye taiin kardane inke meghdare width , height avaliyeye rectangle cheghadr bashe
        console.log("inner0 width="+inner0.width);
        main0.width=inner0.width;
        main0.height=inner0.height;

        inner0.borderRadius=z[x];
        inner0.opacity="1";
        inner0.position="absolute";
        main0.position="absolute";
        main0.padding="25px";
        main0.border="1px solid red";
        main0.width=inner0.width;
        main0.height=inner0.height;
        main0.margin="0px";

        tl_corner0.position="absolute";
        tl_corner0.width="20px";
        tl_corner0.height="20px";
        tl_corner0.border="1px solid black";
        tl_corner0.left="0px";
        tl_corner0.top="0px";
        tl_corner0.visibility="hidden";

        tr_corner0.position="absolute";
        tr_corner0.width="20px";
        tr_corner0.height="20px";
        tr_corner0.border="1px solid black";
        tr_corner0.top="0px";
        tr_corner0.right="0px";
        tr_corner0.visibility="hidden";

        br_corner0.position="absolute";
        br_corner0.width="20px";
        br_corner0.height="20px";
        br_corner0.border="1px solid black";
        br_corner0.right="0px";
        br_corner0.bottom="0px";
        br_corner0.visibility="hidden";

        bl_corner0.position="absolute";
        bl_corner0.width="20px";
        bl_corner0.height="20px";
        bl_corner0.border="1px solid black"; //modern set width   *******new**********//////////////*******new**********
        bl_corner0.left="0px";
        bl_corner0.bottom="0px";
        bl_corner0.visibility="hidden";
        x+=1;
    }else{ //else moghei ejra mishe ke ba`d az tolid shodane rect roye oon click beshe
        tlc0=document.getElementById('tl_corner'+n);//inja name 4 morabae gooshe ro moshakhas mikonim
        trc0=document.getElementById('tr_corner'+n);
        brc0=document.getElementById('br_corner'+n);
        blc0=document.getElementById('bl_corner'+n);

        inner00=document.getElementById('inner'+n);
        inner0=document.getElementById('inner'+n).style;
        main00=document.getElementById('main'+n);
        main0=main00.style;
        inner00.style.borderRadius=z[n];
        tlc0.style.visibility="visible";//-------------------tahte tamir  mahv shodane dore rectha
        trc0.style.visibility="visible";
        brc0.style.visibility="visible";
        blc0.style.visibility="visible";
        main0.border="1px solid red";

    }

}

group.addEventListener("click",set_n);//get n paiin tarif shode
function set_n(evt){
    get_n(evt);

    if(focus0.length!=0 &&id!="group"){
        for(i=0;i<focus0.length;i++)
        {
            focus0[i]=false;
        }
        focus0[n]=true;
        E=focus0[n];
        set_width0(E,n);
        //console.log("works");
    }else{
        E=false;
    }
    if(id =="group")   ////////////////////////////////tahte tamir
    {


        tlc0.style.visibility=getted_rect.visibility; //-------------------tahte tamir  mahv shodane dore rectha
        trc0.style.visibility=getted_rect.visibility;
        brc0.style.visibility=getted_rect.visibility;
        blc0.style.visibility=getted_rect.visibility;
        main0.border="1px solid transparent";
    }
}

function get_n(evt){
    id=evt.srcElement.id;  //in ghesmat baraye joda kardane adad az text hast   ok ok ok ok ok ok
    if(id!="group"){
        n = id.match(/\d/g); //inja bayad bedoonim ke \d yani adadha...
        n= n.join("");
        n=Number(n);
        getted_rect=get_pro(n);//tabee get_pro dar khate 280 hast ..
        console.log(n);
        set_form();
        //baraye set kardane khosoosiyate be width , height , rorate , ...
    }else{
        n=-1; //mashkook _____________________________________________________________mashkook hast
    }

    return n;
}
//tedade kole rectha x+1 ast ..
var properties=[];
function set_pro(i,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24){
    for(t=0;t<arguments.length-1;t++){ //harche argoman ma be in tabe bedim ina ro barabar ba anasore peroperties gharar mide
        if(arguments[t+1]!=-1){
            properties[i][t]=arguments[t+1];
        }
        if(arguments[t+1]==undefined){ //dar soorate tarif nashodan argoman oon ro barabar ba -1 gharar midim
            arguments[t+1]=-1;
        }
    }

}
function new_array(i){
    properties[properties.length]= new Array(i); //inja yek onsore jadid ijad mikonim yani yek araye bareye ye onsore jadid
}
function get_pro(i){
    var obj={
        width:properties[i][0],
        height:properties[i][1],
        leftCheck:properties[i][2],
        topCheck:properties[i][3],
        rightCheck:properties[i][4],
        bottomCheck:properties[i][5],
        borderLeft:properties[i][6],
        borderTop:properties[i][7],
        borderRight:properties[i][8],
        borderBottom:properties[i][9],
        leftInput:properties[i][10],
        topInput:properties[i][11],
        rightInput:properties[i][12],
        bottomInput:properties[i][13],
        leftInputCheck:properties[i][14],
        topInputCheck:properties[i][15],
        rightInputCheck:properties[i][16],
        bottomInputCheck:properties[i][17],
        rotate:properties[i][18],
        rotateDisabled:properties[i][19],
        rotateCheck:properties[i][20],
        color:properties[i][21],
        visibility:properties[i][22],
        z_index:properties[i][23]
    };
    return obj;
}




//****************************************payane taksire main div*******************************************
function n8(a,b,c,d,e,f,g,h){  //function n8 gets 8 numbers and build a standars border-radius
            // این تابع 8 مقدار را می گیرد و یک بوردر رادیاس استاندارد به ما میدهد
    // به این تابع 8 عدد داده می شود
    a=number_to_px(a); // به این اعداد کاراکتر پیکسل رو اضافه می کند
    b=number_to_px(b);
    c=number_to_px(c);
    d=number_to_px(d);
    var slash=" / "; //یک کاراکتر اسلش است
    var space=" "; //یک فاصله ی خالی است
    a=a.concat(space);// پس از مقدار a یک فاصله سفید قرار می دهد
    b=b.concat(space);
    c=c.concat(space);
    var combine=""; //یک رشته ی تهی است
    combine=combine.concat(a); // هر یک از مقادیر را بعلاوه ی یک اسلش به رشته ی تهی اضافه می کند
    combine=combine.concat(b);
    combine=combine.concat(c);
    combine=combine.concat(d);
    combine=combine.concat(slash);
    e=number_to_px(e);  // همان مراحل برای 4 عدد دوم هم انجام می شود.
    f=number_to_px(f);
    g=number_to_px(g);
    h=number_to_px(h);
    e=e.concat(space);
    f=f.concat(space);
    g=g.concat(space);
    combine=combine.concat(e);
    combine=combine.concat(f);
    combine=combine.concat(g);
    combine=combine.concat(h);
    return combine;// حالا این مقدار تولید شده برگردانده می شود.

}


document.form1.elements[0].defaultValue="200px"; //meghdare pishfarze width , height
document.form1.elements[1].defaultValue="200px";//meghdare pishfarze width , height

var z=[];
z[0]="20px 40px 60px 80px / 30px 50px 70px 90px"; // start of the border radius  --z is global ..
inner.borderRadius=z; //n8(60,50,80,50,30,42,65,25);
inner.opacity="0.65";

//forms------borders---calculate-------------------------------------------
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

output.appendChild(position_o);
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
//===================================output payane nesbi=====================
function set_form(){
    btm=document.border_form.btm;//btm yani border top m .... btm haman inpute ghotre border top hast
    input_right=document.border_form.input_right;// input right is an input for ghotre border right ;
    input_bottom=document.border_form.input_bottom;
    input_left=document.border_form.input_left;
    rotate_text=document.border_form.rotate_text; //rotate text bataye taiine meghdare rotate hast
    border_wt = getted_rect.borderTop;  											//border_wt yani : border top width  ..yani ghotre border top ..
    border_wr=getted_rect.borderRight;//border_wr means : border right width ..yani ghotre border right ...
    border_wb=getted_rect.borderBottom;
    border_wl=getted_rect.borderLeft;
    rotate_d=getted_rect.rotate;//rotate d yani rotate default ;
    btm.disabled=!(getted_rect.topInpuyCheck);// yani az aval nemikhaim input marboot be ghotr roshan bashe .
    input_right.disabled=!(getted_rect.rightInputCheck) ;
    input_bottom.disabled=!(getted_rect.bottomInputCheck);
    input_left.disabled=!(getted_rect.leftInputCheck);
    rotate_text.disabled=!(getted_rect.rotateDisabled); // aval bayad rotate gheyre faal bashe

    btcheck=document.border_form.border_top; //btc means : border-top checked
    brcheck=document.border_form.border_right;//btr means: border right checked
    bbcheck=document.border_form.border_bottom;
    blcheck=document.border_form.border_left;
    rotate_check=document.border_form.rotate_check;
    var inner=document.getElementById('inner'+n).style;
    var main=document.getElementById('main'+n).style;
    brcheck.checked=getted_rect.rightCheck; //chizaye pishfarz
    input_right.disabled=getted_rect.rightInputCheck;
    btcheck.checked=getted_rect.topCheck;
    btm.disabled=getted_rect.topInputCheck;
    bbcheck.checked=getted_rect.bottomCheck;
    input_bottom.disabled=getted_rect.bottomInputCheck;
    blcheck.checked=getted_rect.leftCheck;
    input_left.disabled=getted_rect.leftInputCheck;
    rotate_check.checked=getted_rect.rotateCheck;
    rotate_text.disabled=getted_rect.rotateDisabled;
    btm.value=getted_rect.borderTop;
    input_right.value=getted_rect.borderRight;
    input_bottom.value=getted_rect.borderBottom;
    input_left.value=getted_rect.borderLeft;
    rotate_text.value=getted_rect.rotate;
    document.form1.width.value=getted_rect.width;  ///gozareshe moshkel +++++++++++++++++++++++++++++++____warning_______________
    document.form1.height.value=getted_rect.height;
    //console.log(getted_rect);
    var input_color=document.border_form.input_color;
    input_color.value=getted_rect.color;
    var z_index=document.border_form.z_index;
    z_index.value=getted_rect.z_index;
    //console.log(getted_rect.color);

    //+++++++++++++++++khorougi++++++++++++++++++


    position_o.innerHTML='position:'+'absolute'+';';
    width_o.innerHTML='width:'+inner.width+';';
    height_o.innerHTML='height:'+inner.height+';';
    left_o.innerHTML='left:'+main.left+';';
    top_o.innerHTML='top:'+main.top+';';
    radius_o.innerHTML='border-radius:'+z[n]+';';
    color_o.innerHTML='background-color:'+inner.backgroundColor+';';
    borderLeft_o.innerHTML='border-left:'+inner.borderLeft+';';
    borderTop_o.innerHTML='border-top:'+inner.borderTop+';';
    borderRight_o.innerHTML='border-right:'+inner.borderRight+';';
    borderBottom_o.innerHTML='border-bottom:'+inner.borderBottom+';';
    rotate_o.innerHTML='-webkit-transform:rotate('+getted_rect.rotate+'deg'+');';




// ++++++++++payane khorougi+++++++++++++++++++++++
    brcheck.onclick=function(){  //brckeck means border right ckeck
        if(brcheck.checked){
            inner.borderRight=getted_rect.borderRight+'px solid black';
            input_right.disabled=false;
            set_pro(n,-1,-1,-1,-1,true,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,false,-1,-1,-1,-1,-1);
        }else{
            inner.borderRight=getted_rect.borderRight+'px solid transparent';
            input_right.disabled=true;
            set_pro(n,-1,-1,-1,-1,false,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,true,-1,-1,-1,-1,-1);
        }
    };

    btcheck.onclick=function(){   //btckeck means border top ckeck
        if(btcheck.checked){         //vaghti click mishe border top ro faal ya gheire faal mikone.
            inner.borderTop=getted_rect.borderTop +'px solid black';
            btm.disabled=false;
            set_pro(n,-1,-1,-1,true,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,false,-1,-1,-1,-1,-1,-1,-1);
        }else{
            inner.borderTop=getted_rect.borderTop+'px solid transparent';
            set_pro(n,-1,-1,-1,false,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,true,-1,-1,-1,-1,-1,-1,-1);
            btm.disabled=true;
        }
    };

    bbcheck.onclick=function(){  //bbckeck means border bottom ckeck
        if(bbcheck.checked){
            inner.borderBottom=getted_rect.borderBottom+'px solid black';
            input_bottom.disabled=false;
            set_pro(n,-1,-1,-1,-1,-1,true,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,false,-1,-1,-1,-1,-1);
        }else{
            inner.borderBottom=getted_rect.borderBottom+'px solid transparent';
            input_bottom.disabled=true;
            set_pro(n,-1,-1,-1,-1,-1,false,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,true,-1,-1,-1,-1,-1);
        }
    };
    blcheck.onclick=function(){  //brckeck means border left ckeck
        if(blcheck.checked){
            inner.borderLeft=getted_rect.borderLeft+'px solid black';
            input_left.disabled=false;
            set_pro(n,-1,-1,true,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,false,-1,-1,-1,-1,-1,-1,-1,-1);
        }else{
            inner.borderLeft=getted_rect.borderLeft+'px solid transparent';
            input_left.disabled=true;
            set_pro(n,-1,-1,false,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,true,-1,-1,-1,-1,-1,-1,-1,-1);
        }
    };

    rotate_check.onclick=function(){  //rotate ckeck yani ckeck boxe rotate ;;
        if(rotate_check.checked){
            main.transform='rotate('+getted_rect.rotate+'deg)';
            rotate_text.disabled=false;
            set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,false,true,-1,-1);
        }else{
            main.transform='rotate('+getted_rect.rotate+'deg)';
            rotate_text.disabled=true;
            set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,true,false,-1,-1);
        }
    };
    rotate_text.defaultValue=getted_rect.rotate;//meghdare avaliyeye rotate inja taiin mishe
    btm.defaultValue=getted_rect.borderTop; //meghdare avaliyeye border top inja ta`iin mishe
    btm.oninput=function(){
        set_pro(n,-1,-1,-1,-1,-1,-1,-1,btm.value,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
        var get1=get_pro(n);
        var conc=get1.borderTop+'px solid black';
        inner.borderTop=conc;
        console.log(get1);
    };
    input_right.defaultValue=border_wr;//meghdare avaliyeye border right inja ta`iin mishe
    input_right.oninput=function(){
        set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,input_right.value,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
        var get1=get_pro(n);
        var conc=get1.borderRight+'px solid black';
        inner.borderRight=conc;
        console.log(conc)
    };

    input_bottom.defaultValue=border_wb;//meghdare avaliyeye border bottom inja ta`iin mishe
    input_bottom.oninput=function(){
        set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,input_bottom.value,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
        var get1=get_pro(n);
        var conc=get1.borderBottom+'px solid black';
        inner.borderBottom=conc;
        console.log(conc)
    };
    input_left.defaultValue=border_wl;//meghdare avaliyeye border left inja ta`iin mishe
    input_left.oninput=function(){
        set_pro(n,-1,-1,-1,-1,-1,-1,input_left.value,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
        var get1=get_pro(n);
        var conc=get1.borderLeft+'px solid black';
        inner.borderLeft=conc;
        console.log(conc)
    };
    rotate_text.oninput=function(){
        set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rotate_text.value,-1,-1,-1);
        var get1=get_pro(n);
        rotate_d=get1.rotate;
        var conc='rotate('+rotate_d+'deg)';
        main.WebkitTransform=conc;
        console.log(conc);
    }

}






//******end*******of***forms**borders***calculeta**************************************************************************



var main_div=document.getElementById("main");
var tlc=document.getElementById("tl_corner");  //tlc yani: top left corner
var trc=document.getElementById("tr_corner");
var brc=document.getElementById("br_corner");
var blc=document.getElementById("bl_corner");


function un8(a){ //un8 means un_n8  -ok-it works
    var b=a.split(" ");
    var x1=b[0];
    var x2=b[1];
    var x3=b[2];
    var x4=b[3];
    var y1=b[5];
    var y2=b[6];
    var y3=b[7];
    var y4=b[8];
    return{
        x1:px_to_number(x1),
        x2:px_to_number(x2),
        x3:px_to_number(x3),
        x4:px_to_number(x4),
        y1:px_to_number(y1),
        y2:px_to_number(y2),
        y3:px_to_number(y3),
        y4:px_to_number(y4)
    };
}


function get_mouse_pos(div,evt,dn){  //dn is  div number  ...small divs at corner  ..top_left:1 top_right:2 bottom_right:3 bottom_left:4
    var rect=div.getBoundingClientRect();
    if(dn==1){
        return{
            x:evt.clientX-rect.left,
            y:evt.clientY-rect.top,
        };

    }else if(dn==2){
        return{
            x:evt.clientX-rect.right,
            y:evt.clientY-rect.top,
        };
    }else if(dn==3){
        return{
            x:-evt.clientX+rect.right,
            y:-evt.clientY+rect.bottom,
        };
    }else if(dn==4){
        return{
            x:evt.clientX-rect.left,
            y:-evt.clientY+rect.bottom,
        };
    }
}
var lx1,ly1,lx2,ly2,lx3,ly3,lx4,ly4;
//*************************************************************tahte ta`mir**********ghesmate border radius****************************


function corner_analize(event,div,i2){
    if(click_hand==false)
    {



        i=i2; //ctrue moshakhas konandeye arguman hast
        var lastpos=get_mouse_pos(div,event,i);



        if(i==1){

            lx1=lastpos.x;
            ly1=lastpos.y;

            document.addEventListener('mousemove',start_get_analize,false);
            document.onmouseup=function(){
                document.removeEventListener('mousemove',start_get_analize,false);
            };
        }else if(i==2){

            lx2=lastpos.x;
            ly2=lastpos.y;
            document.addEventListener('mousemove',start_get_analize,false);
            document.onmouseup=function(){
                document.removeEventListener('mousemove',start_get_analize,false);

            };
        }else if(i==3){

            lx3=lastpos.x;
            ly3=lastpos.y;
            document.addEventListener('mousemove',start_get_analize,false);
            document.onmouseup=function(){
                document.removeEventListener('mousemove',start_get_analize,false);

            };

        }else if(i==4){
            lx4=lastpos.x;
            ly4=lastpos.y;
            document.addEventListener('mousemove',start_get_analize,false);
            document.onmouseup=function(){
                document.removeEventListener('mousemove',start_get_analize,false);

            }
        }//payane if ha
    }
}


function start_get_analize(event){
    var mouse_pos=get_mouse_pos(main00,event,i);
    if(E==false){
        var un=un8(z[x-1]);
    }
    else{
        var un=un8(z[n]);
    }

    if(i==1){
        var x1=mouse_pos.x;
        var y1=mouse_pos.y;
        var v=n8(un.x1+x1-lx1,un.x2,un.x3,un.x4,un.y1+y1-ly1,un.y2,un.y3,un.y4);
        //console.log(z[x-1]);
        lx1=x1;
        ly1=y1;
        inner00.style.borderRadius=v;
        if(E==false)
        {
            z[x-1]=v;
        }else
        {
            z[n]=v;
        }
    }else if(i==2){
        var x2=mouse_pos.x;
        var y2=mouse_pos.y;
        var v=n8(un.x1,un.x2-(x2-lx2),un.x3,un.x4,un.y1,un.y2+y2-ly2,un.y3,un.y4);
        lx2=x2;
        ly2=y2;
        inner00.style.borderRadius=v;
        if(E==false)
        {
            z[x-1]=v;
        }else
        {
            z[n]=v;
        }

    }else if(i==3){
        var x3=mouse_pos.x;
        var y3=mouse_pos.y;
        var v=n8(un.x1,un.x2,un.x3+x3-lx3,un.x4,un.y1,un.y2,un.y3+y3-ly3,un.y4);
        lx3=x3;
        ly3=y3;
        inner00.style.borderRadius=v;
        if(E==false)
        {
            z[x-1]=v;
        }else
        {
            z[n]=v;
        }


    }else if(i==4){
        var x4=mouse_pos.x;
        var y4=mouse_pos.y;
        var v=n8(un.x1,un.x2,un.x3,un.x4+x4-lx4,un.y1,un.y2,un.y3,un.y4+y4-ly4);
        lx4=x4;
        ly4=y4;
        inner00.style.borderRadius=v;
        if(E==false)
        {
            z[x-1]=v;
        }else
        {
            z[n]=v;
        }
    }

}



tlc.onclick=function(evt){ //tlc means the div that is top-left corner
    if(click_hand==false)
    {
        var lastpos=get_mouse_pos(tlc,evt,1); //,,,..masala vaghti clickhand true hast in ghesmat false beshe
        lx1=lastpos.x; //lx means : last_x
        ly1=lastpos.y; //ly means : last_y
        document.addEventListener('mousemove',start_get1,false);
        document.onmouseup=function(){
            document.removeEventListener('mousemove',start_get1,false);
        };

    }
};
trc.onclick=function(evt){ //trc means the div that is top-right corner
    if(!click_hand){          //mikhaim vaghti rooye daste click mishe ... ina gheire fa`al beshe
        var lastpos=get_mouse_pos(trc,evt,2);//,,,..masala vaghti clickhand true hast in ghesmat false beshe
        lx2=lastpos.x; //lx means : last_x
        ly2=lastpos.y; //ly means : last_y
        document.addEventListener('mousemove',start_get2,false);
        document.onmouseup=function(){
            document.removeEventListener('mousemove',start_get2,false);

        }
    }
};

brc.onclick=function(evt){ //brc means the div that is bottom-right corner
    if(!click_hand){              //mikhaim vaghti rooye daste click mishe ... ina gheire fa`al beshe
        var lastpos=get_mouse_pos(brc,evt,3);//,,,..masala vaghti clickhand true hast in ghesmat false beshe
        lx3=lastpos.x; //lx means : last_x
        ly3=lastpos.y; //ly means : last_y
        document.addEventListener('mousemove',start_get3,false);
        document.onmouseup=function(){
            document.removeEventListener('mousemove',start_get3,false);

        }
    }
};
blc.onclick=function(evt){ //blc means the div that is bottom-left corner
    if(!click_hand){          //mikhaim vaghti rooye daste click mishe ... ina gheire fa`al beshe
        var lastpos=get_mouse_pos(blc,evt,4);//,,,..masala vaghti clickhand true hast in ghesmat false beshe
        lx4=lastpos.x; //lx means : last_x
        ly4=lastpos.y; //ly means : last_y
        document.addEventListener('mousemove',start_get4,false);
        document.onmouseup=function(){
            document.removeEventListener('mousemove',start_get4,false);

        }
    }
};

function start_get1(evt){
    var mouse_pos=get_mouse_pos(main_div,evt,1);
    var un=un8(z[0]);
    var x1=mouse_pos.x;
    var y1=mouse_pos.y;
    var v=n8(un.x1+x1-lx1,un.x2,un.x3,un.x4,un.y1+y1-ly1,un.y2,un.y3,un.y4);
    console.log(v);
    inner.borderRadius=v;
    z[0]=v;  //now z is the last coordinate of border-radius
    lx1=x1;
    ly1=y1;

}
function start_get2(evt){
    var mouse_pos=get_mouse_pos(main_div,evt,2);
    var un=un8(z[0]);
    var x2=mouse_pos.x;
    var y2=mouse_pos.y;
    var v=n8(un.x1,un.x2-(x2-lx2),un.x3,un.x4,un.y1,un.y2+y2-ly2,un.y3,un.y4);
    console.log(v);
    inner.borderRadius=v;
    z[0]=v;  //now z is the last coordinate of border-radius
    lx2=x2;
    ly2=y2;

}

function start_get3(evt){
    var mouse_pos=get_mouse_pos(main_div,evt,3);
    var un=un8(z[0]);
    var x3=mouse_pos.x;
    var y3=mouse_pos.y;
    var v=n8(un.x1,un.x2,un.x3+x3-lx3,un.x4,un.y1,un.y2,un.y3+y3-ly3,un.y4);
    console.log(v);
    inner.borderRadius=v;
    z[0]=v;  //now z is the last coordinate of border-radius
    lx3=x3;
    ly3=y3;

}
function start_get4(evt){
    var mouse_pos=get_mouse_pos(main_div,evt,4);
    var un=un8(z[0]);
    var x4=mouse_pos.x;
    var y4=mouse_pos.y;
    var v=n8(un.x1,un.x2,un.x3,un.x4+x4-lx4,un.y1,un.y2,un.y3,un.y4+y4-ly4);
    console.log(v);
    inner.borderRadius=v;
    z[0]=v;  //now z is the last coordinate of border-radius
    lx4=x4;
    ly4=y4;

}

///*************************harkate main div ****************************************************************************
var rect,dif_x,dif_y;
var click_hand=false;  //click hand haman dasti hast ke mikhaim vaghti roosh click shod betoonim main div ro harkat bedim
var click_main_div=false; //click_main_div baraye ine ke befahmin rooye main div click shode ya na ...
var hand=document.getElementById("hand"); //hand ye div hast ke alamate dast rooshe ..
hand.onclick=function(){
    if(click_hand==false){
        click_hand=true;
        document.body.style.cursor="hand"; //vaghti rooye click_hand click mishe cursor tabdil be hand(dast) mishe ..
    }
    else{click_hand=false;
        document.body.style.cursor="default";//vaghti click hand   false mishe .cursor tabdil be default mishe
    }
};

group.addEventListener("mouseup",event_known);//hamashoon ye tabe ro ejra mikonand va oon tabe pardazesh ro anjam mide
group.addEventListener("mousedown",event_known);
group.addEventListener("mousemove",event_known);

function set_time(evt){

    var id=evt.srcElement.id;
    var n = id.match(/\d/g);
    n= n.join("");
    n=Number(n);
    main_div=document.getElementById("main"+n);
}


function differ(evt){
    if(click_hand==false)
    {
        click_main_div=false;
    }else if(click_hand==true){click_main_div=true;
        group_div=group.getBoundingClientRect();
        rect=main_div.getBoundingClientRect();
        //vaghti click shod rooye main div mikhahim mahalle mouse ro be dast biarim ...
        dif_x=evt.clientX-rect.left; //dif_x , dif_y mokhtasate mouse ro nesbat be mostatil main div midahand..
        dif_y=evt.clientY-rect.top;
    }
}





function event_known(evt){ //in tabe miad anvae event ha ro bar resi mikone ke age noesh folane folan kar ro mikone
    if(evt.type=="mousedown"){
        set_time(evt);
        differ(evt);
    }else if(evt.type=="mouseup"){
        click_main_div=false;
    }else if(evt.type=="mousemove"&&click_main_div==true){
        follow(evt);
    }
}



function follow(evt){  //in function ba`es mishe ke main div betoone harkat kone albate az gooshe harkatesh mide ke bayad dorost beshe

    var nx=evt.clientX-group_div.left-dif_x; //inja be barname migim ke main div ro nesbat be dif_x , dif_y harkat bede
    var ny=evt.clientY-group_div.top-dif_y; //group_div ham azash kam mishe khoon ke lefte morabaha nesbat be group taiin mishe
    var sl=nx.toString();
    var st=ny.toString();
    var slp=sl.concat("px");
    var stp=st.concat("px");
    main_div.style.left=slp;
    main_div.style.top=stp;
}



//*********************payane harkate main div ***************************************************************************

$("#delete").click(function(){      /////////////////hazfe mostatil ha .......jquery
    $("body").css("cursor","not-allowed");
    var del=true;
    $("div").mousedown(function(evt){
        var id=evt.currentTarget.attributes[0].value;
        //console.log(id);
        var id='#'+id;
        var b=id.match(/main/);
        var b2=id.match(/inner/);
        var b3=id.match(/group/);
        if((b=="main"||b2=="inner")&&del==true){
            //console.log(evt);
            $(id).mouseup(function(){
                $(this).hide("slow");
                del=false;
                $("body").css("cursor","default");
            });}else if(b3=="group"){
            $(id).mouseup(function(){
                //$(this).hide();
                del=false;
                $("body").css("cursor","default");
            });
        }

    });
});

//////////////////////////////tabdile shekl be mostatile khales ----------------------------

$("#rect").click(function(){
    var inner=document.getElementById('inner'+n).style;
    z[n]="0px 0px 0px 0px / 0px 0px 0px 0px";
    inner.borderRadius=z[n];

});

/*$("div").click(function(evt){
 var id=evt.currentTarget.attributes[0].value;
 //var b=id.match(/\d/g);
 var id='main'+n;
 var id2='#inner'+n;
 //console.log(evt);

 $("#z_index_ok").click(function(){
 var input=$("#z_index").val();
 $(id2).css("z-index",input);
 document.getElementById(id).style.zIndex=input;
 console.log('input is:'+input);
 //console.log("hthtthhththttht");

 });

 });*/

var z_index=document.getElementById("z_index_ok");
z_index.onclick=function(){
    var id='main'+n;
    var value=document.border_form.z_index.value;
    document.getElementById(id).style.zIndex=value;
    set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,value);
};
