function GCD(x,y) {
    let r =x%y;
    while(r!=0) {
         x = y;
         y = r;
         r = x%y;
    }
    return y;
}
let ans= GCD(4,8);
console.log(ans);