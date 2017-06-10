/**
 * Created by ehsan on 05/06/2017.
 */

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
