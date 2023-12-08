from flask import Flask, request, jsonify
from flask_cors import CORS
import docx2txt

app = Flask(__name__)
CORS(app, resources={r"/upload": {"origins": "http://localhost:3000"}})

def check_keywords(text):
    # Customize this function to check for specific keywords
    keywords = ['bank guarantee', 'bg']
    for keyword in keywords:
        if keyword in text.lower():
            return True
    return False

@app.route('/upload', methods=['POST'])
def upload():
    # Handle the uploaded files here
    po_file = request.files.get('poFile')
    invoice_file = request.files.get('invoiceFile')

    if po_file and invoice_file:
        # Read the text content from the files
        po_text = docx2txt.process(po_file)
        invoice_text = docx2txt.process(invoice_file)

        # Check for keywords in both files
        po_has_keywords = check_keywords(po_text)
        invoice_has_keywords = check_keywords(invoice_text)

        # Return a response based on the keyword check
        response = {
            'status': 'success',
            'po_has_keywords': po_has_keywords,
            'invoice_has_keywords': invoice_has_keywords,
        }
        return jsonify(response)
    else:
        return jsonify({'status': 'error', 'message': 'Files not received'})

if __name__ == '__main__':
    app.run(debug=True)
