# from http.server import HTTPServer, CGIHTTPRequestHandler
#
# server_address = ("", 8000)
#
# httpd = HTTPServer(server_address, CGIHTTPRequestHandler)
#
# httpd.serve_forever()
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

@app.route('/get_list_people')
def get_list_people():
    # сюда можно написать запрос к бд
    return [{
                'name': 'ОляД',
                'team': 'team1'
            },
            {
                'name': 'ОляВ',
                'team': 'team2'
            },
            {
                'name': 'Таня',
                'team': 'team3'
            }]

@app.route('/get_list_team')
def get_list_team():
    #сюда можно написать запрос к бд
    return [{
                'team': 'team1',
                'admin': 'Админ 1'
            },
            {
                'team': 'team2',
                'admin': 'Админ 2'
            },
            {
                'team': 'team3',
                'admin': 'Админ 3'
            }]

@app.route('/post_new_team', methods=['POST'])
def post_new_team():
    teamInfo = json.loads(flask.request.data)
    print(teamInfo)
    #сюда можно добавить запись в бд
    return app.response_class(status=200)

if __name__ == '__main__':
    app.run(host='', port=8000)