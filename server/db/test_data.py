from pymongo import MongoClient

def set_test_data(connection_str, db_name):
  db = MongoClient(connection_str).get_database(db_name)
  users = db["users"]
  users.insert_many([
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
  ])

  games = db["games"]
  games.insert_many([
      {},
      {}
  ]
  )

  events = db["events"]

  events.insert_many([
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
  ])