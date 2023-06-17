class School{
    constructor (Name, Department, Gender){
        this.Name=Name;
        this.Department=Department;
        this.Gender=Gender;
    }
    location(a){
        console.log(`School is located at${a}`)
    }
    getGender(){
        return this.Gender;
    }
    getStudentName(i){
        console.log(`student name is ${i}`)
    }
}

// instances
const S1 = new School ('books', 'Digital marketing', 'female');
const S2 = new School ('laptop', 'software Engineering','male');
const S3 = new School ('pen', 'Network and security', 'female')
console.log(S2.school())


//inheritance second exercise
 
class Bird{
    constructor(feather, size, color){
        this.feather=feather;
        this.size=size;
        this.color=color;
    }
    fly(){
        console.log(`can fly`)
    }
    getAttributes(){
        return {feather: this.feather, size: this.size, color: this.color}
    }
    
}

class Parrot extends Bird(){
    talk(){
        console.log(`they can talk`)
    }
}

class Hen extends Bird(){
    constructor(feather, size, color, lives='around the environment'){
        super(feather, size, color);
        this.lives=lives;
    }
    getOwner(){
        console.log(`Belongs to Paul`)
    }
    getAttributes(){
        return {feather: this.feather, size: this.size, color: this.color,lives: this.lives}
    }
}
//instances
let myParrot = new Parrot('wing feather', 'small', 'green')
let myHen = new Hen('tail feather', 'big', 'white')
console.log(myParrot.getAttributes())
console.log(myHen.getAttributes())