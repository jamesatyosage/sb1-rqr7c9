from flask import Flask, request, jsonify
from flask_cors import CORS
import whisper
from textblob import TextBlob

app = Flask(__name__)
CORS(app)

# Load Whisper model
model = whisper.load_model("base")

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    audio_file = request.files['audio']
    
    try:
        # Transcribe audio using Whisper
        result = model.transcribe(audio_file)
        transcription = result["text"]
        
        # Perform sentiment analysis
        blob = TextBlob(transcription)
        sentiment = blob.sentiment.polarity
        
        return jsonify({
            "transcript": transcription,
            "sentiment": sentiment
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == "__main__":
    app.run(debug=True)