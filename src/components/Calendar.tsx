import styled from '@emotion/styled';
import dayjs, { Dayjs } from 'dayjs';

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
  const today = dayjs().month(8);
  const month = today.month() + 1;
  const year = today.year();
  const weeks = getCalendarDataset(today);

  return (
    <CalendarWrapper>
      <CalendarHeader>{year}년 {month}월</CalendarHeader>
      <CalendarGrid>
        {weekDays.map((d) => (
          <WeekDay key={d}>{d}</WeekDay>
        ))}
        {weeks.flat().map((date, i) => (
          <DateCell key={i} isToday={date === String(today.date())}>
            {date}
          </DateCell>
        ))}
      </CalendarGrid>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  background: #fff;
  /* border-radius: 12px; */
  /* box-shadow: 0 2px 8px rgba(0,0,0,0.06); */
  padding: 20px 10px;
  margin: 24px 0;
  max-width: 340px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
`;
const WeekDay = styled.div`
  font-size: 0.85rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-weight: 400;
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
  color: ${({ isToday }) => (isToday ? '#e88ca6' : '#222')};
  opacity: ${({ children }) => (children === '' ? 0 : 1)};
`;