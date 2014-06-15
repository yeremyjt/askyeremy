<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ask Yeremy</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />        
        <link href='http://fonts.googleapis.com/css?family=Playfair+Display+SC' rel='stylesheet' type='text/css'>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>        
    </head>
    
    <body>
        <div id="wrapper"">
            <h1>Ask Yeremy</h1>          
            <form>
                <input type="text" name="hiddenAnswer" class="textInput" id="hiddenAnswer" /> <br />                      
                <label for="question">What is your request?</label> <input type="text" name="question" class="textInput" id="question" /> <br />
                <input id="answerButton" name="answerButton" class="actionButton" type="button" value="Answer" /> <br />
            </form>
            <div id="answerArea">
                <input type="textfield" class="textInput" id="answerField" name="answerField"/>
            </div>
        </div>
    </body>
</html>
