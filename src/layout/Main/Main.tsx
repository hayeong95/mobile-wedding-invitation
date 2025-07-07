import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/01.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImgWrapper>
        <MainImg src={mainImg} />
      </MainImgWrapper>
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImgWrapper = styled.div`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 200px 200px 0 0;
  border: 3px solid #e8cfae;
  background: #fff;
  box-shadow: 0 4px 24px 0 rgba(40,18,17,0.08);
  overflow: hidden;
`;

const MainImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 200px 200px 0 0;
`;

const MainTitle = styled.p`
  font-family: LeeSeoyun, serif;
  font-size: 2rem;
  color:rgb(40, 18, 17);
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-family: LeeSeoyun, serif;
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
