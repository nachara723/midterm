// var p1 = {x1, y1};
// var p2 = {x2, y2};

// function distance(p1, p2){
//     var d1 = ( x1 - x2, y1 - y2 );
//     if (d1 == 0){
//         return 0;
//     }
// }



function distance(x1, x2, y1, y2){
    if ((x1,y1)==(x2,y2)){
        return 0;
    }else {
        if (x1<x2){
            r = x1; 
            x1 = x2;
            x2 = r;
        }
        return ((x1-x2) + (y1-y2));
    }
}


