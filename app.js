// app.js

// Variables d'état
let currentContinent = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let quizErrors = []; // Stocke les erreurs du quiz actuel
let timerInterval; 
const TIME_PER_QUESTION = 15; // Temps par question en secondes
let bestScores = {}; 

// Références aux éléments HTML
const continentSelectionDiv = document.getElementById('continent-selection');
const quizSectionDiv = document.getElementById('quiz-section');
const resultsSectionDiv = document.getElementById('results-section');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const quizTitle = document.getElementById('quiz-title');
const progressionText = document.getElementById('progression');
const finalScoreText = document.getElementById('final-score');
const timerDisplay = document.getElementById('timer'); 
const errorSummaryDiv = document.getElementById('error-summary');
const errorList = document.getElementById('error-list');

// Références aux éléments Audio (maintenant .wav)
const audioCorrect = document.getElementById('audio-correct');
const audioIncorrect = document.getElementById('audio-incorrect');

// --- Fonctions de Gestion du Score Local ---
function loadBestScores() {
    const storedScores = localStorage.getItem('capitalQuizBestScores');
    if (storedScores) {
        bestScores = JSON.parse(storedScores);
    } else {
        bestScores = {};
    }
}

function saveBestScore() {
    const continentKey = currentContinent;
    const currentBest = bestScores[continentKey] || 0; 

    if (score > currentBest) {
        bestScores[continentKey] = score;
        localStorage.setItem('capitalQuizBestScores', JSON.stringify(bestScores));
        return true; 
    }
    return false; 
}

// --- Fonction Utilitaire (Mélange) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Fonctions de Gestion du Chronomètre et Timeout ---
function stopTimer() {
    clearInterval(timerInterval);
}

function handleTimeout() {
    const question = currentQuestions[currentQuestionIndex];
    checkAnswer(null, question.capitale); 
}

function startTimer() {
    let timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = `Temps restant : ${timeLeft}s`;
    timerDisplay.style.color = '#dc3545'; // Couleur initiale
    stopTimer(); 

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

        if (timeLeft <= 5) {
             timerDisplay.style.color = 'orange'; // Alerte visuelle
        }
        
        if (timeLeft <= 0) {
            handleTimeout();
        }
    }, 1000); 
}


// --- 1. Générer la Sélection des Continents ---
function displayContinentSelection() {
    quizSectionDiv.style.display = 'none';
    resultsSectionDiv.style.display = 'none';
    continentSelectionDiv.style.display = 'block';

    continentSelectionDiv.innerHTML = '<h2>Choisissez un Continent pour commencer :</h2>';

    quizData.forEach(continentData => {
        const button = document.createElement('button');
        button.textContent = continentData.continent;
        button.onclick = () => startQuiz(continentData.continent);
        continentSelectionDiv.appendChild(button);
    });
}


// --- 2. Démarrer le Quiz ---
function startQuiz(continentName) {
    currentContinent = continentName;
    const continentData = quizData.find(d => d.continent === continentName);
    score = 0;
    currentQuestionIndex = 0;
    quizErrors = []; // RàZ des erreurs
    currentQuestions = continentData.questions;

    continentSelectionDiv.style.display = 'none';
    quizSectionDiv.style.display = 'block';
    resultsSectionDiv.style.display = 'none';
    quizTitle.textContent = `Quiz : ${continentName}`;

    displayQuestion();
}


// --- 3. Afficher une Question ---
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        stopTimer();
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    startTimer(); 

    questionText.textContent = `Quelle est la capitale de : ${question.pays} ?`;
    progressionText.textContent = `Question ${currentQuestionIndex + 1} sur ${currentQuestions.length}`;

    const options = [question.capitale, ...question.options_fausses];
    const shuffledOptions = shuffleArray(options); 

    optionsContainer.innerHTML = ''; 
    optionsContainer.style.pointerEvents = 'auto';

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = (e) => checkAnswer(option, question.capitale, e.target); 
        optionsContainer.appendChild(button);
    });
}


// --- 4. Vérifier la Réponse ---
function checkAnswer(selectedOption, correctAnswer, clickedButton = null) {
    stopTimer(); 
    optionsContainer.style.pointerEvents = 'none';

    let isCorrect = (selectedOption === correctAnswer);

    if (!isCorrect) {
        // Enregistre l'erreur
        const question = currentQuestions[currentQuestionIndex];
        quizErrors.push({
            pays: question.pays,
            capitale: correctAnswer,
            reponseDonnee: selectedOption === null ? 'Aucune (Timeout)' : selectedOption
        });

        // Lecture audio avec réinitialisation
        audioIncorrect.currentTime = 0; 
        audioIncorrect.play();
        
        if (selectedOption === null) {
             timerDisplay.textContent = `Temps écoulé ! La réponse était...`;
        }
        
        // Feedback visuel
        if (clickedButton) clickedButton.classList.add('option-incorrect');
        
        // Montrer la bonne réponse en vert
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('option-correct');
            }
        });

    } else {
        // Bonne réponse
        score++;
        // Lecture audio avec réinitialisation
        audioCorrect.currentTime = 0;
        audioCorrect.play();
        if (clickedButton) clickedButton.classList.add('option-correct');
    }

    // Passage à la question suivante
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500); 
}


// --- 5. Afficher les Résultats ---
function showResults() {
    quizSectionDiv.style.display = 'none';
    resultsSectionDiv.style.display = 'block';
    
    // 1. Gestion des meilleurs scores
    const isNewRecord = saveBestScore(); 
    let resultMessage = `Votre score pour le continent ${currentContinent} est : **${score} / ${currentQuestions.length}**`;
    const bestScoreForContinent = bestScores[currentContinent];

    if (isNewRecord) {
        resultMessage += `<br><br>🌟 **NOUVEAU RECORD PERSONNEL !** 🌟<br>(${bestScoreForContinent} / ${currentQuestions.length})`;
    } else if (bestScoreForContinent) {
        resultMessage += `<br><br>Meilleur score enregistré : ${bestScoreForContinent} / ${currentQuestions.length}`;
    }

    finalScoreText.innerHTML = resultMessage; 

    // 2. Affichage des erreurs
    errorList.innerHTML = ''; 
    if (quizErrors.length > 0) {
        errorSummaryDiv.style.display = 'block';
        quizErrors.forEach(error => {
            const li = document.createElement('li');
            const userResponse = error.reponseDonnee === 'Aucune (Timeout)' 
                ? `<span style="color: grey;">${error.reponseDonnee}</span>`
                : `Vous avez répondu : <span style="font-weight: bold;">${error.reponseDonnee}</span>`;
            
            li.innerHTML = `**${error.pays}** : La capitale est **${error.capitale}**. (${userResponse})`;
            errorList.appendChild(li);
        });
    } else {
        errorSummaryDiv.style.display = 'none';
    }
}


// --- Lancement de l'application ---
document.addEventListener('DOMContentLoaded', () => {
    loadBestScores(); // Charge les records au démarrage
    displayContinentSelection();
});