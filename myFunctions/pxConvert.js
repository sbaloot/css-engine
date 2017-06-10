/**
 * Created by ehsan on 09/06/2017.
 */
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