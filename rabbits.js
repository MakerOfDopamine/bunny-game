function getRabbitPerCatch() {
    let x = new Decimal(1);
    return x;
}

function getMoneyPerRabbit() {
    let x = new Decimal(1);
    return x;
}

function catchRabbit() {
    player.rabbit = player.rabbit.add(getRabbitPerCatch());
}

function sellRabbit() {
    if (player.rabbit.lt(1)) return;
    player.rabbit = player.rabbit.sub(1);
    player.money = player.money.add(getMoneyPerRabbit());
}

function sellAllRabbits() {
    if (player.rabbit.lt(1)) return;
    player.money = player.money.add(getMoneyPerRabbit().mul(player.rabbit.floor()));
    // console.log("profit")
    // console.log(getMoneyPerRabbit().mul(player.rabbit))
    player.rabbit = new Decimal(0);
}