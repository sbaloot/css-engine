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
        // میاد در آرایه ی z عنصر x ام رو انتخاب می کنه و برابر با یک border-radius قرار میده.
        //یه border-radius اولیه رو در اندیس x ام ذخیره می کنه.
        z[x]="10px 20px 30px 40px / 50px 60px 70px 80px";

        //یعنی یک درایه ی جدید در آخر آرایه ی focus0 ایجاد کن و اون رو برابر با false قرار بده.
        //مقدار false یعنی وقتی این مستطیل ایجاد میشه، فوکس نداشته باشه.
        focus0[focus0.length]=false;

        // اینجا میام و شش تا عنصر div ایجاد می کنیم
        var div0=document.createElement("DIV");
        var div1=document.createElement("DIV");
        var div2=document.createElement("DIV");
        var div3=document.createElement("DIV");
        var div4=document.createElement("DIV");
        var div5=document.createElement("DIV");


        //با استفاده از متغیر x به هریک از این عناصر div آی دی یکتایی اختصاص می دهیم.
        div0.setAttribute("id",'main'+x);
        div1.setAttribute("id",'inner'+x);
        div2.setAttribute("id",'tl_corner'+x);
        div3.setAttribute("id",'tr_corner'+x);
        div4.setAttribute("id",'br_corner'+x);
        div5.setAttribute("id",'bl_corner'+x);

        //تمامی عناصر div از شماره 1 تا 5 را در داخل div با شماره 0 قرار می دهیم
        div0.appendChild(div1);
        div0.appendChild(div2);
        div0.appendChild(div3);
        div0.appendChild(div4);
        div0.appendChild(div5);

        //حالا div0 را در داخل عنصر به نام group قرار می دهیم
        group.appendChild(div0);


        //حالا استایل های عناصر گوشه ای این عنصر را می گیریم
        tl_corner0=document.getElementById('tl_corner'+x).style;
        tr_corner0=document.getElementById('tr_corner'+x).style;
        br_corner0=document.getElementById('br_corner'+x).style;
        bl_corner0=document.getElementById('bl_corner'+x).style;

        // اینجا میام 4 عناصر گوشه ای رو می گیریم و در این متغیرها قرار می دهیم
        tlc0=document.getElementById('tl_corner'+x);
        trc0=document.getElementById('tr_corner'+x);
        brc0=document.getElementById('br_corner'+x);
        blc0=document.getElementById('bl_corner'+x);

        // اینجا برای هر عنصر گوشه ای، یک شنونده رویداد تعریف می کنیم
        //و می خوایم با کلیک بر روی اونها، تابع corner_analize اجرا بشه
        tlc0.onmousedown=function(event){corner_analize(event,tlc0,1)};
        trc0.onmousedown=function(event){corner_analize(event,trc0,2)};
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

}//پایان تابع set_width0




group.addEventListener("click",set_n);//get n paiin tarif shode
function set_n(evt){

    /*var myElementNumber =*/ get_n(evt);



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

//یک رویداد بهش می دهیم و شماره ی قرار گرفته پس از آی دی عنصری که بر روش کلیک شده رو به ما میده
function get_n(evt){

    //وقتی بر روی عنصر group کلیک می کنیم، رویدادش رو به این تابع می دیم.
    //حالا با استفاده از رویداد، آی دی عنصری که بر روش کلیک شده رو به دست می آوریم.
    id=evt.srcElement.id;  //in ghesmat baraye joda kardane adad az text hast   ok ok ok ok ok ok

    // اگر آی دی ما برابر با group نباشه دستورات زیر رو اجرا می کنیم
    if(id != "group"){
        //به دنبال عدد قرار گرفته پس از آی دی group می گردد.
        //مثلا رقم های عدد ۱۲ را تک تک برمی گرداند.
        n = id.match(/\d/g); //inja bayad bedoonim ke \d yani adadha...
        //حالا این رقم ها را به هم می چسبانیم تا عدد به دست آید
        n= n.join("");
        //حالا رشته را به عدد تبدیل می کنیم
        n=Number(n);

        getted_rect=get_pro(n);//tabee get_pro dar khate 280 hast ..
        //console.log(n);
        set_form();
        //baraye set kardane khosoosiyate be width , height , rorate , ...
    }else{
        n=-1; //mashkook _____________________________________________________________mashkook hast
    }
    //مقدار n را برمی گرداند.
    return n;
}

