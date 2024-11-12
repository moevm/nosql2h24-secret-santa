import flask
from flask import Flask
import json

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/registration')
def registration():
    return flask.render_template('registr_team1.html')

@app.route('/login')
def login():
    return flask.render_template('login_page.html')

@app.route('/registration2')
def registration2():
    return flask.render_template('registr_team2.html')

@app.route('/admin')
def admin():
    return flask.render_template('admin.html')

@app.route('/list_people')
def list_people():
    return flask.render_template('list_people.html')

@app.route('/list_team')
def list_team():
    return flask.render_template('list_team.html')

@app.route('/host')
def host():
    return flask.render_template('host.html')

@app.route('/get_list_people')
def get_list_people():
    # сюда можно написать запрос к бд
    return [{
                'name': 'ОляД',
                'email': 'olyathebest@mail.ru',
                'team': 'team1',
                'isHost': True,
                'teamNumber': 1,
                'adminName': 'Админ 1'
            },
            {
                'name': 'ОляВ',
                'email': 'olyathebesttoo@mail.ru',
                'team': 'team2',
                'isHost': False,
                'teamNumber': 2,
                'adminName': 'Админ 2'
            },
            {
                'name': 'Таня',
                'email': 'tanyahatesmongodb@mail.ru',
                'team': 'team3',
                'isHost': False,
                'teamNumber': 3,
                'adminName': 'Админ 3'
            }]

@app.route('/get_list_team')
def get_list_team():
    #сюда можно написать запрос к бд
    return [{
                'team': 'team1',
                'admin': 'Админ 1',
                'numberPlayers': 1,
                'numberForms': 1,
                'numberAcceptedCheques': 1,
                'numberNotAcceptedCheques': 0,
                'numberSendedGifts': 0,
                'numberGotGifts': 0,
                'formDeadline': '01-01-24',
                'chequeDeadline': '02-01-24',
                'giftDeadline': '03-01-24',
                'startPrice': 1,
                'endPrice': 2
            },
            {
                'team': 'team2',
                'admin': 'Админ 2',
                'numberPlayers': 1,
                'numberForms': 1,
                'numberAcceptedCheques': 1,
                'numberNotAcceptedCheques': 0,
                'numberSendedGifts': 0,
                'numberGotGifts': 0,
                'formDeadline': '01-01-24',
                'chequeDeadline': '02-01-24',
                'giftDeadline': '03-01-24',
                'startPrice': 1000,
                'endPrice': 2000
            },
            {
                'team': 'team3',
                'admin': 'Админ 3',
                'numberPlayers': 1,
                'numberForms': 1,
                'numberAcceptedCheques': 1,
                'numberNotAcceptedCheques': 0,
                'numberSendedGifts': 0,
                'numberGotGifts': 0,
                'formDeadline': '01-01-24',
                'chequeDeadline': '02-01-24',
                'giftDeadline': '03-01-24',
                'startPrice': 1000000,
                'endPrice': 2000000
            }]

@app.route('/post_new_team', methods=['POST'])
def post_new_team():
    teamInfo = json.loads(flask.request.data)
    print(teamInfo)
    #сюда можно добавить запись в бд
    return app.response_class(status=200)



if __name__ == '__main__':
    app.run(host='', port=8000)