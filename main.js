/*
const ge = (id) => document.getElementById(id);
const setText = (id, content) => {ge(id).innerHTML = content};
const display = (id, style) => {ge(id).style.display = style};
const show = (id) => {display(id, "block")};
const hide = (id) => {display(id, "none")};
const random = (a, b) => Math.floor(Math.random() * (b - a) + a);
*/

const default_player = {
    saveVersion: 0,
    rabbit: new Decimal(0),
    money: new Decimal(0)
}

let player;

function gameLoop() {
    return setInterval(() => {
        setText("display-bunny_status-bunny_count", `You have ${player.rabbit.toFixed(player.rabbit.lte(1e6) ? 0 : 2)}`);
        setText("display-bunny_status-money_count", `You have $${player.money.toFixed(2)}.`);
    }, 50)
}

load();
gameLoopID = gameLoop();
saveLoopID = setInterval(() => {save(); console.log("saved")}, 30000);