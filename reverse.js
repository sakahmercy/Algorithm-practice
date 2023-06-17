//reverse
function reverseStrings(str){
    let lastPointer= arr.length-1
    let firstPointer= []
    for (let i = 0; i<str.length; i++){
        let value1=arr[i]
        if (firstPointer==lastPointer-1){
            reverse.push(lastPointer(value1[i]))
        }
        
    }
    return reverse;
}
 let myArray=[1,2,3,4,5,6]
 console.log(myArray);

 function reverseStrings(str){
    let finalReverse=[]
    let lastPosition=str.length-1
    for(let i = lastPosition; i>=0; i--){
        let currentLatter=str[i]
        finalReverse.push(currentLatter)

    }
    return finalReverse.join("")
 }
 let myString=("Harmony")
 let results=reverseStrings(myString)
 console.log(results)

 