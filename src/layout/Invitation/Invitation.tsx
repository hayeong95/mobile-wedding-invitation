import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host';
import RoundButton from '@/components/RoundButton';
import { Paragraph } from '@/components/Text';
import flowerImg from '@/assets/images/nature.png';

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
      <Paragraph >{greeting.message}</Paragraph>
      <img
        src={flowerImg}
        alt="flower"
        style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 6 }}
      />
      <Host />
      <Paragraph style={{ textAlign: 'center' }}>{greeting.eventDetail}</Paragraph>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 32px 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const ScheduleButtons = () => (
  <ButtonRow>
    <RoundButton
      target="_blank"
      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=하영 제세 결혼식&dates=20250906T020000Z/20250906T030000Z&details=저희 결혼식에 초대합니다!&location=보테가마지오"
      rel="noreferrer"
    >
      구글 일정 등록
    </RoundButton>
    <RoundButton
      href="https://hayeong95.github.io/mobile-wedding-invitation/wedding-invitation.ics"
      target="_blank"
      rel="noreferrer"
    >
      애플 일정 등록
    </RoundButton>
  </ButtonRow>
);
