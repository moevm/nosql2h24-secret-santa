import datetime
from pymongo import MongoClient

def set_test_data(connection_str, db_name):
  db = MongoClient(connection_str).get_database(db_name)
  users = db["users"]
  if len(list(users.find())) > 0:
    print("Данные есть")
  else:
    print("Нет данных")
    users.insert_many([
        {
          'id': 1,
          'game_id':1,
          'name': 'test_user1',
          'email': 'test_email1@mail.com',
          'password': 'aafewfwefg',
          'is_host': True,
          'created_at': datetime.datetime(2024, 11, 11, 0, 0),
          'updated_at': datetime.datetime(2024, 11, 12, 0, 0)
        },
        {
          'id': 2,
          'game_id':1,
          'name': 'test_user2',
          'email': 'test_email2@mail.com',
          'password': 'hnhytresfsd',
          'is_host': False,
          'address': 'nevsky str. 17',
          'index': 111111,
          'phone': 89999999999,
          'status': "form",
          'delivery_type': 1,
          'wishlist': 'sweets, computer',
          'stoplist': 'books ',
          'recipient': 3,
          'santa': 3,
          'got_gift': False,
          'created_at': datetime.datetime(2024, 11, 11, 0, 0),
          'updated_at': datetime.datetime(2024, 11, 12, 0, 0),
          'wrong_gift': False,
        },
        {
          'id': 3,
          'game_id':1,
          'name': 'test_user3',
          'email': 'test_email3@mail.com',
          'password': 'hnhytresfsd',
          'is_host': False,
          'address': 'nevsky str. 17',
          'index': 111111,
          'phone': 89999999999,
          'status': "form",
          'delivery_type': 1,
          'wishlist': 'flowers;money',
          'stoplist': 'candles',
          'recipient': 2,
          'santa': 2,
          'got_gift': False,
          'created_at': datetime.datetime(2024, 11, 11, 0, 0),
          'updated_at': datetime.datetime(2024, 11, 12, 0, 0),
          'wrong_gift': False,
        },
        {
          'id': 4,
          'game_id':2,
          'name': 'test_user4',
          'email': 'test_email42@mail.com',
          'password': 'aafewfwefg',
          'is_host': True,
          'created_at': datetime.datetime(2024, 11, 11, 0, 0),
          'updated_at': datetime.datetime(2024, 11, 12, 0, 0)
        },
        {
          'id': 5,
          'game_id':2,
          'name': 'test_user5',
          'email': 'test_email52@mail.com',
          'password': 'hnhytresfsd',
          'is_host': False,
          'address': 'nevsky str. 17',
          'index': 111111,
          'phone': 89999999999,
          'status': "form",
          'delivery_type': 1,
          'wishlist': 'sweets, computer',
          'stoplist': 'books ',
          'recipient': 6,
          'santa': 6,
          'got_gift': False,
          'created_at': datetime.datetime(2024, 11, 11, 0, 0),
          'updated_at': datetime.datetime(2024, 11, 12, 0, 0),
          'wrong_gift': False,
        },
        {
          'id': 6,
          'game_id':2,
          'name': 'test_user6',
          'email': 'test_email6@mail.com',
          'password': 'hnhytresfsd',
          'is_host': False,
          'address': 'nevsky str. 17',
          'index': 111111,
          'phone': 89999999999,
          'status': "form",
          'delivery_type': 1,
          'wishlist': 'flowers;money',
          'stoplist': 'candles',
          'recipient': 5,
          'santa': 5,
          'got_gift': False,
          'created_at': datetime.datetime(2024, 11, 11, 0, 0),
          'updated_at': datetime.datetime(2024, 11, 12, 0, 0),
          'wrong_gift': False,
        },
      ])

  games = db["games"]
  if len(list(games.find())) > 0:
    print("Данные есть")
  else:
    print("Нет данных")
    games.insert_many([
        {
          'id': 1,
          'lowest_price': 100,
          'highest_price': 200,
          'form_deadline': datetime.datetime(2025, 1, 24, 0, 0),
          'purchase_deadline': datetime.datetime(2025, 1, 25, 0, 0),
          'send_deadline': datetime.datetime(2025, 1, 26, 0, 0),
          'created_at': datetime.datetime(2025, 1, 23, 0, 0),
          'updated_at': datetime.datetime(2025, 1, 23, 0, 0),
          'events': [1, 2]},
        {
          'id': 2,
          'lowest_price': 1000,
          'highest_price': 2000,
          'form_deadline': datetime.datetime(2025, 1, 24, 0, 0),
          'purchase_deadline': datetime.datetime(2025, 1, 25, 0, 0),
          'send_deadline': datetime.datetime(2025, 1, 26, 0, 0),
          'created_at': datetime.datetime(2025, 1, 23, 0, 0),
          'updated_at': datetime.datetime(2025, 1, 23, 0, 0),
          'events': [3, 4]
        }
    ])

  events = db["events"]
  if len(list(events.find())) > 0:
    print("Данные есть")
  else:
    print("Нет данных")
    events.insert_many([
        {'player_id': 2, 'type': 2, 'date': datetime.datetime(2024, 11, 21, 0, 0)},
        {'player_id': 3, 'type': 1, 'date': datetime.datetime(2024, 12, 12, 0, 0)},
        {'player_id': 5, 'type': 2, 'date': datetime.datetime(2024, 11, 21, 0, 0)},
        {'player_id': 6, 'type': 1, 'date': datetime.datetime(2024, 12, 12, 0, 0)},
    ])

  return (7, 3, 5)