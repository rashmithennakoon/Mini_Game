var countdown = 60; 
        var correctAnswer1 = 26;
        var correctAnswer2 = 44;
        var correctAnswer3 = 14;
        var correctAnswer4 = 57;
        var correctAnswer5 = 17;
        var correctAnswer6 = 118;
        var correctAnswer7 = 14;
        var correctAnswer8 = 103;
        var correctAnswer9 = 189;
        var correctAnswer10 = 107; 
        var totalMarks = 0;

        function updateTimer() {
            var timerElement = document.getElementById('timer');

            var minutes = Math.floor(countdown / 60).toString().padStart(2, '0');
            var seconds = (countdown % 60).toString().padStart(2, '0');

            timerElement.textContent = minutes + ':' + seconds;

            // Check if the countdown has reached zero
            if (countdown <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = 'Time is up!';
                var c = document.getElementById("submit");
                c.style.visibility = "hidden";
                var x = document.getElementsByClassName("lb");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.visibility = "hidden";
                }
                var y = document.getElementsByClassName("bo");
                for (var j = 0; j < y.length; j++) {
                    y[j].style.visibility = "hidden";
                }
                var a = document.getElementsByTagName("h1");
                for (var i = 0; i < a.length; i++) {
                    a[i].style.visibility = "hidden";
                }
                var d = document.getElementsByTagName("h2");
                for (var i = 0; i < d.length; i++) {
                    d[i].style.visibility = "hidden";
                }
                displayResult();
            } else {
                countdown--;
            }
        }

        // Update the timer every second
        var timerInterval = setInterval(updateTimer, 1000);

        // Function to check the answers
        function checkAnswers() {
            var answer1Input = document.getElementById('nam1');
            var answer2Input = document.getElementById('nam2');
            var answer3Input = document.getElementById('nam3');
            var answer4Input = document.getElementById('nam4');
            var answer5Input = document.getElementById('nam5');
            var answer6Input = document.getElementById('nam6');
            var answer7Input = document.getElementById('nam7');
            var answer8Input = document.getElementById('nam8');
            var answer9Input = document.getElementById('nam9');
            var answer10Input = document.getElementById('nam10');
            var resultElement = document.getElementById('result');
        
            if (parseInt(answer1Input.value) === correctAnswer1) {
                totalMarks += 10;
            }
        
            if (parseInt(answer2Input.value) === correctAnswer2) {
                totalMarks += 10;
            }
            if (parseInt(answer3Input.value) === correctAnswer3) {
                totalMarks += 10;
            }
            if (parseInt(answer4Input.value) === correctAnswer4) {
                totalMarks += 10;
            }
            if (parseInt(answer5Input.value) === correctAnswer5) {
                totalMarks += 10;
            }
            if (parseInt(answer6Input.value) === correctAnswer6) {
                totalMarks += 10;
            }
            if (parseInt(answer7Input.value) === correctAnswer7) {
                totalMarks += 10;
            }
            if (parseInt(answer8Input.value) === correctAnswer8) {
                totalMarks += 10;
            }
            if (parseInt(answer9Input.value) === correctAnswer9) {
                totalMarks += 10;
            }
            if (parseInt(answer10Input.value) === correctAnswer10) {
                totalMarks += 10;
            }
        
            displayResult();

            var x = document.getElementsByClassName("lb");
            for (var i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            }
            var y = document.getElementsByClassName("bo");
            for (var j = 0; j < y.length; j++) {
                y[j].style.visibility = "hidden";
            }
            var a = document.getElementsByTagName("h1");
            for (var i = 0; i < a.length; i++) {
                a[i].style.visibility = "hidden";
            }
            var d = document.getElementsByTagName("h2");
            for (var i = 0; i < d.length; i++) {
                    d[i].style.visibility = "hidden";
            }
            var b = document.getElementById("timer");
            b.style.visibility = "hidden";
            var c = document.getElementById("submit");
            c.style.visibility = "hidden";

        }
        // Function to display the result
        function displayResult() {
            var resultElement = document.getElementById('result');
            resultElement.textContent = 'Your Total Score: ' + totalMarks + ' Marks';
        }