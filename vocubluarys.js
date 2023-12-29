var countdown = 60; 
        var correctAnswer1 = "Waterfall";
        var correctAnswer2 = "Farmer";
        var correctAnswer3 = "Climb";
        var correctAnswer4 = "Carpenter";
        var correctAnswer5 = "Cabbage";
        var correctAnswer6 = "Customer";
        var correctAnswer7 = "Breakfast";
        var correctAnswer8 = "Jupiter";
        var correctAnswer9 = "Calculator";
        var correctAnswer10 = "Manager";
        var correctAnswer11 = "Television";
        var correctAnswer12 = "Competitor";
        var correctAnswer13 = "Engineer";
        var correctAnswer14 = "Principal";
        var correctAnswer15 = "Environment";
        var correctAnswer16 = "Ground";
        var correctAnswer17 = "Rainbow";
        var correctAnswer18 = "Professor";
        var correctAnswer19 = "Scissor";
        var correctAnswer20 = "Crayons"; 
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
                var x = document.getElementsByClassName("img");
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
                var p = document.getElementsByClassName("divv");
                for (var i = 0; i < p.length; i++) {
                    p[i].style.visibility = "hidden";
                }
                var q = document.getElementsByClassName("div1");
                for (var i = 0; i < q.length; i++) {
                    q[i].style.visibility = "hidden";
                }
                var r = document.getElementsByClassName("div2");
                for (var i = 0; i < r.length; i++) {
                    r[i].style.visibility = "hidden";
                }
                displayResult();
            } else {
                countdown--;
            }
        }

        // Update the timer every second
        var timerInterval = setInterval(updateTimer, 1000);

        var mybutton = document.getElementById("submit");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // Function to check the answers
        function checkAnswers() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;

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
            var answer11Input = document.getElementById('nam11');
            var answer12Input = document.getElementById('nam12');
            var answer13Input = document.getElementById('nam13');
            var answer14Input = document.getElementById('nam14');
            var answer15Input = document.getElementById('nam15');
            var answer16Input = document.getElementById('nam16');
            var answer17Input = document.getElementById('nam17');
            var answer18Input = document.getElementById('nam18');
            var answer19Input = document.getElementById('nam19');
            var answer20Input = document.getElementById('nam20');
            var resultElement = document.getElementById('result');
        
            if (answer1Input.value === correctAnswer1) {
                totalMarks += 10;
            }
        
            if (answer2Input.value === correctAnswer2) {
                totalMarks += 10;
            }
            if (answer3Input.value === correctAnswer3) {
                totalMarks += 10;
            }
            if (answer4Input.value === correctAnswer4) {
                totalMarks += 10;
            }
            if (answer5Input.value === correctAnswer5) {
                totalMarks += 10;
            }
            if (answer6Input.value === correctAnswer6) {
                totalMarks += 10;
            }
            if (answer7Input.value === correctAnswer7) {
                totalMarks += 10;
            }
            if (answer8Input.value === correctAnswer8) {
                totalMarks += 10;
            }
            if (answer9Input.value === correctAnswer9) {
                totalMarks += 10;
            }
            if (answer10Input.value === correctAnswer10) {
                totalMarks += 10;
            }
            if (answer11Input.value === correctAnswer11) {
                totalMarks += 10;
            }
            if (answer12Input.value === correctAnswer12) {
                totalMarks += 10;
            }
            if (answer13Input.value === correctAnswer13) {
                totalMarks += 10;
            }
            if (answer14Input.value === correctAnswer14) {
                totalMarks += 10;
            }
            if (answer15Input.value === correctAnswer15) {
                totalMarks += 10;
            }
            if (answer16Input.value === correctAnswer16) {
                totalMarks += 10;
            }
            if (answer17Input.value === correctAnswer17) {
                totalMarks += 10;
            }
            if (answer18Input.value === correctAnswer18) {
                totalMarks += 10;
            }
            if (answer19Input.value === correctAnswer19) {
                totalMarks += 10;
            }
            if (answer20Input.value === correctAnswer20) {
                totalMarks += 10;
            }
        
            displayResult();

            var c = document.getElementById("submit");
                c.style.visibility = "hidden";
                var x = document.getElementsByClassName("img");
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
                var p = document.getElementsByClassName("divv");
                for (var i = 0; i < p.length; i++) {
                    p[i].style.visibility = "hidden";
                }
                var q = document.getElementsByClassName("div1");
                for (var i = 0; i < q.length; i++) {
                    q[i].style.visibility = "hidden";
                }
                var r = document.getElementsByClassName("div2");
                for (var i = 0; i < r.length; i++) {
                    r[i].style.visibility = "hidden";
                }
                var b = document.getElementById("timer");
                b.style.visibility = "hidden";

        }
        // Function to display the result
        function displayResult() {
            var resultElement = document.getElementById('result');
            resultElement.textContent = 'Your Total Score: ' + totalMarks + ' Marks';
        }