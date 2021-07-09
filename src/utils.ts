export interface Message {
    id: number;
    userName: string;
    text: string;
}

const users = ['Phoebe Buffay', 'Joey Tribbiani', 'Chandler Bing', 'Ross Geller', 'Rachel Green', 'Monica Geller'];

const createMessage = (messageNumber: number) => {
	const userName = users[Math.floor(Math.random() * users.length)];
	const randomNumber = Math.random() * 100000;
	return {
		id: randomNumber,
		userName,
		text: `${messageNumber}. ${userName} sent a message with id ${randomNumber}`,
	};
};

export function createMessageList(count: number) {
	const messages: Message[] = [];

	let i = 0;
	while (i < count) {
		messages.push(createMessage(++i));
	}

	return messages;
}