export const playListData = [
  {
    id: 1,
    title: 'Maan Meri Jaan',
    artist: 'King',
    album: 'Champagne Talk',
    artwork:
      'https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg',
    url: require('./assets/one.mp3'),
  },
  {
    id: 2,
    title: 'Raataan Lambiyan',
    artist: 'Tanishk Bagchi, Asees Kaur',
    album: 'Shershaah',
    artwork:
      'https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg',
    url: require('./assets/two.mp3'),
  },
  {
    id: 3,
    title: 'Kesariya',
    artist: 'Arijit Singh, Amitabh Bhattacharya',
    album: 'Brahmastra',
    artwork:
      'https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg',
    url: require('./assets/three.mp3'),
  },
  {
    id: 4,
    title: 'Title Track',
    artist: 'Arijit Singh, Parampara Tandon',
    album: 'Pal Pal Dil Ke Paas',
    artwork:
      'https://c.saavncdn.com/328/Pal-Pal-Dil-Ke-Paas-Hindi-2019-20200420150444-500x500.jpg',
    url: require('./assets/four.mp3'),
  },
  {
    id: 5,
    title: 'Besharam Rang',
    artist: 'Vishal & Shekhar, Shilpa Rao',
    album: 'Pathaan',
    artwork:
      'https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-500x500.jpg',
    url: require('./assets/five.mp3'),
  },
];

// constants.js

export const API_URL = 'https://backend.divinezone.in/getAllMantras';




// constants.js

// export const MANTRAS_API_URL = 'https://backend.divinezone.in/getAllMantras';

// export const fetchMantras = async () => {
//   try {
//     const response = await fetch(MANTRAS_API_URL);
//     const data = await response.json();
//     return data.data || [];
//   } catch (error) {
//     console.error('Error fetching mantras:', error);
//     throw error;
//   }
// };

// export const playListData = async () => {
//   try {
//     const mantrasData = await fetchMantras();
//     return mantrasData.map(mantra => ({
//       id: mantra.mantras_id.toString(),
//       url: mantra.URL,
//       title: mantra.title,
//       artist: mantra.artist,
//       artwork: mantra.artWork,
//     }));
//   } catch (error) {
//     console.error('Error creating playlist data:', error);
//     throw error;
//   }
// };
