// Every Types

function isProperId(id: number):boolean {
    return id != null && id >= 0;
}

// User

type User = {
    id: number
    email :string,
    role :string,
    name? :string,
    surname? :string,
    city? :string,
    phone_number?: string,
    celebration_date?: Date
}

type UserRegister = {
    email :string,
    role :string,
    name? :string,
    surname? :string,
    celebration_date? :string
    city? :string
    phone_number? :string
    password: string,
    password_confirmation: string
}

type UserLogin = {
    email :string,
    password: string
}

type AuthenticationResponse = {
    logged_in :boolean,
    user? :User
}

type LogoutResponse = {
    logged_out :boolean
}

// Offer

interface OfferModel {
    id: number;
    user_id: number;
    title: string;
    description: string;
    address: string;
    category: string;
    prize: number;
    images: [];
    created_at?: string;
    updated_at?: string;
  }

  const EMPTY_OFFER_MODEL: OfferModel = {
      id: -1,
      user_id: -1,
      title: "",
      description: "",
      address: "",
      images: [],
      category: "",
      prize: 0,
  }

function offerModelTitleContains(offer: OfferModel, stringToContain: string): boolean {
    return offer.title.toLowerCase().includes(stringToContain.toLowerCase())
}
function offerModelDescriptionContains(offer: OfferModel, stringToContain: string): boolean {
    return offer.description.toLowerCase().includes(stringToContain.toLowerCase()) 
}
function offerModelAddressContains(offer: OfferModel, stringToContain: string): boolean {
    return offer.address.toLowerCase().includes(stringToContain.toLowerCase())
}
function offerModelCategoryConsistsOf(offer: OfferModel, stringToContain: string): boolean {
    return stringToContain.toLowerCase().includes(offer.category.toLowerCase())
}

// Event 

type EventModel = {
    id: number,
    name: string,
    date: string,
    notes: NoteModel[]
    created_at?: string;
    updated_at?: string;
}

const EMPTY_EVENT_MODEL: EventModel = {
    id: -1,
    name: "",
    date: "",
    notes: []
}

function isObjectEventModel(event:any):boolean {
    return event.id && event.name && event.date && event.notes;
}

// Note

type NoteModel = {
    id: number,
    name: string,
    body: string
    event_id?: number,
    created_at?: string;
    updated_at?: string;
}

const EMPTY_NOTE_MODEL: NoteModel = {
    id: -1,
    event_id: -1,
    name: "",
    body: "",
}

function isObjectNoteModel(note:any):boolean {
    return note.id && note.name && note.body;
}

// Filters

type FiltersModel = {
    prize: number[],
    categories: string[]
    address: string,
}

const EMPTY_FILTER_MODEL: FiltersModel = {
    prize: [2000, 5000],
    categories: [],
    address: "",
}

export {
    isProperId, EMPTY_EVENT_MODEL, EMPTY_NOTE_MODEL, EMPTY_OFFER_MODEL, isObjectEventModel, isObjectNoteModel,
    offerModelTitleContains, offerModelDescriptionContains, offerModelAddressContains, offerModelCategoryConsistsOf,
    EMPTY_FILTER_MODEL
};

export type { 
    User, UserRegister, UserLogin, AuthenticationResponse, LogoutResponse,
    OfferModel,
    EventModel, NoteModel,
    FiltersModel 
};