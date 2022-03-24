from distutils.log import debug
from flask import Flask
import requests

app = Flask(__name__)

# Rota para buscar os dados da API (por enquanto pelo repl.co)
@app.route('/alimentos')
def alimentos():

    # Links para pegar os dados da api, deployado do heroku
    link = 'https://api-globo2022.herokuapp.com/'
    
    # Fazendo a requisiçãoe formatando para enviar os dados corretamente
    request = requests.get(link)
    resp = request.json()
    aux = list(resp.values())
    response = {"alimentos": aux}
    return response
    
if __name__ == "__main__": 
    app.run(debug=True)    