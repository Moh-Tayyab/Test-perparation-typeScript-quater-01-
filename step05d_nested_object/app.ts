
type Card = {
    name: string;
    cardNo: number;
    dates:{ // nested object
        dateOfBirth: string;
        expireDate: string;    
    }

}

let StudentCard: Card = {
    name: 'Abu Bakar',
    cardNo: 123456,
    dates:{
dateOfBirth: "26,Apriil,2006",
expireDate: "21,Dec,2036"  }
}

console.log(StudentCard);


