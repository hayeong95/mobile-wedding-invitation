import styled from '@emotion/styled';
import AccountWrap from './AccountWrap';
import Accordion from '@/components/Accordion';


type AccountProps = {
  data: any;
};

const Account = ({ data }: AccountProps) => {
  const { hostInfo } = data;
  return (
    <HostInfoWrapper>
      {hostInfo.map((host: any) => {
        return (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account: any) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 8px 0;
`;
