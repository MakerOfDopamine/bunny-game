function save() {
    localStorage.setItem("bunny-game-back", localStorage.getItem("bunny-game-save"));
    localStorage.setItem("bunny-game-save", btoa(JSON.stringify(player)));
}

function fixValues(x) {
    if (x === null) return null;
    if (x === undefined) return undefined;

    if (typeof x == "object") {
        for (let i of Object.keys(x)) {
            if (i == "saveVersion") continue;
            x[i] = fixValues(x[i]);
        }
        return x;
    } else {
        return new Decimal(x);
    }
}

function updateSave(oldSave) {
    if (oldSave.saveVersion < 1) {
        oldSave.buildings = default_player.buildings;
        oldSave.saveVersion = 1;
    }
    if (oldSave.saveVersion < 2) {
        oldSave.buildings.mtb = oldSave.buildings.moneyToBunny;
        delete oldSave.buildings.moneyToBunny;
        oldSave.buildings.btm = default_player.buildings.btm;
        oldSave.saveVersion = 2;
    }
    return oldSave;
}

function load(id_seek = "bunny-game-save") {
    try { 
        var saveData = JSON.parse(atob(localStorage.getItem(id_seek)));
        if (saveData == null) {
            throw "Null save";
        }
        player = fixValues(saveData);
        if (player.saveVersion < default_player.saveVersion) {
            player = updateSave(player);
        }
    } catch {
        alert("Save is null or unreadable. You may be a new player (or just reset your save), or your save may have been corrupted.");
        try {console.log(saveData)} catch {};
        player = default_player;
    }

    setText("display-bunny_status-bunny_count-name", RABBIT_NAMES[random(0, RABBIT_NAMES.length)])
    return;
}

const HARD_RESET_MESSAGE = "Are you sure you want to hard reset? This will not unlock any secret achievements nor give any buffs whatsoever."
function reset(force = false) {
    if (!force && !confirm(HARD_RESET_MESSAGE)) return;
    player = null;
    save();
    document.location.reload();
}

function iRegretItHelp() {
    alert("bruh");
    load("bunny-game-backup");
}