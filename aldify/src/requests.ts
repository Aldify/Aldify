import {Song} from "@/models/song";

export function fetchAllSongs() : Promise<Song[]> {
    return fetchSongs("*");
}

export function fetchSongs(query: string): Promise<Song[]> {
    let songs = [{
        imageUrl: "https://m.media-amazon.com/images/I/81aTawcGdmL._AC_SL1500_.jpg",
        name: "Hello",
        lookupPath: "",
        albumName: "The Dark Side of the Moon",
        artistName: "Pink Floyd"
    },{
        imageUrl: "https://m.media-amazon.com/images/I/81aTawcGdmL._AC_SL1500_.jpg",
        name: "Goodbye",
        lookupPath: "",
        albumName: "The Light Side of the Moon",
        artistName: "Pink Floyd 2"
    }];

    if (query !== "*") {
        query = query.toLowerCase();
        songs = songs.filter(song => song.name.toLowerCase().includes(query));
    }

    return Promise.resolve(songs);
}