import { PlayProgress } from "@/models/play-progress";
import { Song } from "@/models/song";

class Player {
  private play_: PlayProgress = {
    image: "",
    title: "",
    artist: "",
    progress: 0,
    playing: true,
  };

  private hasPlayed_ = false;

  private readonly audio_: HTMLAudioElement = new Audio();

  constructor() {
    this.audio_.ontimeupdate = () => {
      this.play_.progress = this.audio_.currentTime / this.audio_.duration;
    };
  }

  public load(song: Song) {
    this.play_.image = song.imageUrl;
    this.play_.title = song.name;
    this.play_.artist = song.artistName;
    this.play_.progress = 0;

    this.audio_.src = song.lookupPath;
    if (this.play_.playing) {
      this.play();
    }
  }

  public play() {
    this.play_.playing = true;
    this.hasPlayed_ = true;
    this.audio_.play();
  }

  public pause() {
    this.play_.playing = false;
    this.audio_.pause();
  }

  public toggle() {
    if (this.play_.playing) {
      this.pause();
    } else {
      this.play();
    }
  }

  public state(): PlayProgress {
    return this.play_;
  }

  public hasPlayed(): boolean {
    return this.hasPlayed_;
  }
}

export const player = new Player();
