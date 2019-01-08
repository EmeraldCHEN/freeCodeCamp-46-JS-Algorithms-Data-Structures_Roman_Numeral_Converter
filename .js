function convertToRoman(num){
  // Create two arrays with default conversion with matching indices
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let convertedNum ='';
   
    for(let index = 0; index < decimalValue.length; index++){
        while(decimalValue[index] <= num){
            convertedNum += romanNum[index];
            num -= decimalValue[index];
        }
    }
    return convertedNum;
}










// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter/
