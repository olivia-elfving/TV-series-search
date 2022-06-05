export interface ShowInterface {
    averageRuntime: number;
    dvdCountry: any;
    ended: string;
    externals: any;
    genres: string[];
    id: number;
    image: any;
    lagnuage: string;
    name: string;
    network: any;
    officialSite: any;
    premiered: string;
    rating: any;
    runtime: number;
    schedule: any;
    status: string;
    summary: string;
    type: string;
    updated: number;
    url: string;
    webChannel: any;
    weight: number;
    _links: any;
}

export interface ShowsInterface {
    score: number;
    show: ShowInterface;
}