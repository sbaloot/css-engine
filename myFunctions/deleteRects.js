/**
 * Created by ehsan on 09/06/2017.
 */
$("#delete").click(function(){      /////////////////hazfe mostatil ha .......jquery
    $("body").css("cursor","not-allowed");
    var del=true;
    $("div").mousedown(function(evt){
        var id=evt.currentTarget.attributes[0].value;
        //console.log(id);
        var id='#'+id;
        var b=id.match(/main/);
        var b2=id.match(/inner/);
        var b3=id.match(/group/);
        if((b=="main"||b2=="inner")&&del==true){
            //console.log(evt);
            $(id).mouseup(function(){
                $(this).hide("slow");
                del=false;
                $("body").css("cursor","default");
            });}else if(b3=="group"){
            $(id).mouseup(function(){
                //$(this).hide();
                del=false;
                $("body").css("cursor","default");
            });
        }

    });
});