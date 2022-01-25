import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'user',
	password: 'password',
	host: 'smtp.your-email.com',
	ssl: true,
});

export const sendMessagetoEmail = ({ textMsg, txEmail, txName }) => {
    client.send(
        {
            text: textMsg,
            from: txEmail,
            to: 'morezqdev@gmail.com',
            cc: '',
            subject: `Email from Portfolio Website: Client ${txName}`,
        },
        (err, message) => {
            console.log(err || message);
        }
    );
}

// send the message and get a callback with an error or details of the message that was sent
