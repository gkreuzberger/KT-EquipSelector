let team_races = {}

function hideWindow() {
    document.getElementById('team-window').style.visibility = 'hidden';
}

function getRace() {
    const race = document.getElementById('select-team').value;
    const faction = document.querySelector('select[name="select-team"] option:checked').parentElement.getAttribute('faction-name');
    const selection = [race, faction];
    return selection
}

function renderUniversalEquipment() {
    const univEquipList = JSON.parse(localStorage.getItem('universal_equip'));
    const univEquipSelect = document.getElementById('univ-equip-leader');
    for(const indexUE in univEquipList) {
        const equipOption = document.createElement('option');
        equipOption.setAttribute('value', `${indexUE}`);
        equipOption.innerHTML = `${univEquipList[indexUE].name_es}`;
        univEquipSelect.appendChild(equipOption.cloneNode(true));
        for(let i = 2; i <= 6; i++) {
            const nextSelect = document.getElementById(`univ-equip-member-${i}`);
            nextSelect.appendChild(equipOption.cloneNode(true))
        }
    }
}

function generateTeamSelection() {
    const factionNames = JSON.parse(localStorage.getItem('faction_names'));
    for(index in factionNames) {
        let faction = factionNames[index];
        let factionRaces = JSON.parse(localStorage.getItem(faction));
        const factionLabel = document.getElementById(`select-${faction}`);
        for(const index in factionRaces) {
            let race = factionRaces[index];
            const factionOption = document.createElement('option');
            factionOption.setAttribute('value', `${index}`);
            factionOption.innerHTML = `${race.name_es}`;
            factionLabel.appendChild(factionOption);
        }
    }
    renderUniversalEquipment();
}

function clearOptions(selectID) {
    let select = document.getElementById(selectID);
    select.innerHTML = '<option value="None">Ninguno</option>';
}

function renderWeaponSelect(race, unitID, unitClass) {
    const weaponList = team_races[race].units[unitID].available_weapons;
    const rangedSelect = document.getElementById(`ranged-${unitClass}`);
    clearOptions(rangedSelect.id);
    const meleeSelect = document.getElementById(`melee-${unitClass}`);
    clearOptions(meleeSelect.id);
    for(const indexW in weaponList) {
        let weaponID = weaponList[indexW];
        const weaponOption = document.createElement('option');
        weaponOption.setAttribute('value', `${weaponID}`);
        if(weaponList.length <= 2) {
            weaponOption.setAttribute('selected', 'selected')
        };
        if(weaponID in team_races[race].weapons.ranged) {
            weaponOption.innerHTML = `${team_races[race].weapons.ranged[weaponID].name_es}`;
            rangedSelect.appendChild(weaponOption);
        } else if(weaponID in team_races[race].weapons.melee) {
            weaponOption.innerHTML = `${team_races[race].weapons.melee[weaponID].name_es}`;
            meleeSelect.appendChild(weaponOption);
        };
    }
}

function renderEquipmentSelect(race, unitID, unitClass) {
    const raceEquipList = team_races[race].units[unitID].equipables;
    const raceEquipSelect = document.getElementById(`race-equip-${unitClass}`);
    clearOptions(`race-equip-${unitClass}`);
    for(const indexE in raceEquipList) {
        let equipID = raceEquipList[indexE];
        if(document.querySelector(`select#race-equip-${unitClass} option[value="${equipID}"]`) == null) {
            const equipOption = document.createElement('option');
            equipOption.setAttribute('value', `${equipID}`);
            equipOption.innerHTML = `${team_races[race].equipment[equipID].name_es}`;
            raceEquipSelect.appendChild(equipOption);
        } 
    }
}

function renderUnitOptions(unitClass) {
    const race = document.getElementById('team-race').getAttribute('race-name');
    const unitID = document.getElementById(`unit-${unitClass}`).value;
    renderWeaponSelect(race, unitID, unitClass);
    renderEquipmentSelect(race, unitID, unitClass)
}

function getLeaderUnits(units, unitType) {
    // Filter feature for objects
    Object.filter = (obj, predicate) => 
        Object.fromEntries(Object.entries(obj).filter(predicate))
    // Filter all units by attribute 'type'
    let leaderUnits = Object.filter(units, ([unit, attr]) => attr.type == unitType);
    return leaderUnits
}

function renderMemberSelection(race, memberIndex) {
    let unitList, unitID;
    if(memberIndex == 1){
        const leaderUnit = race.leader_unit;
        unitList = getLeaderUnits(race.units, leaderUnit);
        unitID = 'leader'
    } else {
        unitList = race.units;
        unitID = `member-${memberIndex}`
    };
    clearOptions(`unit-${unitID}`);
    for(const indexU in unitList) {
        const unit = unitList[indexU];
        const unitSelect = document.getElementById(`unit-${unitID}`);

        const unitOption = document.createElement('option');
        unitSelect.setAttribute('onchange', `renderUnitOptions("${unitID}")`);
        unitOption.setAttribute('value', `${indexU}`);
        unitOption.innerHTML = `${unit.name_es}`;
        unitSelect.appendChild(unitOption);
        const optionList = unitList[indexU].equipment;
    }
}

/* function storeValue(event) {
    localStorage.setItem(event.target.id, event.target.value);
} */

function generateMembers(raceUnits) {
    const teamDiv = document.getElementById('team-window');
    for(let i = 7; i <= raceUnits; i++) {
        const memberDiv = document.createElement('div');
        memberDiv.setAttribute('id', `team-member-${i}`);
        memberDiv.innerHTML = `
        <fieldset>
            <label for="unit-member-${i}">Unidad ${i}</label>
            <select name="unit-member-${i}" id="unit-member-${i}">
                <option value="None">Ninguno</option>
            </select>
            <div name="weapon-member-${i}" id="weapon-member-${i}">
                <label for="ranged-member-${i}">Armamento (Largo Alcance)</label>
                <select name="ranged-member-${i}" id="ranged-member-${i}">
                    <option value="None">Ninguno</option>
                </select>
                <label for="melee-member-${i}">Armamento (Cuerpo a Cuerpo)</label>
                <select name="melee-member-${i}" id="melee-member-${i}">
                    <option value="None">Ninguno</option>
                </select>
            </div>
            <label for="equip-member-${i}">Equipo</label>
            <select name="equip-member-${i}" id="equip-member-${i}">
                <optgroup label="Equipo Racial" id="race-equip-member-${i}">
                    <option value="None">Ninguno</option>
                </optgroup>
                <optgroup label="Equipo Universal" id="univ-equip-member-${i}">
                    <option value="None">Ninguno</option>
                </optgroup>
            </select>
        </fieldset>
        `;
        teamDiv.appendChild(memberDiv)
    }
}

function removeUnusedMembers(raceUnits) {
    const unusedMembers = parseInt(document.getElementById('max-units').innerHTML);
    if(unusedMembers > 6) {
        for(let i = unusedMembers; i > raceUnits; i--) {
            let targetedMember = document.getElementById(`team-member-${i}`);
            targetedMember.parentNode.removeChild(targetedMember)
        }
    }
}

function renderTeamWindow() {
    let selectedRace, selectedFaction;
    [selectedRace, selectedFaction] = getRace();
    let raceProperties = JSON.parse(localStorage.getItem(selectedFaction))[selectedRace];
    team_races[selectedRace] = raceProperties;
    let raceMaxUnits = raceProperties.team_units;
    document.getElementById('team-window').style.visibility = 'visible';
    let teamTitle = document.getElementById('team-race');
    teamTitle.setAttribute('race-name', selectedRace);
    teamTitle.innerText = `${raceProperties.name_es}`;

    if(raceProperties.team_units > 6) {
        generateMembers(raceMaxUnits)
    } else {
        removeUnusedMembers(raceMaxUnits)
    };
    document.getElementById('max-units').innerHTML = `${raceMaxUnits}`;
    for(let i = 1; i <= raceMaxUnits; i++) {
        renderMemberSelection(raceProperties, i)
    }
}

generateTeamSelection();
