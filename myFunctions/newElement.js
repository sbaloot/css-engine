/**
 * Created by ehsan on 09/06/2017.
 */
//***************************************************shorooe taksire main div *********************************


// در دستور زیر یک شنونده رویداد برای مستطیل new_rect تعریف می کنیم
//
document.getElementById("new_rect").onclick=function(){

   /*

   اولین تابعی که اجرا میشه، تابع new_array هست.

   */


    new_array(24); //این تابع در فایل database.js قرار دارد

// مقدار متغیر سراسری x در ابتدا ۰ است. یعنی اولین عنصر ایجاد شده
      //بنابراین دستور زیر خصوصیات اولین عنصر ایجاد شده رو تنظیم می کند.
    set_pro(x,200,200,false,false,false,false,1,1,1,1,1,1,1,1,true,true,true,true,0,true,false,"#CCFF33","hidden","");
    E=false;
    set_width0();


}//پایان شنونده رویداد

function set_width0(focus,n){
    //مقدار false یعنی می خواهیم یک عنصر جدید ایجد کنیم
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

