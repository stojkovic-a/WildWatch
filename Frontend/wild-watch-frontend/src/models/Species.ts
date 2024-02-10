import { HabitatSummary } from "./Habitat"
import { SightingSummarySpecies } from "./Sighting"

export class SpeciesSummary {
    speciesId: string
    classAnimal: Klasa
    commonName: string
    scientificName: string
    imageUrl: string
    description: string
    conservationStatus: string

    constructor(
        id: string,
        classAnimal: Klasa,
        commonName: string,
        scientificName: string,
        imageUrl: string,
        description: string,
        conservationStatus: string
    ) {
        this.speciesId = id;
        this.classAnimal = classAnimal;
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.imageUrl = imageUrl;
        this.description = description;
        this.conservationStatus = conservationStatus;
    }

}


export class SpeciesDto {
    id: string
    classAnimal: Klasa
    commonName: string
    scientificName: string
    imageUrl: string
    description: string
    conservationStatus: string

    constructor(
        id: string,
        classAnimal: Klasa,
        commonName: string,
        scientificName: string,
        imageUrl: string,
        description: string,
        conservationStatus: string
    ) {
        this.id = id;
        this.classAnimal = classAnimal;
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.imageUrl = imageUrl;
        this.description = description;
        this.conservationStatus = conservationStatus;
    }

}


export class Species {
    id: string
    classAnimal: Klasa
    commonName: string
    scientificName: string
    imageUrl: string
    description: string
    conservationStatus: string
    sightings: SightingSummarySpecies[]
    habitats: HabitatSummary[]

    constructor(
        id: string,
        classAnimal: Klasa,
        commonName: string,
        scientificName: string,
        imageUrl: string,
        description: string,
        conservationStatus: string,
        sightings: SightingSummarySpecies[],
        habitats: HabitatSummary[]
    ) {
        this.id = id;
        this.classAnimal = classAnimal;
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.imageUrl = imageUrl;
        this.description = description;
        this.conservationStatus = conservationStatus;
        this.sightings = sightings;
        this.habitats = habitats;
    }
}

export class FavouriteSpecies{
    public id: string;
    public commonName: string ;

    constructor(id:string, commonName: string){
        this.id = id
        this.commonName = commonName
    }
}

export enum Klasa {
    Sponge,  //sundjeri
    Cnidaria, // dupljari
    Platyhelminthes,//pljosnati crvi
    Annelida, //clankoviti crvi
    Mollusca, //mekusci
    Cephalopoda,//glavonosci
    Arthropoda, //zglavkari
    Echinodermata, //bodljokosci
    Tunicata, //plastasi
    Cephalochordata, //kopljasi
    Fish, //ribe
    Amphibians, //vodozemci
    Reptilia, //gmizavci
    Birds, //ptice
    Mammals// sisari
}