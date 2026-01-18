/*
const ge = (id) => document.getElementById(id);
const setText = (id, content) => {ge(id).innerHTML = content};
const display = (id, style) => {ge(id).style.display = style};
const show = (id) => {display(id, "block")};
const hide = (id) => {display(id, "none")};
const random = (a, b) => Math.floor(Math.random() * (b - a) + a);
*/

const default_player = {
    saveVersion: 1,
    rabbit: new Decimal(0), // Rabbit Count
    money: new Decimal(0), // Money
    buildings: {
        moneyToBunny: {
            0: new Decimal(0) // Cage Amount
        }
    }
}

let player;

function getBunnyPerSecondFromBuilding(id) {
    return player.buildings.moneyToBunny[0].mul(BUILDING_CHARACTERISTICS.mtb[0].baseProd);
}

function getBunnyPerSecond() {
    let x = new Decimal(0);
    for (let i = 0; i < 1; i++) {
        x = x.add(getBunnyPerSecondFromBuilding(0));
    }
    return x;
}

function getMoneyPerSecond() {
    let x = new Decimal(0);
    return x;
}

function gameLoop() {
    return setInterval(() => {
        setText("display-bunny_status-bunny_count", `You have ${player.rabbit.toFixed(player.rabbit.lte(1e6) ? 0 : 2)}`);
        setText("display-bunny_status-money_count", `You have $${player.money.toFixed(2)}.`);

        setText("display-buildings-money_to_bunny-cage-amount", player.buildings.moneyToBunny[0].toFixed(0));
        setText("display-buildings-money_to_bunny-cage-per_second_each", getBuildingEffect(0).toFixed(2));
        setText("display-buildings-money_to_bunny-cage-per_second_total", getBunnyPerSecondFromBuilding(0).toFixed(2));
        setText("display-buildings-money_to_bunny-cage-cost", `Cost: $${getNextMoneyToBunnyBuildingCost(0, player.buildings.moneyToBunny[0]).toFixed(2)}`);

        player.rabbit = player.rabbit.add(getBunnyPerSecond().div(20));
        player.money = player.money.add(getMoneyPerSecond().div(20));
    }, 50)
}

load();
gameLoopID = gameLoop();
saveLoopID = setInterval(() => {save(); console.log("saved")}, 30000);