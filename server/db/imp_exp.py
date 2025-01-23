from bson.json_util import dumps
import json

def save_db(db, filename="dump.json"):
    collections = db.list_collection_names()
    db_dump_str = "{"
    delim = ""
    for i, collection_name in enumerate(collections):
      col = getattr(db, collections[i])
      collection = col.find()
      db_dump_str += delim + "{\"" + collection_name + "\":["
      db_dump_str += dumps(collection) + "]"
      delim = ","

    db_dump_str += "}"
    try:
      with open(filename, 'wb') as jsonfile:
        jsonfile.write(str.encode(db_dump_str))
    except (IOError, OSError):
      print("ошибка записи")
      return 'False'
    except (FileNotFoundError, PermissionError, OSError):
      print("ошибка открытия файла")
      return 'False'

    return 'True'


def restore_db(db, import_json):
    json_colls = json.loads(import_json)
    for col_name in json_colls:
        col = db[col_name]
        col.insert_many(json_colls[col_name])
    max_uid = len(json_colls["users"]) + 1
    max_gid = len(json_colls["games"]) + 1
    max_eid = len(json_colls["events"]) + 1

    return max_uid, max_gid, max_eid


def restore_game(db, import_json):
    users = json.loads(import_json)
    col = db["users"]
    col.insert_many(users)

def export_game(db, game_id):
    users = db["users"]
    gamers = users.find({"is_host": 'False'})
    return gamers
