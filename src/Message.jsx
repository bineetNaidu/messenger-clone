import React, { memo, forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Static
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && 'message__user'}`} ref={ref}>
      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
        <CardContent className="message__contents">
          <Typography
            color="initial"
            className="message__text"
            variant="h5"
            component="h2"
          >
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default memo(Message);
