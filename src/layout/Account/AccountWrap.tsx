import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.png?url';
import toss from '@/assets/icons/toss.png?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}
const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('계좌번호가 복사되었습니다.😉😉');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  return (
    <Wrapper>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
        {kakaopayAccount && (
          <KakaoInlineButton href={kakaopayAccount} target="_blank" rel="noreferrer">
            <KakaopayImg src={kakaopay} alt="kakaopay" />
          </KakaoInlineButton>
        )}
      </Info>
      <Details>
        <AccountInfo>
          {bank} {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </CopyButton>
      </Details>
      <AccountLinks>
        {tossAccount && (
          <AccountButton href={tossAccount} target="_blank" rel="noreferrer">
            <TossImg src={toss} alt="toss" />
          </AccountButton>
        )}
      </AccountLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: 'SUITE-Regular';
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`;
const Relation = styled.span`
  color: #44484d;
`;
const Name = styled.span`
  font-size: 1rem
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountInfo = styled.div``;
const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`;

const AccountLinks = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;

const AccountButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin: 5px 0;
  padding: 0.7em 1.5em;
  width: 100%;
  font-size: 0.7rem;
  cursor: pointer;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  background: white;
`;

const KakaopayImg = styled.img`
  width: 44px;
`;

const TossImg = styled.img`  width: 70px;
`;

const KakaoInlineButton = styled.a`
  display: flex;
  align-items: center;
  margin-left: 6px;
  border: none;
  border-radius: 5px;
  padding: 0.2em 0.5em;
  background: white;
  height: 32px;
`;

export default AccountWrap;
