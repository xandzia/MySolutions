function rev(num){
	const res1 = num%10;
        num=(num-res1)/10;
    const res2 = num%10;
        num=(num-res2)/10;
    const res3 = num%10;
    
    const res = res1+' '+res2+' '+res3;
    console.log(res);
return res;
}
rev(179);

function r(num){
    console.log(num%10);
    return  (num===1) ? num%10 : r((num-num%10)/10);
}
 r(1798);
