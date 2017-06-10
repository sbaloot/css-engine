/**
 * Created by ehsan on 10/06/2017.
 */
document.getElementById("ok_width").onclick=function(){set_width();}; //ok baraye set kardane width va heighte rectangleha
function set_width(inner,main){  //the set width function sets the width of the main rectangle
    var inner=document.getElementById('inner'+n).style;
    var main=document.getElementById('main'+n).style;

    var width=document.form1.elements[0].value;
    inner.width=px_to_number(width);
    var height=document.form1.elements[1].value;
    inner.height=px_to_number(height);
    set_pro(n,width,height,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
    main.width=inner.width;
    main.height=inner.height;
}
document.getElementById("color_button").onclick=function(){  //in ghesmat baraye set kardene range inner ast.
    var inner=document.getElementById('inner'+n).style;
    var color=document.border_form.input_color.value;
    inner.backgroundColor=color;
    set_pro(n,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,color);
};