
// import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';

// import { playListData } from './src/constants';

// // getCurrentTrack is deprecated - Simplified setupPlayer function using TrackPlayer.setupPlayer() directly
// export async function setupPlayer() {
//   try {
//     await TrackPlayer.setupPlayer();
//     return true;
//   } catch (error) {
//     console.error('Error setting up player:', error);
//     return false;
//   }
// }

// export async function addTrack() {
//   await TrackPlayer.add(playListData);
//   await TrackPlayer.setRepeatMode(RepeatMode.Queue);
// }

// export async function playbackService() {
//   TrackPlayer.addEventListener(Event.RemotePause, () => {
//     TrackPlayer.pause();
//   });

//   TrackPlayer.addEventListener(Event.RemotePlay, () => {
//     TrackPlayer.play();
//   });

//   TrackPlayer.addEventListener(Event.RemoteNext, () => {
//     TrackPlayer.skipToNext();
//   });

//   TrackPlayer.addEventListener(Event.RemotePrevious, () => {
//     TrackPlayer.skipToPrevious();
//   });
// }



// import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';

// const fetchPlayListData = async () => {
//   const apiUrl = 'https://backend.divinezone.in/getAllMantrasForBuild';

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
// console.log(data.data[1].title,'==================----------------------------------');
//     // console.log("========================================="+ data.data.title + '================================================');

//     if (data.data && data.message === 'All mantras fetched successfully.' && Array.isArray(data.data)) {
//       const dynamicPlayListData = data.data.map((item) => ({
//         id: item.id || '',
//         title: item.title || '',
//         artist: item.artist || '',
//         album: item.album || '',
//         artwork: item.artWork || '',
//         url: item.url || '',
//       }));

//       console.log('Fetched data:', dynamicPlayListData);
//       return dynamicPlayListData;
//     } else {
//       console.error('Error fetching data:', data.message);
//       return [];
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };


// export async function setupPlayer() {
//   try {
//     await TrackPlayer.setupPlayer();
//     return true;
//   } catch (error) {
//     console.error('Error setting up player:', error);
//     return false;
//   }
// }

// export async function addTracks() {
//   const dynamicPlayListData = await fetchPlayListData();
//   console.log(dynamicPlayListData, "=============================") // we received dynamic data here 
//   if (dynamicPlayListData.length > 0) {
//     await TrackPlayer.add(dynamicPlayListData);
//     await TrackPlayer.setRepeatMode(RepeatMode.Queue);
//     console.log('Tracks added successfully.'); // we dident receive the data here 
//   } else {
//     console.error('No tracks fetched.');
//   }
// }

// export async function playbackService() {
//   TrackPlayer.addEventListener(Event.RemotePause, () => {
//     TrackPlayer.pause();
//   });

//   TrackPlayer.addEventListener(Event.RemotePlay, () => {
//     TrackPlayer.play();
//   });

//   TrackPlayer.addEventListener(Event.RemoteNext, () => {
//     TrackPlayer.skipToNext();
//   });

//   TrackPlayer.addEventListener(Event.RemotePrevious, () => {
//     TrackPlayer.skipToPrevious();
//   });
// }




import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';

const fetchPlayListData = async () => {
  const apiUrl = 'https://backend.divinezone.in/getAllMantrasForBuild';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data.data[1].title, '==================----------------------------------');

    if (data.data && data.message === 'All mantras fetched successfully.' && Array.isArray(data.data)) {
      const dynamicPlayListData = data.data.map((item) => ({
        id: item.id || '1',
        title: item.title || 'Kesariya',
        artist: item.artist || 'Arijit Singh, Amitabh Bhattacharya',
        album: item.album || 'Brahmastra',
        artwork: item.artWork || 'https://backend.divinezone.in/image/1701285313510-image-3d-ganesha-dark-background-diwali%20(2).jpg',
        url: item.url || '',
      }));

      // console.log('Fetched data:', dynamicPlayListData);
      return dynamicPlayListData;
    } else {
      console.error('Error fetching data:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export async function setupPlayer() {
  try {
    await TrackPlayer.setupPlayer();
    return true;
  } catch (error) {
    console.error('Error setting up player:', error);
    return false;
  }
}

export async function addTracks() {
  try {
    const dynamicPlayListData = await fetchPlayListData();
    console.log('==================', dynamicPlayListData[0].artWork, '=============================');

    if (dynamicPlayListData.length > 0) {
      await TrackPlayer.reset(); // Clear existing tracks before adding new ones
      await TrackPlayer.add(dynamicPlayListData);
      await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      console.log('Tracks added successfully. 😁😁😁');
    } else {
      console.error('No tracks fetched.');
    }
  } catch (error) {
    console.error('Error adding tracks ===== :', error); // Log the entire error object
  }
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
