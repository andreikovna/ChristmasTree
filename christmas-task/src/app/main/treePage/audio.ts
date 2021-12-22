class ChristmasAudio {
  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = './assets/audio/audio.mp3';
  }

  audioPlay() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.audio.onended = this.audio.play;
  }
}

export const christmasAudio = new ChristmasAudio();
