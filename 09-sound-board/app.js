const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(function (sound) {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();

        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSounds() {
    sounds.forEach(sound => {
        const theSound = document.getElementById(sound);

        theSound.pause();
        theSound.currentTime = 0;
    })
}