def add_game(db, game):
  game_coll = db["games"]
  game_coll.insert_one(game)

def add_user(db, user):
  user_coll = db["users"]
  user_coll.insert_one(user)