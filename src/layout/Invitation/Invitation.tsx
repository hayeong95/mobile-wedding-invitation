import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host';
import RoundButton from '@/components/RoundButton';
import { Caption, Paragraph } from '@/components/Text';

const Invitation = () => {
  const { greeting } = data;

  // const handleICSDownload = () => {
  //   const icsContent = [
  //     'BEGIN:VCALENDAR',
  //     'VERSION:2.0',
  //     'BEGIN:VEVENT',
  //     'DTSTART:20250906T020000Z',
  //     'DTEND:20250906T030000Z',
  //     'SUMMARY:하영 제세 결혼식',
  //     'DESCRIPTION:저희 결혼식에 초대합니다!',
  //     'LOCATION:보테가마지오',
  //     'END:VEVENT',
  //     'END:VCALENDAR'
  //   ].join('\\r\\n');

  //   const blob = new Blob([icsContent], { type: 'text/calendar' });
  //   const url = URL.createObjectURL(blob);

  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'wedding-invitation.ics';
  //   a.click();

  //   URL.revokeObjectURL(url);
  // };

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <ButtonRow>
        <RoundButton
          target="_blank"
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=하영 제세 결혼식&dates=20250906T020000Z/20250906T030000Z&details=저희 결혼식에 초대합니다!&location=보테가마지오"
          rel="noreferrer"
        >
          구글 일정 등록하기
        </RoundButton>
        <RoundButton
          href="/wedding-invitation.ics"
          target="_blank"
          rel="noreferrer"
        >
          애플 일정 등록하기
        </RoundButton>
      </ButtonRow>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
