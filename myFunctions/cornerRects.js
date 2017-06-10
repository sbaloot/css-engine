/**
 * Created by ehsan on 09/06/2017.
 */
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