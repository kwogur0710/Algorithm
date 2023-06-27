function solution(A,B){
    var answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);
    A.map((item, index)=>{
        answer += item * B[B.length - 1 - index];
    });
    return answer;
}