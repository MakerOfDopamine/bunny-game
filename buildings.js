const BUILDING_CHARACTERISTICS = {
    mtb: {
        0: { 
            name: "Cage", 
            baseCost: new Decimal(10),
            baseProd: new Decimal(0.1)
        }
    },
    btm: {
        0: {
            name: "Rabbit Begging",
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

function getNextBunnyToMoneyBuildingCost(id, owned) {
    return BUILDING_CHARACTERISTICS.btm[id].baseCost.mul(getBuildingCostScale().pow(owned)).round();
}

function getBuildingEffect(id) {
    let effect = BUILDING_CHARACTERISTICS.mtb[id].baseProd;
    return effect;
}

function buyMoneyToBunnyBuilding(id) {
    if (player.money.gte(getNextMoneyToBunnyBuildingCost(id, player.buildings.mtb[id]))) {
        player.money = player.money.sub(getNextMoneyToBunnyBuildingCost(id, player.buildings.mtb[id]));
        player.buildings.mtb[id] = player.buildings.mtb[id].add(1);
    }
}

function buyBunnyToMoneyBuilding(id) {
    if (player.rabbit.gte(getNextBunnyToMoneyBuildingCost(id, player.buildings.btm[id]))) {
        player.rabbit = player.rabbit.sub(getNextBunnyToMoneyBuildingCost(id, player.buildings.btm[id]));
        player.buildings.btm[id] = player.buildings.btm[id].add(1);
    }
}