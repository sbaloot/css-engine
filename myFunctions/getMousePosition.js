/**
 * Created by ehsan on 09/06/2017.
 */

// دقیقا نمیدونم چیکار می کنه
//هرچی هست یه سری موقعیت رو نسبت به ماوس به دست می آره

//آرگومان dn شماره ی div رو مشخص می کنه. یعنی شماره ی عناصر گوشه ای که به صورت زیر هست
//top_left:1 , top_right:2 , bottom_right:3 , bottom_left:4 .

//کلا به نظر می رسه تابع get_mouse_pos مقدار x و y ماوس نسبت به گوشه ی سمت چپ و بالای مستطیل مورد نظر به ما می دهد
function get_mouse_pos(div,evt,dn){

    var rect=div.getBoundingClientRect();

    // در صورتی که بر روی div شماره 1 کلیک شده باشد کارهای زیر رو انجام بده
    if(dn == 1){

        return{
            //
            x:evt.clientX-rect.left,
            //
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