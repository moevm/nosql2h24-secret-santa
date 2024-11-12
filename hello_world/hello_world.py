from pymongo import MongoClient

def create_users(db):
    users = []
    for i in range (1, 11):
        users.append({"name": "test_user" + str(i), "email": "email" + str(i), "password": "testpass" + str(i), "games": []})
    col = db["users"]
    col.insert_many(users)

def create_games(db):
    games = []
    for i in range(2):
        games.append({"name": "test_game", "players": [], "owner_id": 5*i +1})
    col = db["games"]
    col.insert_many(games)

def get_db():
    connection_string = "mongodb://root:example@mongo:27017/"
    client = MongoClient(connection_string)
    db = client["secret_santa_db"]
    return db

def read_data(db, collection_name):
    col = db[collection_name]
    for record in col.find():
        print(record)

def main():
    secret_santa_db = get_db()

    create_users(secret_santa_db)
    create_games(secret_santa_db)

    read_data(secret_santa_db, "users")
    read_data(secret_santa_db, "games")

if __name__ == "__main__":
    main()
