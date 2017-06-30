/**
 * Created by ehsan on 09/06/2017.
 */
//tedade kole rectha x+1 ast ..
var properties=[];


//در تابع set_pro یک صری خصوصیات بهش می دهیم و میاد اونا رو برای یک عنصر تنظیم می کند
function set_pro(i,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24){
    for(t=0;t<arguments.length-1;t++){ //harche argoman ma be in tabe bedim ina ro barabar ba anasore peroperties gharar mide
        if(arguments[t+1]!=-1){
            properties[i][t]=arguments[t+1];
        }
        if(arguments[t+1]==undefined){ //dar soorate tarif nashodan argoman oon ro barabar ba -1 gharar midim
            arguments[t+1]=-1;
        }
    }

}


function new_array(i){

    //یک عنصر دیگر در آرایه properties ایجاد می کند که خودش یک آرایه است.
    // آرگومان i مشخص کننده ی تعداد عناصر این آرایه ی جدید است
    properties[properties.length]= new Array(i); //inja yek onsore jadid ijad mikonim yani yek araye bareye ye onsore jadid
}
function get_pro(i){
    var obj = {
        width:properties[i][0],
        height:properties[i][1],
        leftCheck:properties[i][2],
        topCheck:properties[i][3],
        rightCheck:properties[i][4],
        bottomCheck:properties[i][5],
        borderLeft:properties[i][6],
        borderTop:properties[i][7],
        borderRight:properties[i][8],
        borderBottom:properties[i][9],
        leftInput:properties[i][10],
        topInput:properties[i][11],
        rightInput:properties[i][12],
        bottomInput:properties[i][13],
        leftInputCheck:properties[i][14],
        topInputCheck:properties[i][15],
        rightInputCheck:properties[i][16],
        bottomInputCheck:properties[i][17],
        rotate:properties[i][18],
        rotateDisabled:properties[i][19],
        rotateCheck:properties[i][20],
        color:properties[i][21],
        visibility:properties[i][22],
        z_index:properties[i][23]
    };
    return obj;
}
