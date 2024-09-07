
export function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 120; i++) {
        const letterDiv = document.createElement("div");
        letterDiv.classList.add('letter');  
        const randomLetter = alphabet[random(0, 25)];
        letterDiv.textContent = randomLetter;

        const fontSize = 10 + i +"px";
        letterDiv.style.fontSize = `${fontSize}`;

        if (i < 40) {
            letterDiv.style.fontWeight = '300';
        } else if (i < 80 ) {
            letterDiv.style.fontWeight = '400';
        } else {
            letterDiv.style.fontWeight = '600';
        }

        document.body.appendChild(letterDiv);
    }
}

const random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

