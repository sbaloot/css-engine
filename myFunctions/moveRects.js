/**
 * Created by ehsan on 09/06/2017.
 */



//فکر کنم این توابع مربوط به حرکت دادن مستطیل ها باشه



hand.onclick=function(){

    console.log("hand clicked");

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