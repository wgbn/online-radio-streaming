export interface RadioStation {
  id: string;
  name: string;
  url: string;
  genre?: string;
  logo?: string;
}

// This is a sample array that you can modify with your radio stations
export const radioStations: RadioStation[] = [
  {
    id: '1',
    name: 'RFM Portugal',
    url: 'https://23603.live.streamtheworld.com/RFMAAC.aac',
    genre: 'Pop',
  },
  {
    id: '2',
    name: 'Itapoan FM',
    url: 'https://cast.radiu.live:9300/stream',
    genre: 'Pop',
  },
];