//---- Busqueda----//
export interface OmdbResponse {
    Search:       Movie[];
    totalResults: string;
    Response:     string;
}

export interface Movie {
    Title:  string;
    Year:   string;
    imdbID: string;

    Poster: string;
}

export enum Type {
    Movie = "movie",
    Series = "series",
}

//---- Detalles----//

export interface MovieDetails {
    Actors:     string;
    Awards:     string;
    BoxOffice:  string;
    Country:    string;
    Director:   string;
    DVD:        string;
    Genre:      string;
    imdbID:     string;
    imdbRating: string;
    imdbVotes:  string;
    Language:   string;
    Metascore:  string;
    Plot:       string;
    Poster:     string;
    Production: string;
    Rated:      string;
    Ratings:    Rating[];
    Released:   string;
    Response:   string;
    Runtime:    string;
    Title:      string;
    Type:       string;
    Website:    string;
    Writer:     string;
    Year:       string;
}

export interface Rating {
    Source: string;
    Value:  string;
}
