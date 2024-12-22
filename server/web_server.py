import flask
from flask import Flask
import json
import re
import datetime
from db import database
from src.utils import get_actions_types, get_delivery_types

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

@app.route('/statistics_org/<game_id>')
def statistics_org(game_id):
    return flask.render_template('page_org_statictics.html', game_id=game_id)

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

@app.route('/host/<id>')
def host(id):
    games = get_list_team()
    for game in games:
        if int(id) in game['users']:
            return flask.render_template('host.html', game_id=game['id'])
    return flask.render_template('login_page.html')


@app.route('/get_list_people')
def get_list_people():
   return db.users_list()
    # return [{
    #     #'_id': ObjectId('6722d278ee5e086ddmeff8b0'),
    #     'id': 1,
    #     'name': 'test_user1',
    #     'email': 'test_email1@mail.com',
    #     'password': 'aafewfwefg',
    #     'is_host': True,
    #     'created_at': datetime.datetime(2024, 11, 11, 0, 0),
    #     'updated_at': datetime.datetime(2024, 11, 12, 0, 0)
    # },
    # {
    #     #'_id': ObjectId('6722d278ee5e086effffuyuggb0'),
    #     'id': 2,
    #     'name': 'test_user2',
    #     'email': 'test_email2@mail.com',
    #     'password': 'hnhytresfsd',
    #     'is_host': False,
    #     'address': 'nevsky str. 17',
    #     'index': 111111,
    #     'phone': 89999999999,
    #     'status': 1,
    #     'delivery_type': 1,
    #     'wishlist': 'sweets, computer',
    #     'stoplist': 'books ',
    #     'recipient': 3,
    #     'santa': 3,
    #     'got_gift': False,
    #     'created_at': datetime.datetime(2024, 11, 11, 0, 0),
    #     'updated_at': datetime.datetime(2024, 11, 12, 0, 0),
    #     'wrong_gift': False,
    # },
    # {
    #     #'_id': ObjectId('6722d278ee5e086effffuyuggb0'),
    #     'id': 3,
    #     'name': 'test_user3',
    #     'email': 'test_email3@mail.com',
    #     'password': 'hnhytresfsd',
    #     'is_host': False,
    #     'address': 'nevsky str. 17',
    #     'index': 111111,
    #     'phone': 89999999999,
    #     'status': 1,
    #     'delivery_type': 1,
    #     'wishlist': 'flowers;money',
    #     'stoplist': 'candles',
    #     'recipient': 2,
    #     'santa': 2,
    #     'got_gift': False,
    #     'created_at': datetime.datetime(2024, 11, 11, 0, 0),
    #     'updated_at': datetime.datetime(2024, 11, 12, 0, 0),
    #     'wrong_gift': False,
    # },
    # ]

@app.route('/get_list_people_from_team/<game_id>')
def get_list_people_from_team(game_id):
    users = get_list_people()
    games = get_list_team()

    game_users_list = []
    for game in games:
        if game['id'] == int(game_id):
            for user in users:
                if user['id'] in game['users'] and not user['is_host']:
                    game_users_list.append(user)
    return game_users_list

@app.route('/get_list_team')
def get_list_team():
    answer = db.games_list()
    # answer = [{
    #     'id': 1,
    #     'lowest_price': 100,
    #     'highest_price': 200,
    #     'form_deadline': '24.01.25',
    #     'purchase_deadline': '25.01.25',
    #     'send_deadline': '26.01.25',
    #     'created_at': '23.01.25',
    #     'updated_at': '23.01.25',
    #     'users': [1, 2],
    #     'events': [1, 2]
    # }]
    return answer

@app.route('/post_new_team', methods=['POST'])
def post_new_team():
    team_info = json.loads(flask.request.data)
    db.register_game(team_info)
    return app.response_class(status=200)

@app.route('/update_user', methods=['POST'])
def update_user():
    user_info = json.loads(flask.request.data)
    print(user_info)
    #обновить информацию об игроке в бд
    return app.response_class(status=200)


@app.route('/update_users', methods=['POST'])
def update_users():
    users = json.loads(flask.request.data)
    print(users)
    #обновить всю информацию о юзерах (по сути полностью стереть старую и записать новую)
    return app.response_class(status=200)


@app.route('/user/<username>')
def get_user_page(username):
    return flask.render_template('player_page.html')

@app.route('/get_actions')
def get_actions():
    actions_types = get_actions_types()
    #запрос на получение всех событий
    actions = []
    # actions = [{'player_id': 2, 'type': 2, 'date': datetime.datetime(2024, 11, 21, 0, 0)},
    #            {'player_id': 1, 'type': 1, 'date': datetime.datetime(2024, 12, 12, 0, 0)}]

    users = get_list_people()
    actions_list = []
    for action in actions:
        for user in users:
            if user['id'] == action['player_id']:
                actions_list.append(f'{user["name"]} {actions_types[action["type"]]}')

    return actions_list


@app.route('/get_actions_statistics')
def get_actions_statistics():
    actions_types = get_actions_types()
    statistics = [0 for _ in range(len(actions_types))]

    #запрос на получение всех событий
    actions = []
    # actions = [{'player_id': 2, 'type': 2, 'date': datetime.datetime(2024, 11, 21, 0, 0)},
    #            {'player_id': 1, 'type': 1, 'date': datetime.datetime(2024, 12, 12, 0, 0)}]
    for action in actions:
        statistics[action['type']] += 1
    return statistics

@app.route('/get_forms_statistics')
def get_form_statistics():
    users = get_list_people()
    answer = 0
    for user in users:
        if not user['is_host'] and user['status'] > 0:
            answer += 1
    return [answer, len(users) - answer]


@app.route('/get_gifts_sending_statistics')
def get_gifts_sending_statistics():
    users = get_list_people()
    answer = 0
    for user in users:
        if not user['is_host'] and user['status'] >= 2:
            answer += 1
    return [answer, len(users) - answer]


@app.route('/get_gifts_buying_statistics')
def get_gifts_buying_statistics():
    users = get_list_people()
    answer = 0
    for user in users:
        if not user['is_host'] and user['status'] >= 1:
            answer += 1
    return [answer, len(users) - answer]

@app.route('/get_teams_troubles_statistics')
def get_teams_troubles_statistics():
    teams = get_list_team()
    users = get_list_people()
    answer = 0
    teams_with_troubles = set()
    for team in teams:
        for user_id in team['users']:
            for user in users:
                if user['id'] == user_id and not user['is_host'] and user['status'] < 3 and team['id'] not in teams_with_troubles:
                    answer += 1
                    teams_with_troubles.add(team['id'])
    return [answer, len(teams) - answer]

@app.route('/get_teams_troubles')
def get_teams_troubles():
    teams = get_list_team()
    users = get_list_people()
    teams_with_form_troubles = set()
    teams_with_buying_gifts_troubles = set()
    teams_with_sending_gifts_troubles = set()
    teams_with_confirm_troubles = set()
    for team in teams:
        for user_id in team['users']:
            for user in users:
                if user['id'] == user_id and not user['is_host']:
                    if user['status'] < 0:
                        teams_with_form_troubles.add(team['id'])
                    if user['status'] < 1:
                        teams_with_buying_gifts_troubles.add(team['id'])
                    if user['status'] < 2:
                        teams_with_sending_gifts_troubles.add(team['id'])
                    if user['status'] < 3:
                        teams_with_confirm_troubles.add(team['id'])

    return [len(teams_with_form_troubles), len(teams_with_buying_gifts_troubles), len(teams_with_sending_gifts_troubles),
            len(teams_with_confirm_troubles)]

@app.route('/get_all_game_statistics/<game_id>')
def get_all_game_statistics(game_id):
    games = get_list_team()
    users = get_list_people()

    forms = 0
    cheque = 0
    sends = 0
    for game in games:
        if int(game_id) == game['id']:
            for user_id in game['users']:
                for user in users:
                    if user_id == user['id'] and not user['is_host']:
                        if user['status'] >= 0:
                            forms += 1
                        if user['status'] >= 1:
                            cheque += 1
                        if user['status'] >= 2:
                            sends += 1
            return [len(game['users']) - 1, forms, cheque, sends]
    return [0, 0, 0, 0]


@app.route('/get_game_statistics_form/<game_id>')
def get_game_statistics_form(game_id):
    games = get_list_team()
    users = get_list_people()

    forms = 0
    for game in games:
        if int(game_id) == game['id']:
            for user_id in game['users']:
                for user in users:
                    if user_id == user['id'] and not user['is_host']:
                        if user['status'] >= 0:
                            forms += 1
            return [forms, len(game['users']) - 1 - forms]
    return [0, 0]

@app.route('/get_game_statistics_cheques/<game_id>')
def get_game_statistics_cheques(game_id):
    games = get_list_team()
    users = get_list_people()

    cheques = 0
    for game in games:
        if int(game_id) == game['id']:
            for user_id in game['users']:
                for user in users:
                    if user_id == user['id'] and not user['is_host']:
                        if user['status'] >= 1:
                            cheques += 1
            return [cheques, 0, len(game['users']) - 1 - cheques]
    return [0, 0, 0]

@app.route('/get_game_statistics_sends/<game_id>')
def get_game_statistics_sends(game_id):
    games = get_list_team()
    users = get_list_people()

    sends = 0
    for game in games:
        if int(game_id) == game['id']:
            for user_id in game['users']:
                for user in users:
                    if user_id == user['id'] and not user['is_host']:
                        if user['status'] >= 2:
                            sends += 1
            return [sends, len(game['users']) - 1 - sends]
    return [0, 0]

@app.route('/get_hosts')
def get_hosts():
    users = get_list_people()
    hosts = []
    for user in users:
        if user['is_host']:
            hosts.append(user)
    return hosts

@app.route('/get_filtered_players', methods=['POST'])
def get_filtered_players():
    filters_info = json.loads(flask.request.data)
    delivery_types = get_delivery_types()
    users = get_list_people()
    filtered_users = []
    delimiters = [' ', ',', ';']
    pattern = '|'.join(map(re.escape, delimiters))

    for user in users:
        if user['is_host']:
            continue
        if filters_info['status'] > -1:
            if user['status'] < filters_info['status']:
                continue
        if filters_info['delivery_type'] != 'none' and delivery_types[filters_info['delivery_type']] != user['delivery_type']:
            continue
        if filters_info['name'] != '' and filters_info['name'].lower() != user['name'].lower():
            continue
        if filters_info['address'] != '' and filters_info['address'].lower() != user['address'].lower():
            continue
        if filters_info['wishlist'] != '':
            filters_wishlist = re.split(pattern, filters_info['wishlist'])
            user_wishlist = re.split(pattern, user['wishlist'])
            found = False
            for user_wishlist_item in user_wishlist:
                for filters_wishlist_item in filters_wishlist:
                    if user_wishlist_item.lower() == filters_wishlist_item.lower():
                        found = True
            if not found:
                continue
        if filters_info['stoplist'] != '':
            filters_stoplist = re.split(pattern, filters_info['stoplist'])
            user_stoplist = re.split(pattern, user['stoplist'])
            found = False
            for user_stoplist_item in user_stoplist:
                for filters_stoplist_item in filters_stoplist:
                    if user_stoplist_item.lower() == filters_stoplist_item.lower():
                        found = True
            if not found:
                continue
        filtered_users.append(user)
    return filtered_users




@app.route('/import_db', methods=['POST'])
def import_db():
    return app.response_class(status=200)

@app.route('/export_db', methods=['POST'])
def export_db():
    export_status = 200
    # вместо filename - название файла для экспорта. если всё норм, то export_db вернёт True
    if not db.export_db("filename"):
        export_status = 500
    return app.response_class(status=export_status)

# @app.route('/import_db', methods=['POST'])
# def import_db():
#     # db.import_db()
#     return app.response_class(status=200)


@app.route('/search/<entity>')
def get_entity(entity):
    #entity - название сущности для search_entity методов Database
    #нужно передать json с полями, по которым искать
    return flask.render_template('player_page.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
