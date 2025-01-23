def search_user_w_fields(db, filt):
  documents = db["users"]
  print(filt)
  results = list(documents.find(filt))
  print(results)
  for result in results:
    result.pop('_id')
  return results

def search_games_w_fields(db, filt):
  documents = db["games"]
  results = list(documents.find(filt))
  print(results)
  for result in results:
    result.pop('_id')
  return results

def search_events_w_fields(db, filt):
  documents = db["events"]
  results = list(documents.find(filt))
  print(results)
  for result in results:
    result.pop('_id')
  return results
