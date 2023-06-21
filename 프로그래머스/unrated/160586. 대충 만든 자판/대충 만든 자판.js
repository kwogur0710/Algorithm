function solution(keymap, targets) {
    var answer = [];
    let total = [], index = 0;
    let i = 0, j = 0;
    
    targets.map((target, index) => {
        total = [];
        for(i = 0; i < target.length; i++){
            index = 100;
            keymap.map(key => {
                for(j = 0; j < key.length; j++){
                    if(target[i] === key[j] && j < index){
                        index = j;
                    }
                        
                }
            });
            index === 100 ? total[i] = -1 : total[i] = index + 1;
        }
        if(total.includes(-1)) answer.push(-1)
        else answer.push(total.reduce((acc, cur)=> acc += cur, 0 ))
    })
    
    return answer;
}