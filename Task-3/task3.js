function palindrome (str){
    let d = str.length-1;
    for(let i =0 ; i<d/2 ;i++){
        let z=str[i]
        let a=str[d-i]
        if(z!=a){
            return false
        }
        return true
    }


} 
console.log("task3:");
function palindrome( str )
  {
    let answer =  palindrome(str);
    if( answer == true )
    {
      console.log(" true" );
    }
    else
    {
      console.log("false");
    }
  }
  // test variable
  let m = 'ABCDCBA';
  palindrome(m);

  document.getElementById("task3").innerHTML= 'the right answer is in the console';