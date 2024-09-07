const styles = ["one", "two", "three"];

let addMode = true;
let currentIndex = 0;
function pimp() {
    const button = document.querySelector('.button');


    if (!addMode) {
        button.classList.toggle('unpimp');
        if (currentIndex > 0) {
            currentIndex--;
            button.classList.remove(styles[currentIndex]);
        }

        if (currentIndex === 0) {
            addMode = true;
        }
        button.classList.toggle('unpimp');
        return;
    }

    if (currentIndex < styles.length) {
        button.classList.add(styles[currentIndex]);
        currentIndex++;
    }

    if (currentIndex === styles.length) {
        addMode = false;
    }
}

document.addEventListener('click', pimp);
