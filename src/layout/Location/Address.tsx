import styled from '@emotion/styled';
import data from 'data1.json';
import { Caption, PointTitle } from '@/components/Text';
import { ILocationInfo } from '@/types/data';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <PointTitle>{title}</PointTitle>
            <Caption>{desc}</Caption>
          </Way>
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
