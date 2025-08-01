import styled from '@emotion/styled';
import CommentForm from './CommentForm';
import { Heading2 } from '@/components/Text';

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Heading2>
        메시지를 남겨주세요.
        <br />
        신랑 신부에게만 전달됩니다.
      </Heading2>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;
