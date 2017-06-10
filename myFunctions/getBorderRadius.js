/**
 * Created by ehsan on 09/06/2017.
 */





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



//تابع زیر، درست ضد تابع n8 عمل می کند.
//یعنی یک border-radius بهش می دهیم و 8 تا عدد به ما می دهد.
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