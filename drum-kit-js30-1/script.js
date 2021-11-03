const data = [
    {
        sound: "./sounds/clap.wav",
        character: "a",
        name: "clap",
        keycode: 65
    },
    {
        sound: "./sounds/hihat.wav",
        character: "s",
        name: "hithat",
        keycode: 83
    },
    {
        sound: "./sounds/kick.wav",
        character: "d",
        name: "kick",
        keycode: 68
    },
    {
        sound: "./sounds/openhat.wav",
        character: "f",
        name: "openhat",
        keycode: 70
    },
    {
        sound: "./sounds/boom.wav",
        character: "g",
        name: "boom",
        keycode: 71
    },
    {
        sound: "./sounds/ride.wav",
        character: "h",
        name: "ride",
        keycode: 72
    },
    {
        sound: "./sounds/snare.wav",
        character: "j",
        name: "snare",
        keycode: 74
    },
    {
        sound: "./sounds/tom.wav",
        character: "k",
        name: "tom",
        keycode: 75
    },
    {
        sound: "./sounds/tink.wav",
        character: "l",
        name: "tink",
        keycode: 76
    }
]

const body = document.querySelector("#sound");

let htmlList = [];

const createHtmlElment = (item) => {
    const divTag = document.createElement('div');
    const divTag2 = document.createElement('div');
    const h3Tag = document.createElement('kbd');
    const h6Tag = document.createElement('span');
    divTag.setAttribute('data-key', item.keycode);
    divTag.setAttribute('class', "sound-box")
    const h3Text = document.createTextNode(item.character);
    h3Tag.setAttribute("class", "sound-chracter");
    h3Tag.appendChild(h3Text);
    h6Tag.setAttribute("class", "sound-name");
    const h6Text = document.createTextNode(item.name);
    h6Tag.appendChild(h6Text);
    divTag2.appendChild(h3Tag);
    divTag2.appendChild(h6Tag);
    divTag.appendChild(divTag2);
    document.querySelector("#sound").appendChild(divTag);
}
const createAuidoElement = (item) => {
    const audioTag = document.createElement("audio");
    audioTag.setAttribute("src", item.sound);
    audioTag.setAttribute('data-key', item.keycode);
    body.append(audioTag);
}
data.forEach(item => createHtmlElment(item));
data.map(item => createAuidoElement(item));

const eventkeyCode = (e) => {
    let Div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let Audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!Audio) return;
    setTimeout(() => {
        Audio.play();
        Div.className = "sound-box-active";
        setTimeout(() => {
            Div.className = "sound-box";
        }, 200)
    }, 100)
}
const eventkeyCodew = (e) => {
    let Div = document.querySelector(`div[data-key="${e}"]`);
    let Audio = document.querySelector(`audio[data-key="${e}"]`);
    if (!Audio) return;
    setTimeout(() => {
        Audio.play();
        Div.className = "sound-box-active";
        setTimeout(() => {
            Div.className = "sound-box";
        }, 200)
    }, 100)
}

window.addEventListener("keydown", eventkeyCode);
// document.querySelector(".sound-box").addEventListener("click", (e)=>eventkeyCodew(e.target.getAttribute("data-key")));
document.querySelector(".sound-box").addEventListener("click", (e)=>console.log(e));



