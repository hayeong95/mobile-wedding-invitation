import data from 'data1.json';
import NaverMap from './NaverMap.js';

const Map = () => {
  const { lat, lon } = data.mapInfo;
  return <NaverMap lat={lat} lon={lon} />;
};

export default Map;
