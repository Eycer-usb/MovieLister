import Actor from "./actor.model";

export interface MovieDetailsModel {
    id: number,
    language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster: string,
    release: string,
    title: string,
    actor: Actor[],
}
