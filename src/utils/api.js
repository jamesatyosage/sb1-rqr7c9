import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const transcribeAudio = async (audioBlob) => {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'audio.wav');

  try {
    const response = await axios.post(`${API_URL}/transcribe`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error transcribing audio:', error);
    throw error;
  }
};