function solution(s, skip, index) {
    var answer = '';
    let i = 0, j = 0;
    
    for(i = 0; i < s.length; i++){
        let tmpASCII = s.charCodeAt(i);
        let skipCount = 0;
        for(j = 0; j < index + skipCount; j++){
            tmpASCII++;
            if(tmpASCII > 122) tmpASCII -= 26;
            if(skip.includes(String.fromCharCode(tmpASCII)))
                skipCount++;
        }
        answer = answer + String.fromCharCode(tmpASCII);
    }
    return answer;
}