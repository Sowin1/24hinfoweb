document.addEventListener('DOMContentLoaded', function() {

        const scoreDisplayElement = document.getElementById('scoreValue');

        function getScore() {
            let score = localStorage.getItem('userScore');
            if (score === null) { 
                localStorage.setItem('userScore', '0');
                return 0;
            }
            return parseInt(score);
        }

        function updateScoreDisplay() {
            if (scoreDisplayElement) {
                scoreDisplayElement.textContent = getScore();
            }
        }

        function addPoints(points) {
            let currentScore = getScore();
            currentScore += points;
            localStorage.setItem('userScore', currentScore);
            updateScoreDisplay();
        }

        updateScoreDisplay();

        const choiceLinks = document.querySelectorAll('.options-list li a');

        choiceLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); 

                const pointsGagnes = parseInt(this.dataset.points);

                if (!isNaN(pointsGagnes)) {
                    addPoints(pointsGagnes);
                }

                window.location.href = this.href;
            });
        });

        const resetButton = document.getElementById('resetScoreButton');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                localStorage.setItem('userScore', '0');
                updateScoreDisplay();
            });
        }
    });