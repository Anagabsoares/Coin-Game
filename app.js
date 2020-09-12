function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin')

const extractPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -2))

};

window.addEventListener('keyup', function (e) {
    if (e.key === "ArrowDown" || e.key === 'Down') {
        const currTop = extractPos(avatar.style.top);
        console.log(currTop)
        avatar.style.top = `${currTop + 50}px`
    } else if (e.key === "ArrowUp" || e.key === 'Up') {
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop - 50}px`
    } else if (e.key === "ArrowRight" || e.key === 'Right') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft + 50}px`;
        avatar.style.transform = 'scale(1,1)';
    } else if (e.key === "ArrowLeft" || e.key === 'Left') {
        const currLeft = extractPos(avatar.style.left);
        avatar.style.left = `${currLeft - 50}px`;
        avatar.style.transform = 'scale(-1,1)'
    }
    if (isTouching(avatar, coin)) moveCoin()
});

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerHeight);
    const y = Math.floor(Math.random() * window.innerWidth);
    coin.style.top = `${x}px`; //for height
    coin.style.left = `${y}px`; // for width

} //to move the coin be aware of the size of the page - hoe many pixels
//for that we use window.screen

moveCoin();



