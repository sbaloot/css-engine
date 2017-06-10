/**
 * Created by ehsan on 09/06/2017.
 */

// دقیقا نمیدونم چیکار می کنه
//هرچی هست یه سری موقعیت رو نسبت به ماوس به دست می آره


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