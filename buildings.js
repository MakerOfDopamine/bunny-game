const BUILDING_CHARACTERISTICS = {
    mtb: {
        0: { 
            name: "Cage", 
            baseCost: new Decimal(10),
            baseProd: new Decimal(0.1)
        }
    }
}

function getBuildingCostScale() {
    let scale = new Decimal(0.15);
    return scale.add(1);
}

function getNextMoneyToBunnyBuildingCost(id, owned) {
    return BUILDING_CHARACTERISTICS.mtb[id].baseCost.mul(getBuildingCostScale().pow(owned));
}

function getBuildingEffect(id) {
    let effect = BUILDING_CHARACTERISTICS.mtb[id].baseProd;
    return effect;
}

function buyMoneyToBunnyBuilding(id) {
    if (player.money.gte(getNextMoneyToBunnyBuildingCost(id, player.buildings.moneyToBunny[id]))) {
        player.money = player.money.sub(getNextMoneyToBunnyBuildingCost(id, player.buildings.moneyToBunny[id]));
        player.buildings.moneyToBunny[id] = player.buildings.moneyToBunny[id].add(1);
    }
}

