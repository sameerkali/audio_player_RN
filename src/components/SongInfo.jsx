import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Track} from 'react-native-track-player';

const SongInfo = ({track}) => {
  return (
    <View style={styles.container}>
      <View>
        {track?.artwork && (
          <Image source={{uri: track.artwork}} style={styles.artwork} />
        )}
        <Text style={styles.name}>{track?.title}</Text>
        <Text style={styles.artist}>
          {track?.artist} {track?.album}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artwork: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  artist: {
    color: '#d9d9d9',
    textAlign: 'center',
  },
});

export default SongInfo;



// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// const SongInfo = ({ track }) => {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.name}>{track?.title}</Text>
//         <Text style={styles.artist}>{track?.artist}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '90%',
//     marginTop: 18,
//     flexDirection: 'row',
//     alignItems: 'baseline',
//     justifyContent: 'center',
//   },
//   name: {
//     marginBottom: 8,
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: '800',
//   },
//   artist: {
//     color: '#d9d9d9',
//     textAlign: 'center',
//   },
// });

// export default SongInfo;
