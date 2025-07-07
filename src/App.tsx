import { useEffect, useRef, useState, Suspense, lazy } from 'react';
// import { NavermapsProvider } from 'react-naver-maps';
import { Heading1 } from '@/components/Text';
import Wrapper from '@/components/Wrapper';
import Account from '@/layout/Account/Account';
import Container from '@/layout/Container';
import FloatingBar from '@/layout/FloatingBar/FloatingBar';
// import GalleryWrap from '@/layout/Gallery/GalleryWrap';
import Guestbook from '@/layout/Guestbook/Guestbook';
import Invitation from '@/layout/Invitation/Invitation';
import Location from '@/layout/Location/Location';
import Main from '@/layout/Main/Main';
import Calendar from '@/components/Calendar';
import { ScheduleButtons } from '@/layout/Invitation/Invitation';
import styled from '@emotion/styled';

const GalleryWrap = lazy(() => import('@/layout/Gallery/GalleryWrap'));

const Attribution = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  color: #bbb;
  margin: 24px 0 12px 0;
  a {
    color: #bbb;
    text-decoration: none;
    pointer-events: auto;
  }
`;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Heading1>모시는 글</Heading1>
          <Invitation />
        </Wrapper>
        <Wrapper>
          <Calendar />
          <ScheduleButtons />
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1>Gallery</Heading1>
          <Suspense fallback={<div>갤러리 불러오는 중...</div>}>
            <GalleryWrap />
          </Suspense>
        </Wrapper>
        <Wrapper>
          <Heading1>마음 전하실 곳</Heading1>
          <Account />
        </Wrapper>
        <Wrapper>
          <Heading1>오시는 길</Heading1>
          <Location />
        </Wrapper>
        <Wrapper>
          <Heading1>신랑 신부에게</Heading1>
          <Guestbook />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
      <Attribution>
        <a href="https://www.flaticon.com/free-icons/leaves" title="leaves icons" target="_blank" rel="noopener noreferrer">
          Leaves icons created by amoghdesign - Flaticon
        </a>
      </Attribution>
    </>
  );
}

export default App;
