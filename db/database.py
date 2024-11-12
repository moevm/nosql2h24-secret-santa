from pymongo import MongoClient
from .get_db import find_one, get_games, get_users
from .add_db import add_game, add_user


class Database:
  def __init__(self, connection_str, db_name):
    self.db = MongoClient(connection_str).get_database(db_name)
    self.game_id = 1
    self.user_id = 1

  def users_list(self):
    return get_users(self.db)

  def games_list(self):
    return get_games(self.db)

  def register_game(self, team_info):
    host = team_info["admin"]
    host.update({"id": self.user_id, "is_host": True})
    add_user(self.db, host)
    self.user_id += 1

    for player in team_info["players"]:
      player.update({"id": self.user_id, "status":"none",
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
              "id": self.user_id
        })
    self.game_id+=1

  def get_user(self, user_id):
    return find_one("users", self.db, user_id)

  def get_game(self, game_id):
    return find_one("games", self.db, game_id)
