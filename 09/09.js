function gcd(naturalA, naturalB){
    var r;
    if(naturalA < naturalB){ 
        r = naturalA;
        naturalA = naturalB;
        naturalB = r;
    }

    while ((r = naturalA % naturalB) != 0) {
    naturalA = naturalB;
    naturalB = r;
  }
 
  return naturalB;
}