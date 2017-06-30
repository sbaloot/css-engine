/**
 * Created by ehsan on 30/06/2017.
 */
//وظیفه ی این تابع این است که وقتی روی یک مربع گوشه ای کلیک شد، اون سه مربع دیگه رو محو کنه.

function elMouseDown (elnumber,id) {
    //console.log("top left corner is clicked");



    var id1 = 'tl_corner'+elnumber;
    var id2 = 'tr_corner'+elnumber;
    var id3 = 'br_corner'+elnumber;
    var id4 = 'bl_corner'+elnumber;

    var tl_corner=document.getElementById(id1);
    var tr_corner=document.getElementById(id2);
    var  br_corner=document.getElementById(id3);
    var  bl_corner=document.getElementById(id4);

   // var clickedElement = document.getElementById(id);

    switch (id) {

        case id1:
            tl_corner.style.visibility = "visible";
            tr_corner.style.visibility = "hidden";
            br_corner.style.visibility = "hidden";
            bl_corner.style.visibility = "hidden";
            break;
        case id2:
            tl_corner.style.visibility = "hidden";
            tr_corner.style.visibility = "visible";
            br_corner.style.visibility = "hidden";
            bl_corner.style.visibility = "hidden";
            break;
        case id3:
            tl_corner.style.visibility = "hidden";
            tr_corner.style.visibility = "hidden";
            br_corner.style.visibility = "visible";
            bl_corner.style.visibility = "hidden";
            break;
        case id4:
            tl_corner.style.visibility = "hidden";
            tr_corner.style.visibility = "hidden";
            br_corner.style.visibility = "hidden";
            bl_corner.style.visibility = "visible";
            break;
    }

};


function elMouseUp (elnumber,id) {
    //console.log("top left corner is clicked");
    var id1 = 'tl_corner'+elnumber;
    var id2 = 'tr_corner'+elnumber;
    var id3 = 'br_corner'+elnumber;
    var id4 = 'bl_corner'+elnumber;

    var tl_corner=document.getElementById(id1);
    var tr_corner=document.getElementById(id2);
    var  br_corner=document.getElementById(id3);
    var  bl_corner=document.getElementById(id4);


    switch (id) {

        case id1:
            /*tl_corner.style.visibility = "visible";*/
            tr_corner.style.visibility = "visible";
            br_corner.style.visibility = "visible";
            bl_corner.style.visibility = "visible";
            break;
        case id2:
            tl_corner.style.visibility = "visible";
            /*tr_corner.style.visibility = "visible";*/
            br_corner.style.visibility = "visible";
            bl_corner.style.visibility = "visible";
            break;
        case id3:
            tl_corner.style.visibility = "visible";
            tr_corner.style.visibility = "visible";
            /*br_corner.style.visibility = "visible";*/
            bl_corner.style.visibility = "visible";
            break;
        case id4:
            tl_corner.style.visibility = "visible";
            tr_corner.style.visibility = "visible";
            br_corner.style.visibility = "visible";
            /*bl_corner.style.visibility = "visible";*/
            break;
    }

}

