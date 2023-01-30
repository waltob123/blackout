/* 
* This plugin was built by Desmond Asiedu Asamoah
* Date: 30/01/2023 12:00PM
* License: MIT
*/

// CONSTANTS
const TIME_THRESHOLD = 17;
const BTN_DAY_COLOR = '#fbfbff  ';
const BTN_NIGHT_COLOR = '#0d0106';
const BTN_DAY_TEXT = 'D';
const BTN_NIGHT_TEXT = 'N';

DEFAULT_CONFIGURATIONS = {
    nightBgColor: '#0d0106',
    dayBgColor: '#fbfbff',
    dayTextColor: '#0d0106',
    nightTextColor: '#fbfbff', 
}


function autoSetMode(configurations, body, btn) {
    const hourOfDay = new Date().getHours();
    if (hourOfDay >= TIME_THRESHOLD) {
        darkMode(btn, body, configurations);
    } else {
        dayMode(btn, body, configurations);
    }
}

function darkMode(btn, body, configurations) {
    btn.dataset.mode = 'night';
    btn.innerText = BTN_DAY_TEXT;
    btn.style.backgroundColor = BTN_DAY_COLOR;
    btn.style.color = BTN_NIGHT_COLOR;
    body.style.backgroundColor = configurations.nightBgColor;
    body.style.color = configurations.nightTextColor;
}

function dayMode(btn, body, configurations) {
    btn.dataset.mode = 'day';
    btn.innerText = BTN_NIGHT_TEXT;
    btn.style.backgroundColor = BTN_NIGHT_COLOR;
    btn.style.color = BTN_DAY_COLOR;
    body.style.backgroundColor = configurations.dayBgColor;
    body.style.color = configurations.dayTextColor;
}

function createBtn() {
    const btn = document.createElement('button');
    defaultBtnStyle(btn);
    return btn;
}

function toggleBtn(btn, body, configurations) {
    btn.addEventListener('click', e => {
        if (e.target.dataset.mode === 'day') {
            darkMode(btn, body, configurations);
        } else if (e.target.dataset.mode === 'night') {
            dayMode(btn, body, configurations);
        }
    })
}

function defaultBtnStyle(btn) {
    btn.style.width = '40px';
    btn.style.height = '40px';
    btn.style.position = 'fixed';
    btn.style.right = '5vw';
    btn.style.bottom = '5vh';
    btn.style.appearance = 'none';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '2px 2px 5px gray';
    btn.style.fontFamily = 'serif';
    btn.style.fontSize = '18px';
    btn.style.fontWeight = '700';
}

function init(configurations={}) {
    if (Object.keys(configurations).length <= 0) {
        configurations = DEFAULT_CONFIGURATIONS;
    }

    const body = document.querySelector('body');
    const btn = createBtn();
    autoSetMode(configurations, body, btn);
    toggleBtn(btn, body, configurations);
    body.appendChild(btn);
}
