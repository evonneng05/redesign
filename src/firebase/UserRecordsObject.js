export class UserRecords{
    constructor (user){
        this.name= user.name;
        this.score= user.score;
        this.uid=user.uid;
    }
    setScore(level,score){
        this.score[level]=score
    }
}
