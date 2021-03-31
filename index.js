window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".beat");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "burlywood",
        "antiquewhite",
        "blueviolet",
        "chartreuse",
        "coral",
        "darkorange"
    ];

    pads.forEach((pad,index)=> {
        pad.addEventListener('click',function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createbubbles(index);
        });
    });
    const createbubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationed',function () {
            visual.removeChild(this);
        })
    };
});