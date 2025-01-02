import axios from 'axios';

const URL = 'http://localhost:3080/api'

export const MessageService = {
    sendMessage
  };

async function sendMessage(message) {
    console.log(message)
    const messageToSend = {
        message: message
    }
    const response = await axios.post(URL, messageToSend)
    return response.data
}