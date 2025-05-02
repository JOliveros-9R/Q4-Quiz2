 // Function to toggle the instructions
        function toggleclickme() {
            var clickme = document.getElementById("clickme");         
        }

        // Function to calculate the grade and rating
        function calculateGrade() {
            // Fetch input values and convert to numbers
            var sub1 = parseInt(document.getElementById('Math').value);
            var sub2 = parseInt(document.getElementById('Science').value);
            var sub3 = parseInt(document.getElementById('English').value);

            // Calculate the average
            var ave = (sub1 + sub2 + sub3) / 3;

            // Determine the rating
            let rating;
            if (ave >= 94 && ave <= 100) {
                rating = "Excellent";
            } else if (ave >= 87 && ave < 94) {
                rating = "Above Satisfactory";
            } else if (ave >= 80 && ave < 87) {
                rating = "Satisfactory";
            } else if (ave >= 75 && ave < 80) {
                rating = "Needs Improvement";
            } else if (ave >= 70 && ave < 75) {
                rating = "Poor";
            } else {
                rating = "Invalid Input";
            }

            // Output the result
            alert(`Your average is ${ave.toFixed(2)} - ${rating}`);
        }

