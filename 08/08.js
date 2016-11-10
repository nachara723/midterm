function isLeapYear(n){
    if ((n % 4 == 0) && !(n % 100 == 0)){
        return true;
    }else if((n % 4 == 0) && (n % 100 == 0) && !(n % 400 == 0)){
        return false;
    }else if((n % 4 == 0) && (n % 400 == 0)){
        return true;
    }else{
        return false;
    }
}
