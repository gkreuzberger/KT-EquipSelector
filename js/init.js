const teams_imperium = {
    angels_of_death: {
        name_es: "Ángeles de la Muerte",
        name_en: "Angels of Death",
        equipment: []
    },
    death_korps: {
        name_es: "Korps de la Muerte",
        name_en: "Death Korps",
        equipment: []
    },
    elucidian_starstrider: {
        name_es: "Recorrestrellas Elucidianos",
        name_en: "Elucidian Starstrider",
        equipment: []
    },
    exaction_squad: {
        name_es: "Escuadra de Exacción",
        name_en: "Exaction Squad",
        equipment: []
    },
    hunter_clade: {
        name_es: "Clado de Cazadores",
        name_en: "Hunter Clade",
        equipment: []
    },
    imperial_navy_breachers: {
        name_es: "Armada Imperial",
        name_en: "Imperial Navy Breachers",
        equipment: []
    },
    inquisitorial_agents: {
        name_es: "Agentes Inquisitoriales",
        name_en: "Inquisitorial Agents",
        equipment: []
    },
    kasrkin_squad: {
        name_es: "Comando Kasrkin",
        name_en: "Kasrkin Squad",
        equipment: []
    },
    novitiates: {
        name_es: "Novicias",
        name_en: "Novitiates",
        equipment: []
    },
    phobos_strike_team: {
        name_es: "Asaltantes Phobos",
        name_en: "Phobos Strike team",
        equipment: []
    },
    ratling: {
        name_es: "Rátidos",
        name_en: "Ratling",
        equipment: []
    },
    scout_squad: {
        name_es: "Escuadra de Exploradores",
        name_en: "Scout Squad",
        equipment: []
    },
    tempestus_aquilons: {
        name_es: "Tempestus Aquilons",
        name_en: "Tempestus Aquilons",
        equipment: []
    }
}

const teams_chaos = {
    blooded: {
        name_es: "Ungidos",
        name_en: "Blooded",
        equipment: []
    },
    chaos_cult: {
        name_es: "Culto del Caos",
        name_en: "Chaos Cult",
        equipment: []
    },
    fellgor_ravagers: {
        name_es: "Expoliagores Impíos",
        name_en: "Fellgor Ravagers",
        equipment: []
    },
    gellerpox_infected: {
        name_es: "Infectados Geller",
        name_en: "Gellerpox infected",
        equipment: []
    },
    legionaries: {
        name_es: "Legionarios",
        name_en: "Legionary",
        team_units: 6,
        leader_unit: "Leader",
        units: {
            lg_chosen: {
                name_es: "Legionario Elegido",
                name_en: "Legionary Chosen",
                type: "Leader",
                max_units: 1,
                available_weapons: ["plasma_pistol", "tb_pistol", "dm_blade"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            lg_asp_champion: {
                name_es: "Legionario Campeón Aspirante",
                name_en: "Legionary Aspiring Champion",
                type: "Leader",
                max_units: 1,
                available_weapons: ["plasma_pistol", "tb_pistol", "t_chainsword", "power_weapon", "power_fist", "power_maul"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_w: {
                name_es: "Legionario Combatiente",
                name_en: "Legionary Warrior",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["boltgun", "fists", "bolt_pistol", "chainsword"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_g: {
                name_es: "Legionario Tirador",
                name_en: "Legionary Gunner",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["g_flamer", "g_meltagun", "g_plasma_gun", "fists"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_hg: {
                name_es: "Legionario Tirador Pesado",
                name_en: "Legionary Heavy Gunner",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["hg_heavy_bolter", "hg_ms_launcher", "hg_reaper_cc", "fists"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_i: {
                name_es: "Legionario Portador del Ícono",
                name_en: "Legionary Icon Bearer",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["boltgun", "fists", "bolt_pistol", "chainsword"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_a: {
                name_es: "Legionario Ungido",
                name_en: "Legionary Anointed",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["bolt_pistol", "dm_claw"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_b: {
                name_es: "Legionario Carnicero",
                name_en: "Legionary Butcher",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["bolt_pistol", "dh_chain_axe"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_bf: {
                name_es: "Legionario Acólito Fuegoimpío",
                name_en: "Legionary Balefire Acolyte",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["bolt_pistol", "fireblast", "life_siphon", "fell_dagger"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            },
            legionary_s: {
                name_es: "Legionario Lacerador",
                name_en: "Legionary Shrivelaton",
                type: "Astartes",
                max_units: 1,
                available_weapons: ["bolt_pistol", "flns_blades"],
                equipables: ["lg_armour", "lg_rounds", "lg_talismans", "lg_blades"]
            }
        },
        weapons: {
            ranged: {
                plasma_pistol: {
                    name_es: "Pistola de Plasma",
                    name_en: "Plasma Pistol",
                    type: "Normal"
                },
                plasma_gun: {
                    name_es: "Fusil de Plasma",
                    name_en: "Plasma Gun",
                    type: "Normal"
                },
                bolt_pistol: {
                    name_es: "Pistola Bólter",
                    name_en: "Bolt Pistol",
                    type: "Normal"
                },
                tb_pistol: {
                    name_es: "Pistola Bólter Corrompida",
                    name_en: "Tainted Bolt Pistol",
                    type: "Normal"
                },
                boltgun: {
                    name_es: "Bólter",
                    name_en: "Boltgun",
                    type: "Normal"
                },
                fireblast: {
                    name_es: "Estallido Ígneo",
                    name_en: "Fireblast",
                    type: "Psychic"
                },
                life_siphon: {
                    name_es: "Drenaje Vital",
                    name_en: "Life Siphon",
                    type: "Psychic"
                },
                g_flamer: {
                    name_es: "Pistola Bólter, Lanzallamas",
                    name_en: "Bolt Pistol, Flamer",
                    type: "Normal"
                },
                g_meltagun: {
                    name_es: "Pistola Bolter, Rifle de Fusión",
                    name_en: "Bolt Pistol, Meltagun",
                    type: "Normal"
                },
                g_plasma_gun: {
                    name_es: "Pistola Bolter, Fusil de Plasma",
                    name_en: "Bolt Pistol, Plasma Gun",
                    type: "Normal"
                },
                hg_heavy_bolter: {
                    name_es: "Pistola Bólter, Bólter Pesado",
                    name_en: "Bolt Pistol, Heavy Bolter",
                    type: "Normal"
                },
                hg_ms_launcher: {
                    name_es: "Pistola Bólter, Lanzamisiles",
                    name_en: "Bolt Pistol, Missile Launcher",
                    type: "Normal"
                },
                hg_reaper_cc: {
                    name_es: "Pistola Bólter, Cañón Ametrallador Segador",
                    name_en: "Bolt Pistol, Reaper Chaincannon",
                    type: "Normal"
                },
            },
            melee: {
                fists: {
                    name_es: "Puños",
                    name_en: "Fists",
                    type: "Normal"
                },
                dm_blade: {
                    name_es: "Filo Daemónico",
                    name_en: "Daemon Blade",
                    type: "Normal"
                },
                chainsword: {
                    name_es: "Espada Sierra",
                    name_en: "Chainsword",
                    type: "Normal"
                },
                t_chainsword: {
                    name_es: "Espada Sierra Corrompida",
                    name_en: "Tainted Chainsword",
                    type: "Normal"
                },
                power_weapon: {
                    name_es: "Arma de Energía",
                    name_en: "Power Weapon",
                    type: "Normal"
                },
                power_fist: {
                    name_es: "Puño de Energía",
                    name_en: "Power Fist",
                    type: "Normal"
                },
                power_maul:{
                    name_es: "Maza de Energía",
                    name_en: "Power Maul",
                    type: "Normal"
                },
                dm_claw: {
                    name_es: "Garra Daemónica",
                    name_en: "Daemonic Claw",
                    type: "Normal"
                },
                dh_chain_axe: {
                    name_es: "Hacha Sierra a Dos Manos",
                    name_en: "Double-handed Chain Axe",
                    type: "Normal"
                },
                fell_dagger: {
                    name_es: "Daga Impía",
                    name_en: "Fell Dagger",
                    type: "Normal"
                },
                flns_blades: {
                    name_es: "Filos de Desollar",
                    name_en: "Flensing Blades",
                    type: "Normal"
                },
            },
        },
        equipment: {
            lg_armour: {
                name_es: "Armadura con Protecciones",
                name_en: "Warded Armour",
                description_es: "",
                description_en: ""
            },
            lg_rounds: {
                name_es: "Balas Corrompidas",
                name_en: "Tainted Rounds",
                description_es: "",
                description_en: ""
            },
            lg_talismans: {
                name_es: "Talismanes del Caos",
                name_en: "Chaos Talismans",
                description_es: "",
                description_en: ""
            },
            lg_blades: {
                name_es: "Filos Maléficos",
                name_en: "Malefic Blades",
                description_es: "",
                description_en: ""
            }
        }
    },
    nemesis_claw: {
        name_es: "Garra Némesis",
        name_en: "Nemesis Claw",
        equipment: []
    },
    plague_marines: {
        name_es: "Marines de Plaga",
        name_en: "Plague Marines",
        team_units: 6,
        leader_unit: "Champion",
        units: {
            plague_champion: {
                name_es: "Campeón Marine de Plaga",
                name_en: "Plague Marine Champion",
                type: "Champion",
                max_units: 1,
                available_weapons: ["plasma_pistol", "plague_sword"],
                equipables: ["pl_vents", "pl_bells", "pl_grenades"]
            },
            plague_b: {
                name_es: "Bombardero Marine de Plaga",
                name_en: "Plague Marine Bombardier",
                type: "Marine",
                max_units: 1,
                available_weapons: ["boltgun", "fists"],
                equipables: ["pl_vents", "pl_bells", "pl_rounds", "pl_grenades"]
            },
            plague_f: {
                name_es: "Luchador Marine de Plaga",
                name_en: "Plague Marine Fighter",
                type: "Marine",
                max_units: 1,
                available_weapons: ["flail_corrup"],
                equipables: ["pl_vents", "pl_bells", "pl_grenades"]
            },
            plague_hg: {
                name_es: "Tirador Pesado Marine de Plaga",
                name_en: "Plague Marine Heavy Gunner",
                type: "Marine",
                max_units: 1,
                available_weapons: ["plague_spewer", "fists"],
                equipables: ["pl_vents", "pl_bells", "pl_grenades"]
            },
            plague_i: {
                name_es: "Portaicono Marine de Plaga",
                name_en: "Plague Marine Icon Bearer",
                type: "Marine",
                max_units: 1,
                available_weapons: ["bolt_pistol", "plague_knife"],
                equipables: ["pl_vents", "pl_bells", "pl_rounds", "pl_grenades"]
            },
            plague_mp: {
                name_es: "Conjuraplagas Maligno",
                name_en: "Malignant Plaguecaster",
                type: "Marine",
                max_units: 1,
                available_weapons: ["entropy", "plague_wind", "corr_staff"],
                equipables: ["pl_vents", "pl_bells", "pl_grenades"]
            },
            plague_w: {
                name_es: "Combatiente Marine de Plaga",
                name_en: "Plague Marine Warrior",
                type: "Marine",
                max_units: 1,
                available_weapons: ["boltgun", "plague_knife"],
                equipables: ["pl_vents", "pl_bells", "pl_rounds", "pl_grenades"]
            },
        },
        weapons: {
            ranged: {
                plasma_pistol: {
                    name_es: "Pistola de Plasma",
                    name_en: "Plasma Pistol",
                    type: "Normal"
                },
                bolt_pistol: {
                    name_es: "Pistola Bólter",
                    name_en: "Bolt Pistol",
                    type: "Normal"
                },
                boltgun: {
                    name_es: "Bólter",
                    name_en: "Boltgun",
                    type: "Normal"
                },
                plague_spewer: {
                    name_es: "Regurgitador de Plaga",
                    name_en: "Plague Spewer",
                    type: "Normal"
                },
                entropy: {
                    name_es: "Entropía",
                    name_en: "Entropy",
                    type: "Psychic"
                },
                plague_wind: {
                    name_es: "Viento de Plaga",
                    name_en: "Plague Wind",
                    type: "Psychic"
                }

            },
            melee: {
                fists: {
                    name_es: "Puños",
                    name_en: "Fists",
                    type: "Normal"
                },
                plague_knife: {
                    name_es: "Cuchillo de Plaga",
                    name_en: "Plague knife",
                    type: "Normal"
                },
                plague_sword: {
                    name_es: "Espada de Plaga",
                    name_en: "Plague Sword",
                    type: "Normal"
                },
                flail_corrup: {
                    name_es: "Mayal de Corrupción",
                    name_en: "Flail of Corruption",
                    type: "Normal"
                },
                corr_staff: {
                    name_es: "Báculo Corrompido",
                    name_en: "Corrupted Staff",
                    type: "Psychic"
                }
            },
        },
        equipment: {
            pl_vents: {
                name_es: "Ventilación de Veneno",
                name_en: "Posion Vents",
                description_es: "",
                description_en: ""
            },
            pl_rounds: {
                name_es: "Munición de Plaga",
                name_en: "Plague Rounds",
                description_es: "",
                description_en: ""
            },
            pl_bells: {
                name_es: "Campanas de la Plaga",
                name_en: "Plague Bells",
                description_es: "",
                description_en: ""
            },
            pl_grenades: {
                name_es: "Granadas de Plaga",
                name_en: "Plague Grenades",
                description_es: "",
                description_en: ""
            }
        }
    },
    warpcoven: {
        name_es: "Aquelarre Disforme",
        name_en: "Warpcoven",
        team_units: 6,
        leader_unit: "Sorcerer",
        units: {
            sorcerer_d: {
                name_es: "Hechicero del Destino",
                name_en: "Sorcerer of Destiny",
                type: "Sorcerer",
                max_units: 1,
                available_weapons: ['sd_inferno_bolt', 'sd_wf_pistol', 'src_stave', 'prosp_khopesh'],
                equipables: ['wc_robes', 'wc_scrolls']
            },
            sorcerer_t: {
                name_es: "Hechicero Tempíreo",
                name_en: "Sorcerer of Tempyreon",
                type: "Sorcerer",
                max_units: 1,
                available_weapons: ['st_inferno_bolt', 'st_wf_pistol', 'src_stave', 'prosp_khopesh'],
                equipables: ['wc_robes', 'wc_scrolls']
            },
            sorcerer_w: {
                name_es: "Hechicero del Fuego Disforme",
                name_en: "Sorcerer of Warpfire",
                type: "Sorcerer",
                max_units: 1,
                available_weapons: ['sw_inferno_bolt', 'sw_wf_pistol', 'src_stave', 'prosp_khopesh'],
                equipables: ['wc_robes', 'wc_scrolls']
            },
            rubric_g: {
                name_es: "Tirador Marine Rúbrica",
                name_en: "Rubric Marine Gunner",
                type: "Marine",
                max_units: 2,
                available_weapons: ['warpflamer', 'soulreaper_cannon', 'fists'],
                equipables: ['wc_rounds', 'wc_melee']
            },
            rubric_i: {
                name_es: "Portaicono Marine Rúbrica",
                name_en: "Rubric Marine Icon Bearer",
                type: "Marine",
                max_units: 1,
                available_weapons: ['inferno_boltgun', 'fists'],
                equipables: ['wc_rounds', 'wc_melee']
            },
            rubric_w: {
                name_es: "Combatiente Marine Rúbrica",
                name_en: "Rubric Marine Warrior",
                type: "Marine",
                max_units: 5,
                available_weapons: ['inferno_boltgun', 'fists'],
                equipables: ['wc_rounds', 'wc_melee']
            },
            /* tzaangor_c: {
                name_es: "",
                name_en: "",
                type: "",
                max_units: 0,
                available_weapons: [],
                equipables: []
            },
            tzaangor_h: {},
            tzaangor_i: {},
            tzaangor_w: {} */
        },
        weapons: {
            ranged: {
                inferno_bolt: {
                    name_es: "Pistola Bolter Infierno",
                    name_en: "Inferno Bolt",
                    type: "Normal"
                },
                inferno_boltgun: {
                    name_es: "Bolter Infierno",
                    name_en: "Inferno Boltgun",
                    type: "Normal"
                },
                wf_pistol: {
                    name_es: "Pistola de Llamas Disformes",
                    name_en: "Warpflame Pistol",
                    type: "Normal"
                },
                warpflamer: {
                    name_es: "Lanzallamas Disforme",
                    name_en: "Warpflamer",
                    type: "Normal"
                },
                soulreaper_cannon: {
                    name_es: "Cañón Cosechaalmas",
                    name_en: "Soulreaper Cannon",
                    type: "Normal"
                },
                sd_inferno_bolt: {
                    name_es: "Pistola Bolter Infierno, Proyectil de Condenación",
                    name_en: "Inferno Bolt, Doombolt",
                    type: "Normal, Psych"
                },
                st_inferno_bolt: {
                    name_es: "Pistola Bolter Infierno, Descarga de Flujo",
                    name_en: "Inferno Bolt, Fluxblast",
                    type: "Normal, Psych"
                },
                sw_inferno_bolt: {
                    name_es: "Pistola Bolter Infierno, Quemar Mente, Tormenta de Fuego",
                    name_en: "Inferno Bolt, Mindburn, Firestorm",
                    type: "Normal, Psych"
                },
                sd_wf_pistol: {
                    name_es: "Pistola de Llamas Disformes, Proyectil de Condenación",
                    name_en: "Warpflame Pistol, Doombolt",
                    type: "Normal, Psych"
                },
                st_wf_pistol: {
                    name_es: "Pistola de Llamas Disformes, Descarga de Flujo",
                    name_en: "Warpflame Pistol, Fluxblast",
                    type: "Normal, Psych"
                },
                sw_wf_pistol: {
                    name_es: "Pistola de Llamas Disformes, Quemar Mente, Tormenta de Fuego",
                    name_en: "Warpflame Pistol, Mindburn, Firestorm",
                    type: "Normal, Psych"
                },
            },
            melee: {
                src_stave: {
                    name_es: "Bastón de Psicofuerza",
                    name_en: "Force Stave",
                    type: "Psychic"
                },
                prosp_khopesh: {
                    name_es: "Khopesh Prosperiano",
                    name_en: "Prosperine Khopesh",
                    type: "Normal"
                },
                fists: {
                    name_es: "Puños",
                    name_en: "Fists",
                    type: "Normal"
                }
            }
        },
        equipment: {
            wc_rounds: {
                name_es: "Balas Hechizadas",
                name_en: "Ensorcelled Rounds",
                description_es: "",
                description_en: ""
            },
            wc_melee: {
                name_es: "Armas Faucesdaemónicas",
                name_en: "Daemonmaw Weapons",
                description_es: "",
                description_en: ""
            },
            wc_robes: {
                name_es: "Túnicas Arcanas",
                name_en: "Arcane Robes",
                description_es: "",
                description_en: ""
            },
            wc_scrolls: {
                name_es: "Pergaminos de Hechicería",
                name_en: "Sorcerous Scrolls",
                description_es: "",
                description_en: ""
            }
        }
    }
}

const teams_xenos = {
    blades_of_khaine: {
        name_es: "Filos de Khaine",
        name_en: "Blades of Khaine",
        equipment: []
    },
    brood_brothers: {
        name_es: "Hermanos de Progenie",
        name_en: "Brood Brothers",
        equipment: []
    },
    corsair_voidscarred: {
        name_es: "Corsarios del Vacío",
        name_en: "Corsair Voidscarred",
        equipment: []
    },
    farstalker_kinband: {
        name_es: "Bandaestirpe Kroot",
        name_en: "Farstalker Kinband",
        equipment: []
    },
    hand_of_the_archon: {
        name_es: "Manos del Arconte",
        name_en: "Hand of the Archon",
        equipment: []
    },
    hearthkyn_salvagers: {
        name_es: "Sucesores Recuperadores",
        name_en: "Hearthkyn Salvagers",
        equipment: []
    },
    hernkyn_yaegir: {
        name_es: "Hernkyn Yaegir",
        name_en: "Hernkyn Yaegir",
        equipment: []
    },
    hierotek_circle: {
        name_es: "Círculo de Hierotecnólogos",
        name_en: "Hierotek Circle",
        equipment: []
    },
    kommando: {
        name_es: "Orkomandoz",
        name_en: "Kommando",
        team_units: 10,
        team_leader: "Boss",
        units: {
            km_nob: {
                name_es: "Noble Komando",
                name_en: "Kommando Boss Nob",
                type: "Boss",
                max_units: 1,
                available_weapons: ["slugga", "big_choppa", "power_klaw"],
                equipables: ["choppa", "harpoon", "dynamite", "col_stocks"]
            },
            km_boy: {
                name_es: "Orkorraso",
                name_en: "Kommando Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["slugga", "choppa"],
                equipables: ["choppa", "harpoon", "dynamite" , "col_stocks"]
            },
            km_grot_bs: {
                name_es: "Kanijo Komando & Garrapato Bomba Kommando",
                name_en: "Kommando Grot & Bomb Squig",
                type: "Ork",
                max_units: 1,
                available_weapons: ["grot_choppa", "dynamite", "vicious_bite"],
                equipables: []
            },
            km_slasha: {
                name_es: "Rajador Komando",
                name_en: "Kommando Slasha Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["throwing_knives", "twin_choppas"],
                equipables: ["choppa", "harpoon", "dynamite"]
            },
            km_breacha: {
                name_es: "Orkoriete Komando",
                name_en: "Kommando Breacha Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["slugga", "breacha_ram"],
                equipables: ["choppa", "harpoon", "dynamite" , "col_stocks"]
            },
            km_snipa: {
                name_es: "Frankoriradork Komando",
                name_en: "Kommando Snipa Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["sc_big_shoota", "fists"],
                equipables: ["choppa", "harpoon", "dynamite"]
            },
            km_dakka: {
                name_es: "Zueltadakka Komando",
                name_en: "Kommando Dakka Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["dakka_shoota", "fists"],
                equipables: ["choppa", "harpoon", "dynamite" , "col_stocks"]
            },
            km_comms: {
                name_es: "Teleko Komando",
                name_en: "Kommando Comms Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["shokka_pistol", "fists"],
                equipables: ["choppa", "harpoon", "dynamite" , "col_stocks"]
            },
            km_burna: {
                name_es: "Achicharrador Komando",
                name_en: "Kommando Burna Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["burna", "fists"],
                equipables: ["choppa", "harpoon", "dynamite"]
            },
            km_rokkit: {
                name_es: "Chico Kobete Komando",
                name_en: "Kommando Rokkit Boy",
                type: "Ork",
                max_units: 1,
                available_weapons: ["rokkit_lnch", "fists"],
                equipables: ["choppa", "harpoon", "dynamite"]
            }
        },
        weapons: {
            ranged: {
                shokka_pistol: {
                    name_es: "Piztola Kalambrazo",
                    name_en: "Shokka Pistol",
                    type: "Normal"
                },
                slugga: {
                    name_es: "Piztola",
                    name_en: "Slugga",
                    type: "Normal"
                },
                sc_big_shoota: {
                    name_es: "Gran Akribillador kon Mira Lázer",
                    name_en: "Scoped Big Shoota",
                    type: "Normal"
                },
                dakka_shoota: {
                    name_es: "Dakkatralladora",
                    name_en: "Dakka Shoota",
                    type: "Normal"
                },
                burna: {
                    name_es: "Kema Kema",
                    name_en: "Burna",
                    type: "Normal"
                },
                throwing_knives: {
                    name_es: "Cuchulliz Arrojadizoz",
                    name_en: "Throwing Knives",
                    type: "Normal"
                },
                rokkit_lnch: {
                    name_es: "Lanzakobetez",
                    name_en: "Rokkit Launcha",
                    type: "Normal"
                },
                dynamite: {
                    name_es: "Dinamita",
                    name_en: "Dynamite",
                    type: "Normal"
                }
            },
            melee: {
                fists: {
                    name_es: "Puñoz",
                    name_en: "Fists",
                    type: "Normal"
                },
                choppa: {
                    name_es: "Rebanadora",
                    name_en: "Choppa",
                    type: "Normal"
                },
                grot_choppa: {
                    name_es: "Rebanadora de Grot",
                    name_en: "Grot Choppa",
                    type: "Normal"
                },
                twin_choppas: {
                    name_es: "Rebanadoraz Gemelaz",
                    name_en: "Twin Choppas",
                    type: "Normal"
                },
                big_choppa: {
                    name_es: "Gran Rebanadora",
                    name_en: "Big Choppa",
                    type: "Normal"
                },
                power_klaw: {
                    name_es: "Power Klaw",
                    name_en: "Garra de Energía",
                    type: "Normal"
                },
                breacha_ram: {
                    name_es: "Ariete de Acedio",
                    name_en: "Breacha Ram",
                    type: "Normal"
                },
                vicious_bite: {
                    name_es: "Mordizquitoz",
                    name_en: "Vicious Bite",
                    type: "Normal"
                }
            },
        },
        equipment: {
            choppa: {
                name_es: "Rebanadora",
                name_en: "Choppa",
                description_es: "",
                description_en: ""
            },
            harpoon: {
                name_es: "Harpón",
                name_en: "Harpoon",
                description_es: "",
                description_en: ""
            },
            dynamite: {
                name_es: "Dinamita",
                name_en: "Dynamite",
                description_es: "",
                description_en: ""
            },
            col_stocks: {
                name_es: "Culatas Plegables",
                name_en: "Collapsible Stocks",
                description_es: "",
                description_en: ""
            }
        }
    },
    mandrakes: {
        name_es: "Mandrágoras",
        name_en: "Mandrakes",
        equipment: []
    },
    pathfinders: {
        name_es: "Rastreadores",
        name_en: "Pathfinders",
        equipment: []
    },
    vespid_stingwing: {
        name_es: "Aguijón Alado Vespid",
        name_en: "Vespid Stingwing",
        equipment: []
    },
    void_dancer_troupe: {
        name_es: "Bailarines del Vacío",
        name_en: "Void Dancer Troupe",
        team_units: 8,
        team_leader: "Lead",
        units: {
            vd_lead: {
                name_es: "Primadonna",
                name_en: "Lead Player",
                type: "Lead",
                max_units: 1,
                available_weapons: ["fusion_pistol", "neuro_disruptor", "shuriken_pistol", "blade", "caress", "embrace", "kiss", "power_weapon"],
                equipables: ["vd_talisman", "vd_rounds", "death_mask", "undstd_mask"]
            },
            vd_jester: {
                name_es: "Bufón de Muerte",
                name_en: "Death Jester",
                type: "Troupe",
                max_units: 7,
                available_weapons: ["shrieker_cannon", "shrieker_blade"],
                equipables: ["vd_talisman", "vd_rounds", "death_mask", "undstd_mask"]
            },
            vd_player: {
                name_es: "Intérprete",
                name_en: "Player",
                type: "Troupe",
                max_units: 1,
                available_weapons: ["fusion_pistol", "neuro_disruptor", "shuriken_pistol", "blade", "caress", "embrace", "kiss"],
                equipables: ["vd_talisman", "vd_rounds", "death_mask", "undstd_mask"]
            },
            vd_shadowseer: {
                name_es: "Vidente de Sombras",
                name_en: "Shadowseer",
                type: "Troupe",
                max_units: 7,
                available_weapons: ["ss_neuro_disruptor", "ss_shuriken_pistol", "miststave"],
                equipables: ["vd_talisman", "vd_rounds", "death_mask", "undstd_mask"]
            }
        },
        weapons: {
            ranged: {
                fusion_pistol: {
                    name_es: "Pistola Fundidora",
                    name_en: "Fusion Pistol",
                    type: "Normal"
                },
                neuro_disruptor: {
                    name_es: "Neurodisruptor",
                    name_en: "Neuro Disruptor",
                    type: "Normal"
                },
                shuriken_pistol: {
                    name_es: "Pistola Shuriken",
                    name_en: "Shuriken Pistol",
                    type: "Normal"
                },
                ss_neuro_disruptor: {
                    name_es: "Granada Alucinógena, Neurodisruptor",
                    name_en: "Hallucinogen Grenade, Neuro Disruptor",
                    type: "Normal"
                },
                ss_shuriken_pistol: {
                    name_es: "Granada Alucinógena, Pistola Shuriken",
                    name_en: "Hallucinogen Grenade, Shuriken Pistol",
                    type: "Normal"
                },
                shrieker_cannon: {
                    name_es: "Cañón Aullador",
                    name_en: "Shrieker Cannon",
                    type: "Normal"
                }
            },
            melee: {
                blade: {
                    name_es: "Filo de Arlequín",
                    name_en: "Blade",
                    type: "Normal"
                },
                shrieker_blade: {
                    name_es: "Filo Aullador",
                    name_en: "Shrieker Blade",
                    type: "Normal"
                },
                caress: {
                    name_es: "Caricia de Arlequín",
                    name_en: "Caress",
                    type: "Normal"
                },
                embrace: {
                    name_es: "Abrazo de Arlequín",
                    name_en: "Embrace",
                    type: "Normal"
                },
                kiss: {
                    name_es: "Beso de Arlequín",
                    name_en: "Kiss",
                    type: "Normal"
                },
                power_weapon: {
                    name_es: "Arma de Energía",
                    name_en: "Power Weapon",
                    type: "Normal"
                },
                miststave: {
                    name_es: "Bastón de Niebla",
                    name_en: "Miststave",
                    type: "Normal"
                }
            },
        },
        equipment: {
            vd_talisman: {
                name_es: "Talismán de Hueso Espectral",
                name_en: "Wraithbone Talisman",
                description_es: "",
                description_en: ""
            },
            vd_rounds: {
                name_es: "Proyectiles de Toxinas Aulladores",
                name_en: "Shrieker Toxin Rounds",
                description_es: "",
                description_en: ""
            },
            death_mask: {
                name_es: "Máscara de la Muerte",
                name_en: "Death Mask",
                description_es: "",
                description_en: ""
            },
            undstd_mask: {
                name_es: "Máscara del Suplente",
                name_en: "Understudy's Mask",
                description_es: "",
                description_en: ""
            }
        }
    },
    wrecka_krew: {
        name_es: "Demoledorez",
        name_en: "Wrecka Krew",
        equipment: []
    },
    wyrmblade: {
        name_es: "",
        name_en: "Wyrmblade",
        equipment: []
    }
}

const universal_equipment = {
    ammo_cache: {
        name_es: "Depósito de Munición X1",
        name_en: "Ammo Cache X1",
        description_es: "",
        description_en: ""
    },
    comms_device: {
        name_es: "Aparato de Comunicaciones X1",
        name_en: "Comms Device X1",
        description_es: "",
        description_en: ""
    },
    mines: {
        name_es: "Minas X1",
        name_en: "Mines X1",
        description_es: "",
        description_en: ""
    },
    razor_wire: {
        name_es: "Alambre de Púas X1",
        name_en: "Razor Wire X1",
        description_es: "",
        description_en: ""
    },
    light_barricade: {
        name_es: "Barricada Ligera X2",
        name_en: "Light Barricade X2",
        description_es: "",
        description_en: ""
    },
    heavy_barricade: {
        name_es: "Barricada Pesada X1",
        name_en: "Heavy Barricade X1",
        description_es: "",
        description_en: ""
    },
    ladder: {
        name_es: "Escalera X2",
        name_en: "Ladder X2",
        description_es: "",
        description_en: ""
    },
    portable_barricade: {
        name_es: "Barricada Portátil X1",
        name_en: "Portable Barricade X1",
        description_es: "",
        description_en: ""
    },
    utility_grenade: {
        name_es: "Granada Especial X2",
        name_en: "Utility Grenade X2",
        description_es: "",
        description_en: ""
    },
    explosive_grenades: {
        name_es: "Granadas Explosivas",
        name_en: "Explosive Grenades",
        description_es: "",
        description_en: ""
    }
}

const lists = ["imperium", teams_imperium, "chaos", teams_chaos, "xenos", teams_xenos, "universal_equip", universal_equipment];

function exportList(factionName, raceList) {
    let filteredList = {};
    for(race in raceList) {
        if(raceList[race].equipment.length != 0) {
            filteredList[race] = raceList[race];
            console.log(`${race} added to ${factionName} list.`)
        }
    };
    return filteredList
}

function checkStorage() {
    let factionNames = [];
    console.log("Checking for local lists...");
    for(let i = 0; i < lists.length; i += 2) {
        if(localStorage.getItem(lists[i]) == null) {
            console.log(`List ${lists[i]} not found in LocalStorage. Saving from init file...`);
            if(i < 6){
                const savedList = exportList(lists[i], lists[i + 1]);
                localStorage.setItem(lists[i], JSON.stringify(savedList))
            } else {
                localStorage.setItem(lists[i], JSON.stringify(lists[i + 1]))
            };
            console.log(`${lists[i]} saved to LocalStorage`);
            if(i < 6) {
                factionNames.push(lists[i]);
            }
        };
    };
    if(factionNames.length > 0) {
        localStorage.setItem('faction_names', JSON.stringify(factionNames));
        console.log("Faction names list saved to LocalStorage");
    }
}

checkStorage();
