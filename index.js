var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.green.bold("Welcome to the prime number checking program!"))

console.log("")

var name = readlineSync.question(`What is your name?
`)

console.log("")
console.log(`Welcome ${chalk.cyan(name.toUpperCase())} !`)
console.log("")

var checkForPrime = (date) =>{
  for(var i = 2; i < date; i++) {
      if(date % i === 0){
        console.log("Your birth date is not a prime number : "+ date)
        console.log("")
        playAgain()
        return
      }
    }

    if(date > 1){
      console.log("Hurray! Your birth date is a Prime Number : "+ date)
      console.log("")
      console.log(chalk.bgCyan("You can share this record with your friends in social media"))
      console.log("")
      playAgain()
      return  
    }


} 

var playAgain = () =>{
  var ans = readlineSync.keyInYN("Do you want to check again?")
  console.log("")
  if(ans){
    console.clear()
    play()
  }else{
    console.log("Thank you for checking!")
  }
}

var play = () => {
        var date = readlineSync.question(`In which date were you born? ${chalk.yellow("eg:dd/mm")}
`)

      console.log("")

      var regex = /[0-3][0-9]\/[0-1][0-9]/

      if(date.length < 6){
          var res = date.match(regex)
          if(res){

            var dateArr = date.split('/')

            if(dateArr[1] === '02' ){

              if(parseInt(dateArr[0]) < 30){

                var dateString = dateArr[0]+dateArr[1]
                checkForPrime(parseInt(dateString))

              }else{
                console.log("Date cannot be more than 29 in this month!")
              }

            }else{
                if(parseInt(dateArr[0]) < 32){

                    var dateString = dateArr[0]+dateArr[1]
                    checkForPrime(parseInt(dateString))

                }else{
                    console.log('Date cannot be more than 31 in this month')
                }
            }

          }else{
            console.log("Incorrect Date! eg: dd/mm")
          }
      }else{
        console.log("Incorrect Date! eg: dd/mm")
      }

      console.log("")
}

play()
