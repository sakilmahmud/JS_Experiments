/* 1. Return the Sum of Two Numbers */

/* function addition(number1, number2){
    const sum = parseInt(number1) + parseInt(number2);

    return sum;
} */

const addition = (number1, number2)=>{
    const sum = parseInt(number1) + parseInt(number2);

    return sum;
}

/* 2. Convert Minutes into Seconds */
const convert = (minutes)=>{
    const minute = 60; // 1 minute = 60 seconds
    const seconds = parseInt(minutes) * minute;

    return seconds;
}

/* 3. Return the Next Number from the Integer Passed */
const nextNumber = (number)=>{
    const nextNumber = parseInt(number) + 1;

    return nextNumber;
}

/* 4. Area of a Triangle */
const triArea = (base,height)=>{
    
    if ((typeof base != "number") || (typeof height != "number")){
        return "Please enter a positive integer inputs";
    }

    const triangleArea = (0.5 * parseInt(base) * parseInt(height)) ;

    return triangleArea;
}

/* 5. Return the First Element in an Array */
const getFirstValue = (arr)=>{
    
    const getFirstValue = (Array.isArray(arr)) ? arr[0] : "This is not an array!";

    return getFirstValue;
}

/* 6. Convert Age to Days */
const calcAge = (age)=>{
    const year = 365;
    
    console.log(typeof age);

    if ((typeof age != "number") || age < 1){
        return "Please enter a positive integer inputs";
    }

    const calculatedDays = (year * parseInt(age)) ;

    return calculatedDays;
}

/* 7. Power Calculator */
const circuitPower = (voltage,current)=>{
    
    if ((typeof voltage != "number") || (typeof current != "number")){
        return "Please enter a positive integer inputs";
    }
    const calculatedPower = parseInt(voltage) * parseInt(current);

    return calculatedPower;
}

/* 8. Maximum Edge of a Triangle */
const nextEdge = (side1 ,side2)=>{
    
    if ((typeof side1 != "number") || (typeof side2 != "number")){
        return "Please enter a positive integer inputs";
    }
    const nextEdge = (parseInt(side1) + parseInt(side2)) - 1;

    return nextEdge;
}

/* 9. Return the Remainder from Two Numbers */
const remainder = (number1, number2)=>{
    
    if ((typeof number1 != "number") || (typeof number2 != "number")){
        return "Please enter a positive integer inputs";
    }
    const remainder = (parseInt(number1) % parseInt(number2));

    return remainder;
}

/* 10. Return Something to Me! */
const giveMeSomething = (text)=>{
    const combindText = "something "+text;
    return combindText;
}

/* 11. Square of a number! */
const squared = (num)=>{
    
    if ((typeof num != "number")){
        return "Please enter a positive integer inputs";
    }

    const sqrNumber = parseInt(num) * parseInt(num);

    return sqrNumber;
}

/* 12. Is the Number Less than or Equal to Zero?! */
const lessThanOrEqualToZero = (num)=>{
    
    return num <= 0;
}

/* 13. Sum of Polygon Angles */
const sumPolygon = (num)=>{

    if ((typeof num != "number") || num < 3){
        return "Please enter a number which is greater than 2.";
    }

    const polygonNumber = (parseInt(num)-2) * 180;

    return polygonNumber;
}

/* 14. Basic Variable Assignment */
const nameString = (name)=>{

    const concateName = name + "Coder";

    return concateName;
}

/* 15. Less Than 100 */
const lessThan100 = (num1, num2)=>{

    if ((typeof num1 != "number") || (typeof num2 != "number")){
        return "Please enter a positive integer inputs";
    }

    const lessThan100 = ((parseInt(num1) + parseInt(num2)) < 100) ? true : false;

    return lessThan100;
}

/** Result Section */

//console.log("addition(10,15) & Output: 25");
console.log("Sum of Two Numbers");
console.log(addition(10,15))
console.log("=========== End OF No. 1 ============");

//console.log("convert(5) & Output: 300");
console.log("Convert Minutes into Seconds");
console.log(convert(5))
console.log("============ End OF No. 2 ===========");

console.log("Next Number from the Integer Passed");
console.log(nextNumber(-5))
console.log("============ End OF No. 3 ===========");

console.log("Area of a Triangle");
console.log(triArea(7,4))
console.log("========== End OF No. 4 =============");

console.log("First Element in an Array");
console.log(getFirstValue([15, 2, 3]))
console.log("========== End OF No. 5 =============");

console.log("Converting Age to Days");
console.log(calcAge(10))
console.log("========== End OF No. 6 =============");

console.log("Power Calculator");
console.log(circuitPower(110, 3))
console.log("========== End OF No. 7 =============");

console.log("Maximum Edge of a Triangle");
console.log(nextEdge(9, 2))
console.log("========== End OF No. 8 =============");

console.log("Remainder from Two Numbers");
console.log(remainder(5, 5))
console.log("========== End OF No. 9 =============");

console.log("Return Something to Me!");
let text = "something";
console.log(giveMeSomething(text));
console.log("========== End OF No. 10 =============");

console.log("Square of a number!");
let num = 5;
console.log(squared(num));
console.log("========== End OF No. 11 =============");

console.log("Number Less than or Equal to Zero!");
let randomNmber = -8;
console.log(lessThanOrEqualToZero(randomNmber));
console.log("========== End OF No. 12 =============");

console.log("Sum of Polygon Angles!");
let randomNum = 6;
console.log(sumPolygon(randomNum));
console.log("========== End OF No. 13 =============");

console.log("Basic Variable Assignment!");
let fullname = "javaScript";
console.log(nameString(fullname));
console.log("========== End OF No. 14 =============");

console.log("Less Than 100!");
console.log(lessThan100(21, 95));
console.log("========== End OF No. 15 =============");
