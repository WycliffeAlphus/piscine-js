
export function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const container = document.createElement('div');

    for (let i = 0; i < 120; i++) {
       
        const letterDiv = document.createElement("div");

        
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        
        letterDiv.textContent = randomLetter;
 const fontSize = 11 + ((130 - 11) / 119) * i; 
        letterDiv.style.fontSize = `${fontSize}px`;

        
        if (i < 40) {
            letterDiv.style.fontWeight = '300';
        } else if (i < 80) {
            letterDiv.style.fontWeight = '400';
        } else {
            letterDiv.style.fontWeight = '600';
        }

        
        container.appendChild(letterDiv);
    }
}
