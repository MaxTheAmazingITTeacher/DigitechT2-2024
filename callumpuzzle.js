// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // return array;
}

// Function to create the sliding puzzle
function createSlidingPuzzle() {
    const puzzleContainer = document.getElementById('puzzle-container');
    // const letters = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, ' ']);
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", ' '];
    //shuffleArray(letters);
    for (let i = 0; i < letters.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = letters[i];
        puzzleContainer.appendChild(square);

        if (letters[i] == ' ') {
            square.classList.add('gap');
        }


        square.addEventListener('click', () => {
            swap(puzzleContainer, square);
        });
    }


}

function swap(puzzleContainer, square) {
    const gap = document.querySelector('.gap');
    const gapIndex = Array.from(puzzleContainer.children).indexOf(gap);
    const squareIndex = Array.from(puzzleContainer.children).indexOf(square);



    if (isAdjacent(gapIndex, squareIndex)) {
        // swap the positions of the elements at gapIndex and squareIndex
        [puzzleContainer.children[gapIndex].innerHTML, puzzleContainer.children[squareIndex].innerHTML] = [puzzleContainer.children[squareIndex].innerHTML, puzzleContainer.children[gapIndex].innerHTML];
        // swap the classes of the elements at gapIndex and squareIndex
        [puzzleContainer.children[gapIndex].className, puzzleContainer.children[squareIndex].className] = [puzzleContainer.children[squareIndex].className, puzzleContainer.children[gapIndex].className];

        // check if the puzzle is solved
        if (isSolved(puzzleContainer)) {
            window.location.href = "callumpuzzle1.html";
        } 
    }
}

// Function to check if two squares are adjacent
function isAdjacent(gapIndex, squareIndex) {
    const row1 = Math.floor(gapIndex / 3);
    const col1 = gapIndex % 3;
    const row2 = Math.floor(squareIndex / 3);
    const col2 = squareIndex % 3;


    var isItAdjacent = (
        (Math.abs(row1 - row2) === 1 && col1 === col2) ||
        (Math.abs(col1 - col2) === 1 && row1 === row2)
    );



    return isItAdjacent;
}

// Call the function to create the sliding puzzle
createSlidingPuzzle();

// Function to check if the puzzle is solved
function isSolved(puzzleContainer) {
    const squares = puzzleContainer.querySelectorAll('.square');
    const letters = Array.from(squares).map(square => square.textContent);
    const solution = ["A", "B", "C", "D", "E", "F", "G", "H", ' '];

    // Check if the letters are in numeric order
    for (let i = 0; i < letters.length - 1; i++) {
        console.log(letters[i], i + 1);
        if (letters[i] != solution[i]) {
            return false;
        }
    }

    return true;
}
function redirectToAnotherPage() {
    window.location.href = "callumpuzzle1.html"; // Replace with the URL of the page you want to redirect to
}

