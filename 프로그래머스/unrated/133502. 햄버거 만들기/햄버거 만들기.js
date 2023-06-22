function solution(ingredient) {
    var answer = 0;
    let i = 0;
    let list = ingredient;
    let materialOrder = [1,2,3,1];
    
    for(i = 0; i < list.length; i++){
        let order = list.slice(i,i+4);
        if(order.length === 4 && order.every((item, index)=>{return item === materialOrder[index]})){
            list.splice(i, 4);
            i -= 4;
            answer ++;
        }
    }
    return answer;
}