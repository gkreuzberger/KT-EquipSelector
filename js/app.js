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
    if(document.getElementById(`unit-${unitID}`) != null) {
        clearOptions(`unit-${unitID}`);
    };
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

/* function generateMembers(raceUnits) {
    const teamDiv = document.getElementById('team-window');
    let unitID;
    for(let i = 7; i <= raceUnits; i++) {
        unitID = i;
        const memberDiv = document.createElement('div');
        
        if(i == 1) {
            unitID = 'leader'
        } else {
            unitID = `member-${i}`
        };
        memberDiv.setAttribute('id', `team-${unitID}`);
        memberDiv.innerHTML = `
        <fieldset>
            <label for="unit-${unitID}">Unidad ${i}</label>
            <select name="unit-${unitID}" id="unit-${unitID}">
                <option value="None">Ninguno</option>
            </select>
            <div name="weapon-${unitID}" id="weapon-${unitID}">
                <label for="ranged-${unitID}">Armamento (Largo Alcance)</label>
                <select name="ranged-${unitID}" id="ranged-${unitID}">
                    <option value="None">Ninguno</option>
                </select>
                <label for="melee-${unitID}">Armamento (Cuerpo a Cuerpo)</label>
                <select name="melee-${unitID}" id="melee-${unitID}">
                    <option value="None">Ninguno</option>
                </select>
            </div>
            <label for="equip-${unitID}">Equipo</label>
            <select name="equip-${unitID}" id="equip-${unitID}">
                <optgroup label="Equipo Racial" id="race-equip-${unitID}">
                    <option value="None">Ninguno</option>
                </optgroup>
                <optgroup label="Equipo Universal" id="univ-equip-${unitID}">
                    <option value="None">Ninguno</option>
                </optgroup>
            </select>
        </fieldset>
        `;
        teamDiv.appendChild(memberDiv)
    }
} */

function generateMembers(raceUnits) {
    const teamDiv = document.getElementById('team-window');
    let unitID, unitTitle;
    let memberDiv = document.getElementById('team-members');
    if(memberDiv == null) {
        memberDiv = document.createElement('div');
        memberDiv.setAttribute('id', 'team-members');
        teamDiv.appendChild(memberDiv)
    } else {
        memberDiv.innerHTML = ''
    };
    for(let i = 1; i <= raceUnits; i++) {
        unitID = i;
        const unitDiv = document.createElement('div');
        
        if(i == 1) {
            unitID = 'leader';
            unitTitle = ' (Líder)'
        } else {
            unitID = `member-${i}`;
            unitTitle = ''
        };
        unitDiv.setAttribute('id', `team-${unitID}`);
        unitDiv.innerHTML = `
        <fieldset>
            <label for="unit-${unitID}">Unidad ${i}${unitTitle}</label>
            <select name="unit-${unitID}" id="unit-${unitID}">
                <option value="None">Ninguno</option>
            </select>
            <br>
            <label for="weapon-${unitID}">Armamento</label>
            <div name="weapon-${unitID}" id="weapon-${unitID}">
                <label for="ranged-${unitID}">Largo Alcance</label>
                <select name="ranged-${unitID}" id="ranged-${unitID}">
                    <option value="None">Ninguno</option>
                </select>
                <label for="melee-${unitID}">Cuerpo a Cuerpo</label>
                <select name="melee-${unitID}" id="melee-${unitID}">
                    <option value="None">Ninguno</option>
                </select>
            </div>
        </fieldset>
        `;
        memberDiv.appendChild(unitDiv)
    }
}

function renderUniversalEquipment() {
    const univEquipList = JSON.parse(localStorage.getItem('universal_equip'));
    let univEquipSelect = document.getElementById(`univ-equip-1`)
    for(const indexUE in univEquipList) {
        const equipOption = document.createElement('option');
        equipOption.setAttribute('value', `${indexUE}`);
        equipOption.innerHTML = `${univEquipList[indexUE].name_es}`;
        for(let i = 1; i<= 4; i++) {
            univEquipSelect.appendChild(equipOption.cloneNode(true));
            univEquipSelect = document.getElementById(`univ-equip-${i}`)
        }
    }
}

function renderEquipmentSelect(race) {
    const raceEquipList = race.equipment;
    let equipID = 1;
    for(let i = 1; i <= 4; i++) {
        clearOptions(`race-equip-${i}`)
    }
    for(elem in raceEquipList) {
        const equipOption = document.createElement('option');
        equipOption.setAttribute('value', `${elem}`);
        equipOption.innerHTML = `${race.equipment[elem].name_es}`;
        for(let i = 1; i <= 4; i++) {
            const equipSelect = document.getElementById(`race-equip-${i}`);
            equipSelect.appendChild(equipOption.cloneNode(true));
        }
    }
}

function generateEquipmentWindow(race) {
    const teamDiv = document.getElementById('team-window');
    let equipDiv = document.createElement('div');
    equipDiv.setAttribute('id', 'team-equip');
    equipDiv.innerHTML = `
        <fieldset>
            <legend>Equipo</Legend>
        </fieldset>
    `;
    teamDiv.appendChild(equipDiv);
    equipDiv = document.querySelector('div#team-equip fieldset');
    for(let i = 1; i <= 4; i++) {
        const equipSelect = `
            <label for="equip-${i}">Equipo</label>
            <select name="equip-${i}" id="equip-${i}">
                <optgroup label="Equipo Racial" id="race-equip-${i}">
                    <option value="None">Ninguno</option>
                </optgroup>
                <optgroup label="Equipo Universal" id="univ-equip-${i}">
                    <option value="None">Ninguno</option>
                </optgroup>
            </select>
        `;
        equipDiv.insertAdjacentHTML('beforeend', equipSelect);
    };
    renderUniversalEquipment();
    renderEquipmentSelect(race)
}

/* function removeUnusedMembers(raceUnits) {
    const usedMembers = raceUnits;
    if(usedMembers > 6) {
        for(let i = usedMembers; i > 6; i--) {
            let targetedMember = document.getElementById(`team-member-${i}`);
            targetedMember.parentNode.removeChild(targetedMember)
        }
    }
} */

function checkSelectedLeader() {};

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
    document.getElementById('max-units').innerHTML = `${raceMaxUnits}`;
    if(document.getElementById('team-equip') == null) {
        generateEquipmentWindow(raceProperties)
    } else {
        for(let i = 1; i <= 4; i++) {
            clearOptions(`race-equip-${i}`)
        };
        renderEquipmentSelect(raceProperties)
    };
    generateMembers(raceMaxUnits);
    for(let i = 1; i <= raceMaxUnits; i++) {
        renderMemberSelection(raceProperties, i)
    }
}

generateTeamSelection();
