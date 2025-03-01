from pymongo import MongoClient
from .get_db import *
from .add_db import *
from .imp_exp import *
from .statistic import *
from .filter_db import *
from .test_data import *

class Database:
  def __init__(self, connection_str, db_name):
    self.db = MongoClient(connection_str).get_database(db_name)
    self.user_id, self.game_id, self.event_id = set_test_data(connection_str, db_name)

  def users_list(self):
    return get_users(self.db)

  def games_list(self):
    return get_games(self.db)
    
  def events_list(self):
    return get_events(self.db)  

  def register_game(self, team_info):
    host = team_info["admin"]
    host_id = self.user_id
    host.update({"id": self.user_id, "game_id": self.game_id, "is_host": True})
    add_user(self.db, host)
    self.user_id += 1

    for player in team_info["players"]:
      player.update({"id": self.user_id, "game_id":self.game_id, "status":"none",
                                       "is_host": False, "got_gift": False,
                                       "wrong_gift": False})
      add_user(self.db, player)
      self.user_id+=1
    game_id = self.game_id
    add_game(self.db,
        {"form_date": team_info["form_date"],
              "purchase_date":team_info["purchase_date"],
              "send_date":team_info["send_date"],
              "start_price":team_info["start_price"],
              "end_price":team_info["end_price"],
              "id": self.game_id
        })
    self.game_id+=1
    return game_id

  def get_user(self, user_id):
    return find_one("users", self.db, user_id)

  def get_game(self, game_id):
    return find_one("games", self.db, game_id)

  def export_db(self, file_name):
    return save_db(self.db, file_name)

  def import_db(self, import_json):
    max_ids = (1, 1, 1)
    try:
      max_ids = restore_db(self.db, import_json)
    except ValueError:
      print("синтаксически неверный JSON")
      return False
    self.user_id, self.game_id, self.event_id = max_ids

  def search_user(self, filt):
    return search_user_w_fields(self.db, filt)

  def search_game(self, filt):
    return search_games_w_fields(self.db, filt)

  def search_event(self, filt):
    return search_events_w_fields(self.db, filt)

  def get_game_participants(self, game_id):
    game_filter = {"game_id": game_id}
    return search_player_w_fields(self.db, game_filter)

  def count_forms(self):
    all_num = count_type("users")
    forms_num = count_type_w_filter("users", {"is_host": False, "status": "form"})
    return [forms_num, all_num]

  def count_purchases(self):
    all_num = count_type("users")
    forms_num = count_type_w_filter("users", {"is_host": False, "status": "bought"})
    return [forms_num, all_num]

  def count_senders(self):
    all_num = count_type("users")
    forms_num = count_type_w_filter("users", {"is_host": False, "status": "sent"})
    return [forms_num, all_num]

  def count_all_users(self):
    return count_type("users")

  def count_all_events(self):
    return count_type("events")

  def count_all_games(self):
    return count_type("games")

  def update_user(self, user_info):
    add_user(user_info)

  def update_users(self, users_info):
    self.db["users"].drop()
    self.db.create_collection("users")
    self.db["users"].insert_many(users_info)

  def import_game(self, game_json):
    restore_game(self.db, game_json)

  def export_game(self, game_id):
    return export_game(self.db, game_id)
