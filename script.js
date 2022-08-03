// function shake(){
//     var eightBall = document.getElementById("eight-ball")
//     var messageText = document.getElementById("message")

//     if(messageText != null){
//         messageText.parentNode.removeChild(messageText)
//     }
//     eightBall.classList.add("shake")

//     setTimeout(function(){eightBall.classList.remove("shake");}, 2000)
//     setTimeout(function(){getFortune();}, 2000)
// }

// function getFortune(){

//     var fortunes = ["It is certain", "It is decidedly so", "Without a doubt",
//     "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely",
//     "Outlook good", "Yes", "Signs point to yes", "Don't count on it", "My reply is no",
//     "My sources say no", "Outlook not so good", "Very doubtful", "Reply hazy, try again",
//     "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Quit asking me questions!"];

//     var fortune = fortunes[Math.floor(Math.random() * fortunes.length)]

//     var parent = document.getElementById("fortune")
//     var newMessage = document.getElementsById("answer")
//     newMessage.setAttribute('answer', "message")
//     newMessage.innerHTML = "\""+fortune+"\""
//     parent.appendChild(newMessage)
// }

            
    var answers = ["It is certain", "It is decidedly so", "Without a doubt",
                    "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely",
                    "Outlook good", "Yes", "Signs point to yes", "Don't count on it", "My reply is no",
                    "My sources say no", "Outlook not so good", "Very doubtful", "Reply hazy, try again",
                    "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Quit asking me questions!"];
                
    window.onload = function(){
        var eight = document.getElementById("eight");
        var answer = document.getElementById("fortune");
        var eightball = document.getElementById("eight-ball");
        var question = document.getElementById("question");


        eightball.addEventListener("click", function() {
            if (question.value.length < 4) {
                alert('Enter a question!');
            } else {
                eight.innerText = "";
                var num = Math.floor(Math.random() * Math.floor(answers.length));
                answer.innerText = answers[num];
            }
        });
    }