import { Song } from "@/models/song";

export function fetchAllSongs(): Promise<Song[]> {
  return fetchSongs("*");
}

export function fetchSongs(query: string): Promise<Song[]> {
  let songs = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/81aTawcGdmL._AC_SL1500_.jpg",
      name: "Hello",
      lookupPath:
        "https://aldify-music-repository.s3.eu-west-2.amazonaws.com/dont-you-think-lose--anton-vlasov.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIDsA4RHwDLYFoJrlAcOX4rBUQAGMpEW%2FnBmPLXgiK9WUAiA4Y0isnS%2FtpyJ2gl5Ls7pVlveZs%2FZP3TZZ1WbMXbkGoSr7AghhEAAaDDE2NzQyMzA5MTE5MyIMUNHC6iUnxeF3R38SKtgCipRDY70UOAVhsfermMRC17Lnoo9aIJLEQQzaKaZjZsOir%2BlkXp4WdKJ%2BkCGxDw%2BK6ZiZx2Ifj69FpcXXgafs1Esf1%2BqLK9YFdrltcm9W8cPROVWJpdZ4p%2FQtW20DSB6w370t9a0qXciJt14a46g9pLsoGLe9K56IF%2FgxuBO3bLwtqkEf%2B7Mh%2BRYhETkRNtP09BW80DuZW6CICiOqjhaVqU3xXPAy2gjGifhUz%2BOcmea8kXWDfnXgaQGJVElVLE3PqUt5ynASys55AONUzyaq3sBrFVi0dMlpR%2FF3zQBDbeiBf5jXxIUqvV2PZp4wHhdPHMOGZAVavz4ywFKYWlzAf2jDhzOGRWcdscbLEArMzUcAflN3NT8Tslbj7at8fuEoPSQWbt6bFVWW%2BxZ6X1%2BcbWcmHS3TdBQALG1UglUmi9fxZaujOiIiKpIBafE2tlLx1ttCHqHTv58wnb%2B9kQY6tAKfYQ7rsxJNO9GwDAMl5NbVw6vFI4y2%2BafUgkXC5I69P%2BO%2FFTzt%2FVE%2B5Yzz0CLN6Cw48zLjgLKlMQp2eDXDYXy3%2FnfnjrgG4B0kIapfACREIWZgyxjiwEcy1luistLAopaKN9adIcxy6OT%2BDdglIQawBZp8LW8qeUhLCviSH8vmNPy0H8uTTs%2FiWdnxxiTpkCljrvcuBsLSuqyeumJE6lLC%2Bqk%2FUCFV5BLzCxANhfSlsNSNXw%2BDaihzMHWhkwx%2BUG4yg4433DQ1PBYkqz7Tnqnfiq4H4%2FA5c9tsmCTMDrvux7aJw1oWEYVEkoqiJXYzrOoWRojWApxuxehlbODqcgjRHc7Rl93Ldo6kx9sSrq4ofICmk3q61sm8tyrf3bMrlisNnjDfM%2BeSTfk%2BMyZZufh6LbwkbA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220314T153202Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIASN6ZRUH44OHW4A2K%2F20220314%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=03132480a75e4b970c80e784a8c26f79c16ca1570b110141138130d2f7f0960d",
      albumName: "The Dark Side of the Moon",
      artistName: "Pink Floyd",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/81aTawcGdmL._AC_SL1500_.jpg",
      name: "Goodbye",
      lookupPath: "",
      albumName: "The Light Side of the Moon",
      artistName: "Pink Floyd 2",
    },
  ];

  if (query !== "*") {
    query = query.toLowerCase();
    songs = songs.filter((song) => song.name.toLowerCase().includes(query));
  }

  return Promise.resolve(songs);
}
