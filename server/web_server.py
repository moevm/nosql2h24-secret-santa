import flask
from flask import Flask
import json

from db import database

db = database.Database("mongodb://root:example@db:27017/", "secret_santa_db")
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

@app.route('/profile')
def profile():
    return flask.render_template('profile.html')

@app.route('/status')
def status():
    return flask.render_template('status.html')

@app.route('/statistics_org')
def statistics_org():
    return flask.render_template('page_org_statictics.html')

@app.route('/list_people')
def list_people():
    return flask.render_template('list_people.html')

@app.route('/list_team')
def list_team():
    return flask.render_template('list_team.html')

@app.route('/list_action')
def list_action():
    return flask.render_template('list_action.html')

@app.route('/site_statistics')
def site_statistics():
    return flask.render_template('site_statistics.html')

@app.route('/host')
def host():
    return flask.render_template('host.html')

@app.route('/get_list_people')
def get_list_people():
    return db.users_list()

@app.route('/get_list_team')
def get_list_team():
    answer = db.games_list()
    return answer

@app.route('/post_new_team', methods=['POST'])
def post_new_team():
    team_info = json.loads(flask.request.data)
    db.register_game(team_info)
    return app.response_class(status=200)


@app.route('/user/<username>')
def get_user_page(username):
    return flask.render_template('player_page.html')

@app.route('import_db', methods=['POST'])
def import_db():
    return app.response_class(status=200)

@app.route('export_db', methods=['POST'])
def export_db():
    export_status = 200
    # вместо filename - название файла для экспорта. если всё норм, то export_db вернёт True
    if not db.export_db("filename"):
      export_status = 500
    return app.response_class(status=export_status)

@app.route('import_db', methods=['POST'])
def import_db():
    # db.import_db()
    return app.response_class(status=200)


@app.route('/search/<entity>')
def get_entity(entity):
    #entity - название сущности для search_entity методов Database
    #нужно передать json с полями, по которым искать
    return flask.render_template('player_page.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
