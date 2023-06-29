function solution(wallpaper) {
    let x = [], y = [];
    
    wallpaper.map((item, index)=>{
        let i = 0;
        for(i = 0; i < item.length; i++){
            if(item[i] === "#") {
            x.push(index);
            y.push(i);
            }
        }
    });
    return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1];
}