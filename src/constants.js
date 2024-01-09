// export const playListData = [
//   {
//     mantras_id: 16,
//     title: 'trgfkmbhhhh',
//     artWork:
//       'https://backend.divinezone.in/image/1701285313510-image-3d-ganesha-dark-background-diwali (2).jpg',
//     URL:
//       'https://backend.divinezone.in/audio/1701285323935-Ugram Viram Maha Vishnum.mp3',
//     artist: 'gbbbbb',
//     details: 'deeksha',
//     createdAt: '2023-11-29T19:15:39.000Z',
//     updatedAt: '2023-12-12T10:53:41.000Z',
//   },
//   {
//     mantras_id: 18,
//     title: 'prakhar',
//     artWork:
//       'https://backend.divinezone.in/image/1701285508610-image-3d-ganesha-dark-background-diwali (2).jpg',
//     URL:
//       'https://backend.divinezone.in/audio/1701285532039-Ugram Viram Maha Vishnum.mp3',
//     artist: 'not good',
//     details: 'hi',
//     createdAt: '2023-11-29T19:19:15.000Z',
//     updatedAt: '2023-12-05T10:13:52.000Z',
//   },
//   {
//     mantras_id: 21,
//     title: 'Deeksha',
//     artWork:
//       'https://backend.divinezone.in/image/1701344528684-prince.jpeg',
//     URL: 'https://backend.divinezone.in/audio/1701344528686-Ugram.mp3',
//     artist: 'i m good',
//     details: 'these are',
//     createdAt: '2023-11-30T11:42:11.000Z',
//     updatedAt: '2023-12-05T10:11:06.000Z',
//   },
//   {
//     mantras_id: 24,
//     title: 'zmndv jhsf v',
//     artWork:
//       'http://143.110.188.54:7000/image/1703659199422-Aqsa-Mosque.jpg state of palastile.jpg',
//     URL:
//       'http://143.110.188.54:7000/audio/1703659199559-01 Sooraj Dooba Hain Yaaron - Roy (Arijit Singh) 192Kbps.mp3',
//     artist: 'dhzh bvhjsd  vks',
//     details: 'dzhbjhsd fj s',
//     createdAt: '2023-12-27T06:40:00.000Z',
//     updatedAt: '2023-12-27T06:40:00.000Z',
//   },
// ];

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

// export const API_URL = 'https://backend.divinezone.in/getAllMantras';




// constants.js

// export const MANTRAS_API_URL = 'https://backend.divinezone.in/getAllMantras';

// export const fetchMantras = async () => {
//   try {
//     const response = await fetch(MANTRAS_API_URL);
//     console.log("================================"+response)
//     const data = await response.json();
//     console.log("================================"+data)
//     return data.data || [];
//   } catch (error) {
//     console.error('Error fetching mantras:', error);
//     throw error;
//   }
// };

// export const playListData = async () => {
//   try {
//     const mantrasData = await fetchMantras();
//     // console.log("================================"+mantrasData)
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
