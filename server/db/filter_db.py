def search_player_w_fields(db, fields):
  documents = db["users"]
  results = documents.find(fields)
  return results

def search_host_w_fields(db, fields):
  documents = db["users"]
  results = documents.find(fields)
  return results

def search_games_w_fields(db, fields):
  documents = db["games"]
  results = documents.find(fields)
  return results

def search_events_w_fields(db, fields):
  documents = db["events"]
  results = documents.find(fields)
  return results