var cardData = {
    name: 'Abu Bakar',
    cardNo: 123456,
    dates: {
        dateOfBirth: "26,Apriil,2006",
        expireDate: "21,Dec,2036"
    }
};
console.log(cardData);
function tech(first, second) {
    if (second) {
        return first + " " + second;
    }
    else {
        return first;
    }
}
var result = tech("ali", "zain");
console.log(result);
