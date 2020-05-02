const createVolumeControl = (player: HTMLAudioElement): void => {
  console.log(player);
};

export const setupAudioPlayer = (): void => {
  const audioPlayer: HTMLAudioElement = document.querySelector("#audioplayer");

  createVolumeControl(audioPlayer);
};
