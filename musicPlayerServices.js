
import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

import {playListData} from './src/constants';

// getCurrentTrack is deprecated - Simplified setupPlayer function using TrackPlayer.setupPlayer() directly
export async function setupPlayer() {
  try {
    await TrackPlayer.setupPlayer();
    return true;
  } catch (error) {
    console.error('Error setting up player:', error);
    return false;
  }
}

export async function addTrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
