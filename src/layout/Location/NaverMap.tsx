import { useEffect, useRef } from 'react';

const NAVER_CLIENT_ID = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;

interface NaverMapProps {
  lat: number;
  lon: number;
}

const NaverMap = ({ lat, lon }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 이미 스크립트가 있으면 중복 삽입 방지
    if (document.getElementById('naver-map-script')) return;

    const script = document.createElement('script');
    script.id = 'naver-map-script';
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.naver && mapRef.current) {
        // @ts-ignore
        new window.naver.maps.Map(mapRef.current, {
          center: new window.naver.maps.LatLng(lat, lon),
          zoom: 17,
        });
      }
    };
    document.body.appendChild(script);
  }, [lat, lon]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default NaverMap;