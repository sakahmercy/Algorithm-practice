function isPalindromes(str){
        let stack=[]
        for(let i=0;i<str.length;i++){
            let value1=str[i]
            stack.push(value1)
        
        }
      
        for(let i=0; i<str.length; i++){
            let value3=str[i]
             let stackTop=stack.pop()
            if(value3!==stackTop){
               return false
            }
            
        }
    return true
    }
    let myString=("madam")
    let result=isPalindromes(myString)
    console.log(result)


function findPalindromes(arr){
        let finalResults=[]
        for (let i = 0; i<arr.length; i++){
            let currentString=arr[i]
            let isAPalindrome=isPalindromes(currentString)
            if(isAPalindrome){
                finalResults.push(currentString)
            }
           
                
            }
            return finalResults;
            
    
        }
         let arr=["madam", "racecar", "dad", "girl", "boy"]
         console.log(findPalindromes(arr));


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
        
         