export enum TypeOfMitigation {
    AGRICULTURE = 'Agriculture',
    BIOMASS_ENERGY = 'BiomassEnergy',
    CCS = 'CCS',
    CEMENT = 'Cement',
    COAL_MINE = 'Coal/Mine',
    EE_HOUSEHOLDS = 'EEHouseholds',
    EE_INDUSTRY = 'EEIndustry',
    EE_OWN_GENERATION = 'EEOwnGeneration',
    EE_SERVICE = 'EEService',
    EE_SUPPLY_SIDE = 'EESupplySide',
    ENERGY_DISTRIBUTION = 'EnergyDistribution',
    FORESTRY = 'Forestry',
    FOSSIL_FUEL = 'FossilFuel',
    FUGITIVE = 'Fugitive',
    GEOTHERMAL = 'Geothermal',
    HFC_PFCS_SF6 = 'HFC_PFCs_SF6',
    HYDRO = 'Hydro',
    LANDFILLS = 'Landfills',
    MARINE = 'Marine',
    METHANE_AVOIDANCE = 'MethaneAvoidance',
    N20 = 'N20',
    SOLAR = 'Solar',
    TRANSPORT = 'Transport',
    WIND = 'Wind',
    CO2_USAGE = "CO2Usage",
    TIDAL = "Tidal"
}
//sub types of mitigation
export enum SubTypeOfMitigation {
  IRRIGATION = "Irrigation",
  ENERGY_EFFICIENCY ="EnergyEfficiency",
  ALTERNATIVE_FERTILISER = "AlternativeFertilisers",
  NO_TILLAGE = "NoTillage",
  SOIL_ENRICHMENT_BIOCHAR = "SoilEnrichmentBiochar",
  RICE_CROPS = "RiceCrops",

  BAGASSE_POWER = "BagassePower",
  PALM_OIL_SOLID_WASTE = 	"Palm oil solid waste",
  AGRICULTURAL_RESIDUES_OTHER_KINDS = "AgriculturalResiduesOtherKinds",
  AGRICULTURAL_RESIDUES_RICE_HUSK =	"AgriculturalResiduesRiceHusk",
  AGRICULTURAL_RESIDUES_MUSTARD_CROP = "AgriculturalResiduesMustardCrop",
  AGRICULTURAL_RESIDUES_POULTRY_LITTER =	"AgriculturalResiduesPoultryLitter",
  BLACK_LIQUOR =	"BlackLiquor",
  FOREST_RESIDUES_SAWMILL_WASTE =	"ForestResiduesSawmillWaste",
  FOREST_RESIDUES_OTHER =	"ForestResiduesOther",
  FOREST_BIOMASS =	"ForestBiomass",
  INDUSTRIAL_WASTE =	"IndustrialWaste",
  GASIFICATION_OF_BIOMASS =	"GasificationOfBiomass",
  SWITCH_FROM_FOSSIL_FUEL_TO_PIPED_BIOGAS =	"SwitchFromFossilFuelToPipedBiogas",
  BIOMASS_BRIQUETTES_OR_PELLETS =	"BiomassBriquettesOrPellets",
  BIODIESEL =	"Biodiesel",
  BIODIESEL_FROM_WASTE_OIL =	"BiodieselFromWasteOil",
  ETHANOL =	"Ethanol",

  CLINKER_REPLACEMENT = "ClinkerReplacement",

  COAL_MINE_METHANE	= "CoalMineMethane",
  COAL_BED_METHANE = "CoalBedMethane",
  CMM_VENTILATION_AIR_METHANE =	"CMMVentilationAirMethane",
  VENTILATION_AIR_METHANE =	"VentilationAirMethane",

  LIGHTING = "Lighting",
  SOLAR_LAMPS =	"SolarLamps",
  STOVES =	"Stoves",
  STOVES_SCHOOL_IN_GHANA = "StovesSchoolInGhana",
  STOVES_HOUSES_IN_NAMIBIA = "StovesHousesInNamibia",
  LIGHTING_INSULATION_SOLAR =	"LightingInsulationSolar",
  APPLIANCES = "Appliances",

  CHEMICALS = "Chemicals",
  PETROCHEMICALS = "Petrochemicals",
  PAPER = "Paper",
  CEMENT = "Cement",
  IRON_STEEL =  "IronSteel",
  MACHINERY = "Machinery",
  TEXTILES = "Textiles",
  ELECTRONICS = "Electronics",
  FOOD = "Food",
  BUILDING_MATERIALS = "BuildingMaterials",
  GLASS =  "Glass",
  NON_FERROUS_METALS =  "NonFerrousMetals",
  COKE_OVEN = "CokeOven",
  Mining =  "Mining",
  CONSTRUCTION = "Construction",
  METAL_PRODUCTS =  "MetalProducts",
  WOOD =  "Wood",
  RECYCLING = "Recycling",

  CHEMICALS_HEAT = "ChemicalsHeat",
  PETROCHEMICALS_HEAT = "PetrochemicalsHeat",
  CARBON_BLACK_GAS = "CarbonBlackGas",
  CEMENT_HEAT = "CementHeat",
  IRON_STEEL_HEAT = "IronSteelHeat",
  BUILDING_MATERIALS_HEAT = "BuildingMaterialsHeat",
  GLASS_HEAT = "GlassHeat",
  NON_FERROUS_METALS_HEAT = "NonFerrousMetalsHeat",
  COKE_OVEN_GAS = "CokeOvenGas",

  HVAC_LIGHTING	=	"HvacLighting",
  AIR_CONDITIONING	=	"AirConditioning",
  EE_NEW_BUILDINGS	=	"EeNewBuildings",
  STREET_LIGHTING	=	"StreetLighting",
  LIGHTING_IN_SERVICE	=	"LightingInService",
  WATER_PUMPING	=	"WaterPumping",
  WATER_PURIFICATION	=	"WaterPurification",
  EE_PUBLIC_STOVES	=	"EePublicStoves",
  EE_PUBLIC_BUILDINGS	=	"EePublicBuildings",
  EE_COMMERCIAL_BUILDINGS	=	"EeCommercialBuildings",

  SINGLE_CYCLE_TO_COMBINED_CYCLE	=	"SingleCycleToCombinedCycle",
  COGENERATION	=	"Cogeneration",
  CO_FIRING_WITH_BIOMASS	=	"CoFiringWithBiomass",
  HIGHER_EFFICIENCY_COAL_POWER	=	"HigherEfficiencyCoalPower",
  HIGHER_EFFICIENCY_OIL_POWER	=	"HigherEfficiencyOilPower",
  HIGHER_EFFICIENCY_USING_WASTE_HEAT	=	"HigherEfficiencyUsingWasteHeat",
  POWER_PLANT_REHABILITATION	=	"PowerPlantRehabilitation",
  HIGHER_EFFICIENCY_STEAM_BOILER	=	"HigherEfficiencySteamBoiler",

  DISTRICT_HEATING	=	"DistrictHeating",
  REPLACEMENT_OF_DISTRICT_HEATING_BOILERS	=	"ReplacementOfDistrictHeatingBoilers",
  CONNECTION_OF_ISOLATED_GRID	=	"ConnectionOfIsolatedGrid",
  DISTRICT_COOLING	=	"DistrictCooling",
  EFFICIENT_ELECTRICITY_DISTRIBUTION	=	"EfficientElectricityDistribution",

  AFFORESTATION	=	"Afforestation",
  MANGROVES	=	"Mangroves",
  AGROFORESTRY	=	"Agroforestry",
  REFORESTATION	=	"Reforestation",

  COAL_TO_NATURAL_GAS	=	"CoalToNaturalGas",
  COAL_TO_OIL	=	"CoalToOil",
  LIGNITE_TO_NATURAL_GAS	=	"LigniteToNaturalGas",
  NEW_NATURAL_GAS_PLANT	=	"NewNaturalGasPlant",
  NEW_NATURAL_GAS_PLANT_USING_LNG	=	"NewNaturalGasPlantUsingLng",
  OIL_TO_ELECTRICITY	=	"OilToElectricity",
  OIL_TO_LPG	=	"OilToLpg",
  OIL_TO_NATURAL_GAS	=	"OilToNaturalGas",

  OIL_FIELD_FLARING_REDUCTION	=	"OilFieldFlaringReduction",
  OIL_AND_GAS_PROCESSING_FLARING	=	"OilAndGasProcessingFlaring",
  NATURAL_GAS_PIPELINES	=	"NaturalGasPipelines",
  NON_HYDROCARBON_MINING	=	"NonHydrocarbonMining",
  SPONTANEOUSLY_IGNITION_OF_COAL_PILES	=	"SpontaneouslyIgnitionOfCoalPiles",
  CHARCOAL_PRODUCTION	=	"CharcoalProduction",

  GEOTHERMAL_ELECTRICITY	=	"GeothermalElectricity",
  GEOTHERMAL_HEATING	=	"GeothermalHeating",

  HFC23	=	"Hfc23",
  HFC134A	=	"Hfc134A",
  PFCS	=	"Pfcs",
  SF6	=	"Sf6",

  RUN_OF_RIVER	=	"RunOfRiver",
  EXISTING_DAM	=	"ExistingDam",
  HIGHER_EFFICIENCY_HYDRO_POWER	=	"HigherEfficiencyHydroPower",
  NEW_DAM	=	"NewDam",

  LANDFILL_FLARING	=	"LandfillFlaring",
  LANDFILL_POWER	=	"LandfillPower",
  COMBUSTION_OF_MSW	=	"CombustionOfMsw",
  GASIFICATION_OF_MSW	=	"GasificationOfMsw",
  BIOGAS_FROM_MSW	=	"BiogasFromMsw",
  LANDFILL_AERATION	=	"LandfillAeration",
  INTEGRATED_SOLID_WASTE_MANAGEMENT	=	"IntegratedSolidWasteManagement",
  SWITCH_FROM_FOSSIL_FUEL_TO_PIPED_LANDFILL_GAS	=	"SwitchFromFossilFuelToPipedLandfillGas",
  LANDFILL_COMPOSTING	=	"LandfillComposting",

  MANURE	=	"Manure",
  DOMESTIC_MANURE	=	"DomesticManure",
  WASTE_WATER	=	"WasteWater",
  INDUSTRIAL_SOLID_WASTE	=	"IndustrialSolidWaste",
  PALM_OIL_WASTE	=	"PalmOilWaste",
  AEROBIC_TREATMENT_OF_WASTE_WATER	=	"AerobicTreatmentOfWasteWater",
  COMPOSTING	=	"Composting",

  ADIPIC_ACID	=	"AdipicAcid",
  NITRIC_ACID	=	"NitricAcid",
  CAPROLACTAM	=	"Caprolactam",

  SOLAR_PHOTOVOLTAICS_PV = "SolarPhotovoltaicsPV",
  SOLAR_WATER_PUMPING_OFF_GRID = "SolarWaterPumpingOffGrid",
  SOLAR_WATER_PUMPING_ON_GRID =	"SolarWaterPumpingOnGrid",
  SOLAR_PV_WATER_DISINFECTION =	"SolarPVWaterDisinfection",
  SOLAR_THERMAL_POWER = "SolarThermalPower",
  SOLAR_THERMAL_HEAT = "SolarThermalHeat",
  SOLAR_WATER_HEATING = "SolarWaterHeating",
  SOLAR_COOKING =	"SolarCooking",

  BUS_RAPID_TRANSIT	=	"BusRapidTransit",
  BUS_RAPID_TRANSIT_GREEN_HYDROGEN	=	"BusRapidTransitGreenHydrogen",
  MOTORBIKES	=	"Motorbikes",
  MODE_SHIFT_ROAD_TO_RAIL	=	"ModeShiftRoadToRail",
  MORE_EFFICIENT_TRAIN_SYSTEM	=	"MoreEfficientTrainSystem",
  MORE_EFFICIENT_VEHICLES	=	"MoreEfficientVehicles",
  RAIL_REGENERATIVE_BRAKING	=	"RailRegenerativeBraking",
  RAIL_GREEN_HYDROGEN	=	"RailGreenHydrogen",
  RAIL_EFFICIENT_OPERATION	=	"RailEfficientOperation",
  METRO_EFFICIENT_OPERATION	=	"MetroEfficientOperation",
  CARS_GREEN_HYDROGEN	=	"CarsGreenHydrogen",
  CARS_EFFICIENT_OPERATION	=	"CarsEfficientOperation",
  SCRAPPING_OLD_VEHICLES	=	"ScrappingOldVehicles",
  BIODIESEL_FOR_TRANSPORT	=	"BiodieselForTransport",
  CABLE_CARS	=	"CableCars",

  WIND	=	"Wind",
  OFFSHORE_WIND	=	"OffshoreWind",

  CO2_RECYCLING = "CO2Recycling",
  CO2_REPLACEMENT = "CO2Replacement",

  TIDAL = "Tidal"

}

export const mitigationTypeList: any = [
  'Agriculture',
  'BiomassEnergy',
  'CCS',
  'Cement',
  'Coal/Mine',
  'EEHouseholds',
  'EEIndustry',
  'EEOwnGeneration',
  'EEService',
  'EESupplySide',
  'EnergyDistribution',
  'Forestry',
  'FossilFuel',
  'Fugitive',
  'Geothermal',
  'HFC_PFCs_SF6',
  'Hydro',
  'Landfills',
  'Marine',
  'MethaneAvoidance',
  'N20',
  'Solar',
  'Transport',
  'Wind',
  'CO2Usage',
  'Tidal'
 ]

export const sectorMitigationTypesListMapped: any = {
  Energy: [
    'BiomassEnergy',
    'Coal/Mine',
    'EEHouseholds',
    'EEIndustry',
    'EEOwnGeneration',
    'EEService',
    'EESupplySide',
    'EnergyDistribution',
    'FossilFuel',
    'Geothermal',
    'Hydro',
    'Solar',
    'Wind',
  ],
  Health: [...mitigationTypeList],
  Education: [...mitigationTypeList],
  Transport: ['Transport'],
  Manufacturing: [
    'Cement',
    'CCS',
    'HFC_PFCs_SF6',
  ],
  Hospitality: [...mitigationTypeList],
  Forestry: ['Forestry'],
  Waste: [
    'Landfills',
    'Fugitive',
    'MethaneAvoidance',
  ],
  Agriculture: ['Agriculture'],
  Other: [
    'Marine',
    'N20',
    'CO2Usage',
    'Tidal',
  ],
};

export const mitigationSubTypesListMapped: any = {
  Agriculture: [
      SubTypeOfMitigation.IRRIGATION.valueOf(),
      SubTypeOfMitigation.ENERGY_EFFICIENCY.valueOf(),
      SubTypeOfMitigation.ALTERNATIVE_FERTILISER.valueOf(),
      SubTypeOfMitigation.NO_TILLAGE.valueOf(),
      SubTypeOfMitigation.SOIL_ENRICHMENT_BIOCHAR.valueOf(),
      SubTypeOfMitigation.RICE_CROPS.valueOf(),
  ],
  BiomassEnergy: [
    SubTypeOfMitigation.BAGASSE_POWER.valueOf(),
    SubTypeOfMitigation.PALM_OIL_SOLID_WASTE.valueOf(),
    SubTypeOfMitigation.AGRICULTURAL_RESIDUES_OTHER_KINDS.valueOf(),
    SubTypeOfMitigation.AGRICULTURAL_RESIDUES_RICE_HUSK.valueOf(),
    SubTypeOfMitigation.AGRICULTURAL_RESIDUES_MUSTARD_CROP.valueOf(),
    SubTypeOfMitigation.AGRICULTURAL_RESIDUES_POULTRY_LITTER.valueOf(),
    SubTypeOfMitigation.BLACK_LIQUOR.valueOf(),
    SubTypeOfMitigation.FOREST_RESIDUES_SAWMILL_WASTE.valueOf(),
    SubTypeOfMitigation.FOREST_RESIDUES_OTHER.valueOf(),
    SubTypeOfMitigation.FOREST_BIOMASS.valueOf(),
    SubTypeOfMitigation.INDUSTRIAL_WASTE.valueOf(),
    SubTypeOfMitigation.GASIFICATION_OF_BIOMASS.valueOf(),
    SubTypeOfMitigation.SWITCH_FROM_FOSSIL_FUEL_TO_PIPED_BIOGAS.valueOf(),
    SubTypeOfMitigation.BIOMASS_BRIQUETTES_OR_PELLETS.valueOf(),
    SubTypeOfMitigation.BIODIESEL.valueOf(),
    SubTypeOfMitigation.BIODIESEL_FROM_WASTE_OIL.valueOf(),
    SubTypeOfMitigation.ETHANOL.valueOf(),
  ],
  Cement: [
    SubTypeOfMitigation.CLINKER_REPLACEMENT.valueOf(),
  ],
  "Coal/Mine": [
    SubTypeOfMitigation.COAL_MINE_METHANE.valueOf(),
    SubTypeOfMitigation.COAL_BED_METHANE.valueOf(),
    SubTypeOfMitigation.CMM_VENTILATION_AIR_METHANE.valueOf(),
    SubTypeOfMitigation.VENTILATION_AIR_METHANE.valueOf(),
  ],
  EEHouseholds: [
    SubTypeOfMitigation.LIGHTING.valueOf(),
    SubTypeOfMitigation.SOLAR_LAMPS.valueOf(),
    SubTypeOfMitigation.STOVES.valueOf(),
    SubTypeOfMitigation.STOVES_SCHOOL_IN_GHANA.valueOf(),
    SubTypeOfMitigation.STOVES_HOUSES_IN_NAMIBIA.valueOf(),
    SubTypeOfMitigation.LIGHTING_INSULATION_SOLAR.valueOf(),
    SubTypeOfMitigation.APPLIANCES.valueOf(),
  ],
  EEIndustry: [
    SubTypeOfMitigation.CHEMICALS.valueOf(),
    SubTypeOfMitigation.PETROCHEMICALS.valueOf(),
    SubTypeOfMitigation.PAPER.valueOf(),
    SubTypeOfMitigation.CEMENT.valueOf(),
    SubTypeOfMitigation.IRON_STEEL.valueOf(),
    SubTypeOfMitigation.MACHINERY.valueOf(),
    SubTypeOfMitigation.TEXTILES.valueOf(),
    SubTypeOfMitigation.ELECTRONICS.valueOf(),
    SubTypeOfMitigation.FOOD.valueOf(),
    SubTypeOfMitigation.BUILDING_MATERIALS.valueOf(),
    SubTypeOfMitigation.GLASS.valueOf(),
    SubTypeOfMitigation.NON_FERROUS_METALS.valueOf(),
    SubTypeOfMitigation.COKE_OVEN.valueOf(),
    SubTypeOfMitigation.Mining.valueOf(),
    SubTypeOfMitigation.CONSTRUCTION.valueOf(),
    SubTypeOfMitigation.METAL_PRODUCTS.valueOf(),
    SubTypeOfMitigation.WOOD.valueOf(),
    SubTypeOfMitigation.RECYCLING.valueOf(),
  ],
  EEOwnGeneration: [
    SubTypeOfMitigation.CHEMICALS_HEAT.valueOf(),
    SubTypeOfMitigation.PETROCHEMICALS_HEAT.valueOf(),
    SubTypeOfMitigation.CARBON_BLACK_GAS.valueOf(),
    SubTypeOfMitigation.CEMENT_HEAT.valueOf(),
    SubTypeOfMitigation.IRON_STEEL_HEAT.valueOf(),
    SubTypeOfMitigation.BUILDING_MATERIALS_HEAT.valueOf(),
    SubTypeOfMitigation.GLASS_HEAT.valueOf(),
    SubTypeOfMitigation.NON_FERROUS_METALS_HEAT.valueOf(),
    SubTypeOfMitigation.COKE_OVEN_GAS.valueOf(),
  ],
  EEService: [
    SubTypeOfMitigation.HVAC_LIGHTING.valueOf(),
    SubTypeOfMitigation.AIR_CONDITIONING.valueOf(),
    SubTypeOfMitigation.EE_NEW_BUILDINGS.valueOf(),
    SubTypeOfMitigation.STREET_LIGHTING.valueOf(),
    SubTypeOfMitigation.LIGHTING_IN_SERVICE.valueOf(),
    SubTypeOfMitigation.WATER_PUMPING.valueOf(),
    SubTypeOfMitigation.WATER_PURIFICATION.valueOf(),
    SubTypeOfMitigation.EE_PUBLIC_STOVES.valueOf(),
    SubTypeOfMitigation.EE_PUBLIC_BUILDINGS.valueOf(),
    SubTypeOfMitigation.EE_COMMERCIAL_BUILDINGS.valueOf(),
  ],
  EESupplySide: [
    SubTypeOfMitigation.SINGLE_CYCLE_TO_COMBINED_CYCLE.valueOf(),
    SubTypeOfMitigation.COGENERATION.valueOf(),
    SubTypeOfMitigation.CO_FIRING_WITH_BIOMASS.valueOf(),
    SubTypeOfMitigation.HIGHER_EFFICIENCY_COAL_POWER.valueOf(),
    SubTypeOfMitigation.HIGHER_EFFICIENCY_OIL_POWER.valueOf(),
    SubTypeOfMitigation.HIGHER_EFFICIENCY_USING_WASTE_HEAT.valueOf(),
    SubTypeOfMitigation.POWER_PLANT_REHABILITATION.valueOf(),
    SubTypeOfMitigation.HIGHER_EFFICIENCY_STEAM_BOILER.valueOf(),
  ],
  EnergyDistribution: [
    SubTypeOfMitigation.DISTRICT_HEATING.valueOf(),
    SubTypeOfMitigation.REPLACEMENT_OF_DISTRICT_HEATING_BOILERS.valueOf(),
    SubTypeOfMitigation.CONNECTION_OF_ISOLATED_GRID.valueOf(),
    SubTypeOfMitigation.DISTRICT_COOLING.valueOf(),
    SubTypeOfMitigation.EFFICIENT_ELECTRICITY_DISTRIBUTION.valueOf(),
  ],
  Forestry: [
    SubTypeOfMitigation.AFFORESTATION.valueOf(),
    SubTypeOfMitigation.MANGROVES.valueOf(),
    SubTypeOfMitigation.AGROFORESTRY.valueOf(),
    SubTypeOfMitigation.REFORESTATION.valueOf(),
  ],
  FossilFuel: [
    SubTypeOfMitigation.COAL_TO_NATURAL_GAS.valueOf(),
    SubTypeOfMitigation.COAL_TO_OIL.valueOf(),
    SubTypeOfMitigation.LIGNITE_TO_NATURAL_GAS.valueOf(),
    SubTypeOfMitigation.NEW_NATURAL_GAS_PLANT.valueOf(),
    SubTypeOfMitigation.NEW_NATURAL_GAS_PLANT_USING_LNG.valueOf(),
    SubTypeOfMitigation.OIL_TO_ELECTRICITY.valueOf(),
    SubTypeOfMitigation.OIL_TO_LPG.valueOf(),
    SubTypeOfMitigation.OIL_TO_NATURAL_GAS.valueOf(),
  ],
  Fugitive: [
    SubTypeOfMitigation.OIL_FIELD_FLARING_REDUCTION.valueOf(),
    SubTypeOfMitigation.OIL_AND_GAS_PROCESSING_FLARING.valueOf(),
    SubTypeOfMitigation.NATURAL_GAS_PIPELINES.valueOf(),
    SubTypeOfMitigation.NON_HYDROCARBON_MINING.valueOf(),
    SubTypeOfMitigation.SPONTANEOUSLY_IGNITION_OF_COAL_PILES.valueOf(),
    SubTypeOfMitigation.CHARCOAL_PRODUCTION.valueOf(),
  ],
Geothermal: [
    SubTypeOfMitigation.GEOTHERMAL_ELECTRICITY.valueOf(),
    SubTypeOfMitigation.GEOTHERMAL_HEATING.valueOf(),
  ],
HFC_PFCs_SF6: [
    SubTypeOfMitigation.HFC23.valueOf(),
    SubTypeOfMitigation.HFC134A.valueOf(),
    SubTypeOfMitigation.PFCS.valueOf(),
    SubTypeOfMitigation.SF6.valueOf(),
  ],
Hydro: [
    SubTypeOfMitigation.RUN_OF_RIVER.valueOf(),
    SubTypeOfMitigation.EXISTING_DAM.valueOf(),
    SubTypeOfMitigation.HIGHER_EFFICIENCY_HYDRO_POWER.valueOf(),
    SubTypeOfMitigation.NEW_DAM.valueOf(),
  ],
Landfills: [
    SubTypeOfMitigation.LANDFILL_FLARING.valueOf(),
    SubTypeOfMitigation.LANDFILL_POWER.valueOf(),
    SubTypeOfMitigation.COMBUSTION_OF_MSW.valueOf(),
    SubTypeOfMitigation.GASIFICATION_OF_MSW.valueOf(),
    SubTypeOfMitigation.BIOGAS_FROM_MSW.valueOf(),
    SubTypeOfMitigation.LANDFILL_AERATION.valueOf(),
    SubTypeOfMitigation.INTEGRATED_SOLID_WASTE_MANAGEMENT.valueOf(),
    SubTypeOfMitigation.SWITCH_FROM_FOSSIL_FUEL_TO_PIPED_LANDFILL_GAS.valueOf(),
    SubTypeOfMitigation.LANDFILL_COMPOSTING.valueOf(),
  ],
MethaneAvoidance: [
    SubTypeOfMitigation.MANURE.valueOf(),
    SubTypeOfMitigation.DOMESTIC_MANURE.valueOf(),
    SubTypeOfMitigation.WASTE_WATER.valueOf(),
    SubTypeOfMitigation.INDUSTRIAL_SOLID_WASTE.valueOf(),
    SubTypeOfMitigation.PALM_OIL_WASTE.valueOf(),
    SubTypeOfMitigation.AEROBIC_TREATMENT_OF_WASTE_WATER.valueOf(),
    SubTypeOfMitigation.COMPOSTING.valueOf(),
  ],
N20: [
    SubTypeOfMitigation.ADIPIC_ACID.valueOf(),
    SubTypeOfMitigation.NITRIC_ACID.valueOf(),
    SubTypeOfMitigation.CAPROLACTAM.valueOf(),
  ],
Solar: [
    SubTypeOfMitigation.SOLAR_PHOTOVOLTAICS_PV.valueOf(),
    SubTypeOfMitigation.SOLAR_WATER_PUMPING_OFF_GRID.valueOf(),
    SubTypeOfMitigation.SOLAR_WATER_PUMPING_ON_GRID.valueOf(),
    SubTypeOfMitigation.SOLAR_PV_WATER_DISINFECTION.valueOf(),
    SubTypeOfMitigation.SOLAR_THERMAL_POWER.valueOf(),
    SubTypeOfMitigation.SOLAR_THERMAL_HEAT.valueOf(),
    SubTypeOfMitigation.SOLAR_WATER_HEATING.valueOf(),
    SubTypeOfMitigation.SOLAR_COOKING.valueOf(),
  ],
Transport: [
    SubTypeOfMitigation.BUS_RAPID_TRANSIT.valueOf(),
    SubTypeOfMitigation.BUS_RAPID_TRANSIT_GREEN_HYDROGEN.valueOf(),
    SubTypeOfMitigation.MOTORBIKES.valueOf(),
    SubTypeOfMitigation.MODE_SHIFT_ROAD_TO_RAIL.valueOf(),
    SubTypeOfMitigation.MORE_EFFICIENT_TRAIN_SYSTEM.valueOf(),
    SubTypeOfMitigation.MORE_EFFICIENT_VEHICLES.valueOf(),
    SubTypeOfMitigation.RAIL_REGENERATIVE_BRAKING.valueOf(),
    SubTypeOfMitigation.RAIL_GREEN_HYDROGEN.valueOf(),
    SubTypeOfMitigation.RAIL_EFFICIENT_OPERATION.valueOf(),
    SubTypeOfMitigation.METRO_EFFICIENT_OPERATION.valueOf(),
    SubTypeOfMitigation.CARS_GREEN_HYDROGEN.valueOf(),
    SubTypeOfMitigation.CARS_EFFICIENT_OPERATION.valueOf(),
    SubTypeOfMitigation.SCRAPPING_OLD_VEHICLES.valueOf(),
    SubTypeOfMitigation.BIODIESEL_FOR_TRANSPORT.valueOf(),
    SubTypeOfMitigation.CABLE_CARS.valueOf(),
  ],
Wind: [
    SubTypeOfMitigation.WIND.valueOf(),
    SubTypeOfMitigation.OFFSHORE_WIND.valueOf(),
  ],
CO2Usage: [
    SubTypeOfMitigation.CO2_RECYCLING.valueOf(),
    SubTypeOfMitigation.CO2_REPLACEMENT.valueOf(),
  ],
Tidal: [
    SubTypeOfMitigation.TIDAL.valueOf(),
  ],
}


