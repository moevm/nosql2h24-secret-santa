import flask
from flask import Flask
import json

from db import database

db = database.Database("mongodb://localhost:27017/", "secret_santa_db")
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
    return db.users_list()

@app.route('/get_list_team')
def get_list_team():
    return db.games_list()

@app.route('/post_new_team', methods=['POST'])
def post_new_team():
    team_info = json.loads(flask.request.data)
    print(team_info)
    db.register_game(team_info)
    return app.response_class(status=200)


@app.route('/user/<username>')
def get_user_page(username):
    return flask.render_template('player_page.html')



if __name__ == '__main__':
    app.run(host='', port=8000)
