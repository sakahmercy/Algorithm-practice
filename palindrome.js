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