export type FullPersonInfo = {
    id: string
    name: string
    role: string
    image: string
    summary: string
    birthDate: string
    deathDate: string | null
    age: number
    awards: string
    knownFor: CastMovie[]
    errorMessage: string
}

export type CastMovie = {
    id: string
    title: string
    year: string
    image: string
}