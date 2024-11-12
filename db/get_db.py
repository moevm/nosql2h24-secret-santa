def get_games(db):
  games_coll = db["games"]
  games = []
  for game in games_coll.find():
    game.update(game_full_info(db, game["id"]))
    games.append(game)
  return games

def get_users(db):
  users_coll = db["games"]
  return [user for user in users_coll.find()]

def find_one(db, col, object_id):
  documents = db[col]
  return documents.find_one({ "id" : str(object_id) })

def game_full_info(db, game_id):
  users_coll = db["users"]

  enum = ["none", "form", "paid", "sent"]
  players_num = 0

  accepted_cheques = 0
  not_accepted_cheques = 0
  status_count = {"none": 0, "form": 0, "paid": 0, "sent": 0}
  got_gifts = 0
  for player in users_coll.find({"game_id": game_id}):
    players_num += 1
    if not player["is_host"]:
      if player["wrong_gift"]:
        not_accepted_cheques += 1
      if player["got_gift"]:
         got_gifts += 1
      if not player["wrong_gift"] and enum.index(player["status"]):
        accepted_cheques += 1
      status_count[player["status"]]+=1

  host_name = users_coll.find_one({"game_id": game_id, "is_host": True})["name"]

  return {"admin_name": host_name, "players_num": players_num, "form_num": status_count["form"],
          "accepted_cheques" :accepted_cheques, "not_accepted_cheques": not_accepted_cheques,
          "sent_gifts": status_count["sent"], "got_gifts ": got_gifts }
