import styled from '@emotion/styled';
import dayjs, { Dayjs } from 'dayjs';
import calendarBg from '@/assets/images/calendar-bg.jpg';
import { ScheduleButtons } from '@/layout/Invitation/Invitation';

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
type DayjsWeek = [string, string, string, string, string, string, string];
type DayjsMonth = DayjsWeek[];

// 달력 데이터 생성 함수
const getCalendarDataset = (date: Dayjs): DayjsMonth => {
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');
  const startDay = startOfMonth.day();
  const endDate = endOfMonth.date();

  const days: string[] = [];
  for (let i = 0; i < startDay; i++) days.push('');
  for (let d = 1; d <= endDate; d++) days.push(String(d));
  while (days.length % 7 !== 0) days.push('');

  const weeks: DayjsMonth = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7) as DayjsWeek);
  }
  return weeks;
};

const Calendar: React.FC = () => {
  // Always show September 2025 and highlight the 6th
  const eventDate = dayjs('2025-09-06');
  const calendarMonth = eventDate.startOf('month');
  const month = calendarMonth.month() + 1;
  const year = calendarMonth.year();
  const weeks = getCalendarDataset(calendarMonth);

  return (
    <CalendarWrapper>
      <CalendarContent>
        <CalendarHeader>{year}년 {month}월</CalendarHeader>
        <CalendarGrid>
          {weekDays.map((d) => (
            <WeekDay key={d}>{d}</WeekDay>
          ))}
          {weeks.flat().map((date, i) => (
            <DateCell key={i} isToday={date === '6'}>
              {date}
            </DateCell>
          ))}
        </CalendarGrid>
      </CalendarContent>
      <ScheduleButtonsWrapper>
        <ScheduleButtons background="rgba(255,255,255,0.15)" />
      </ScheduleButtonsWrapper>
      <BottomGradient />
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  background: url(${calendarBg}) center/cover no-repeat;
  aspect-ratio: 4/5;
  min-width: 350px;
  max-width: 800px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0;

  /* 배경 전체 오버레이 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.2);
    z-index: 1;
    pointer-events: none;
  }

  /* 위쪽 그라데이션 */
  &::after {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0;
    height: 60px;
    background: linear-gradient(to bottom, #FFF9F4 0%, rgba(255,249,244,0) 100%);
    z-index: 2;
    pointer-events: none;
    border-radius: 0;
  }
`;

const BottomGradient = styled.div`
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 60px;
  background: linear-gradient(to top, #FFF9F4 0%, rgba(255,249,244,0) 100%);
  z-index: 2;
  pointer-events: none;
  border-radius: 0;
`;
const CalendarContent = styled.div`
  background: rgba(255,255,255,0.7);
  border-radius: 16px;
  padding: 30px 10px;
  width: 60%;         // 또는 80%, 90% 등
  max-width: 500px;   // 필요시 최대폭 제한
  min-width: 220px;   // 필요시 최소폭 제한
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  position: relative;
  margin-top: 100px;
`;

// For the ScheduleButtons area (in Invitation/Invitation.tsx), wrap with a fully opaque background
// Example usage in the parent file:
// <OpaqueButtonRow><ScheduleButtons /></OpaqueButtonRow>
export const OpaqueButtonRow = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.0);
  padding: 12px 0;
  margin-top: -12px;
  display: flex;
  justify-content: center;
  z-index: 2;
`;
const CalendarHeader = styled.div`
  font-size: 1.4rem;
  font-family: 'LeeSeoyun', serif;
  font-weight: 700;
  margin-bottom: 18px;
  color: #e88ca6;
`;
const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 90%;
`;
const WeekDay = styled.div`
  font-size: 0.8rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-weight: 700;
  color: #e88ca6;
  text-align: center;
  letter-spacing: 0.02em;
`;
const DateCell = styled.div<{ isToday?: boolean }>`
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-weight: 400;
  background: ${({ isToday }) => (isToday ? '#ffe4ef' : 'transparent')};
  border-radius: 6px;
  color: ${({ isToday }) => (isToday ? '#e88ca6' : '#343a40')};
  opacity: ${({ children }) => (children === '' ? 0 : 1)};
`;

const ScheduleButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 16px;
`;