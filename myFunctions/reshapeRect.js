/**
 * Created by ehsan on 10/06/2017.
 */
//////////////////////////////tabdile shekl be mostatile khales ----------------------------

$("#rect").click(function(){
    var inner=document.getElementById('inner'+n).style;
    z[n]="0px 0px 0px 0px / 0px 0px 0px 0px";
    inner.borderRadius=z[n];

});



var z_index=document.getElementById("z_index_ok");
z_index.onclick=function(){
    var id='main'+n;
    var value=document.border_form.z_index.value;
    document.getElementById(id).style.zIndex=value;
    set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,value);
};