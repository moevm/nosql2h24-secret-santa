from pymongo import MongoClient
from .get_db import *
from .add_db import *
from .imp_exp import *

class Database:
  def __init__(self, connection_str, db_name):
    self.db = MongoClient(connection_str).get_database(db_name)
    self.game_id = 1
    self.user_id = 1
    self.event_id = 1

  def users_list(self):
    return get_users(self.db)

  def games_list(self):
    return get_games(self.db)
    
  def events_list(self):
    return get_events(self.db)  

  def register_game(self, team_info):
    host = team_info["admin"]
    host.update({"id": self.user_id, "game_id": self.game_id, "is_host": True})
    add_user(self.db, host)
    self.user_id += 1

    for player in team_info["players"]:
      player.update({"id": self.user_id, "game_id":self.game_id, "status":"none",
                                       "is_host": False, "got_gift": False,
                                       "wrong_gift": False})
      add_user(self.db, player)
      self.user_id+=1

    add_game(self.db,
        {"form_date": team_info["form_date"],
              "purchase_date":team_info["purchase_date"],
              "send_date":team_info["send_date"],
              "start_price":team_info["start_price"],
              "end_price":team_info["end_price"],
              "id": self.game_id
        })
    self.game_id+=1

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

  def search_host(self, fields):
    return search_host_w_fields(self.db, fields)

  def search_player(self, fields):
    if "stoplist" in fields:
      pass
    if "wishlist" in fields:
      pass
    return search_player_w_fields(self.db, fields)

  def search_game(self, fields):
    return search_games_w_fields(self.db, fields)

  def search_event(self, fields):
    return search_events_w_fields(self.db, fields)
