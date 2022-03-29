import { Song } from "@/models/song";

export function fetchAllSongs(): Promise<Song[]> {
  return fetchSongs("*");
}

export async function fetchSongs(query: string): Promise<Song[]> {
  const result = (
    await (
      await fetch(
        `https://mmwpuc61o9.execute-api.us-east-1.amazonaws.com/prod?query=${query}`
      )
    ).json()
  ).result;

  const songs = [];
  for (const value of JSON.parse(result)) {
    songs.push({
      name: value[0],
      lookupPath: value[1],
      albumName: value[2],
      imageUrl: value[3],
      artistName: value[4],
    });
  }

  return songs;
}
