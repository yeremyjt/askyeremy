$(document).ready(function() {    
    $("#hiddenMessage").focus();
    var flag = true;
    var hiddenAnswer = "";
    var messageArray = new Array("Y", "e", "r", "e", "m", "y", ",", " ", "p", "l", "e", "a", "s", "e", " ", "a", "n", "s", "w", "e", "r", ".", ".", ".");
    var messageCount = 0;
    var fakeText = "";
    var count = 0; 
    var recording = true; 
    var dotCount = 0;
    var tabCount = 0;
    
     
    document.addEventListener('keydown', function(event) {        
        $("#hiddenMessage").blur();
        if(event.keyCode == 190){            
            dotCount++;
        }
    
        if(event.keyCode == 9 && tabCount == 0){
            $("#hiddenAnswer").focus();       
            tabCount++;
        }
        
        if(dotCount == 1){
            //Filling the Hidden answer
            var tempHiddenAnswer = hiddenAnswer;
            var newChar = String.fromCharCode(event.keyCode);
            hiddenAnswer = tempHiddenAnswer + newChar;                                   
        }
    
        if(messageCount <= (messageArray.length - 1)){
            //Typing: "Yeremy, please answer"            
            var newCharFake = messageArray[count];
            fakeText = fakeText + newCharFake;
            $("#hiddenAnswer").val("");

            $("#hiddenAnswer").val(fakeText);
            messageCount++;
            count++;
        }    
            
    });
        
    
        
    $("#answerButton").click(function(){  
        hiddenAnswer = hiddenAnswer.substring(1, hiddenAnswer.length);
        $("#answerField").val(hiddenAnswer);
    });
});

