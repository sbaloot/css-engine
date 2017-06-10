/**
 * Created by ehsan on 10/06/2017.
 */
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