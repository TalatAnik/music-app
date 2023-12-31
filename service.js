import TrackPlayer, {
    AppKilledPlaybackBehavior,
    Capability,
    RepeatMode,
} from 'react-native-track-player';

import  './data';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrack();
    isSetup = true;
  }
  catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  }
  finally {
    return isSetup;
  }
}

export async function addTrack() {
  await TrackPlayer.add(songs);
}
module.exports = async function() {
    
}