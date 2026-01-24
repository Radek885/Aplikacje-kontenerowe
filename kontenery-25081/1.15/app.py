from flask import Flask

app = Flask(__name__)

clicks = 0

@app.route('/')
def index():
    global clicks
    return f'''
    <html>
        <body style="text-align: center; font-family: sans-serif; padding-top: 50px;">
            <h1>Klikadełko</h1>
            <p>Liczba wciśnięć: <strong>{clicks}</strong></p>
            <form action="/click" method="post">
                <button type="submit" style="padding: 10px 20px; cursor: pointer;">Kliknij mnie!</button>
            </form>
            <br>
            <a href="/">Odśwież</a>
        </body>
    </html>
    '''

@app.route('/click', methods=['POST'])
def click():
    global clicks
    clicks += 1
    return index()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)