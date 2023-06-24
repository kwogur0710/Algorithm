function solution(sizes) {
    let maxW = 0, maxH = 0;
    sizes.map(item=> {
        if(item[0] > item[1]){
            if(item[0]>maxW) maxW = item[0];
            if (item[1] > maxH) maxH = item[1];
        } else{
            if(item[1]>maxW) maxW = item[1];
            if (item[0] > maxH) maxH = item[0];
        }
    })
    
    return maxW * maxH;
}