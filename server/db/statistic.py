def count_type(db, collection):
    documents = db[collection]
    return documents.count_documents()

def count_type_w_filter(db, collection, filt):
    documents = db[collection]
    return documents.count_documents(filt)
