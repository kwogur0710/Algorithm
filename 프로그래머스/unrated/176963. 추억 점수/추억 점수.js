function solution(name, yearning, photo) {
    let photoScore = [];
    let i = 0;
    for(i=0;i<photo.length; i++){
        let tmpScore = 0;
        photo[i].map((names)=>{
            name.some((item, index)=> {
                if(item === names) {
                    tmpScore+=yearning[index];
                }
            });
        })
            photoScore.push(tmpScore)
    }
    
    return photoScore;
}