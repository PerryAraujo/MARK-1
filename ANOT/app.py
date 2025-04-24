from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('/ANOT/templates/index.html')

@app.route('/salvar', methods=['POST'])
def salvar():
    data = request.json
    texto = data.get('texto', '')
    with open('transcricao.txt', 'a', encoding='utf-8') as f:
        f.write(texto + '\n')
    return {'status': 'ok'}

if __name__ == '__main__':
    app.run(debug=True)
