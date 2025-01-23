def get_actions_types():
    return {"form": 'заполнил(a) анкету', "bought": 'отправил(а) чек оплаты на проверку организатору',
                     "sent": 'отправил(а) подарок', "got_gift": 'получил(а) подарок'}

def get_delivery_types():
    return {'none': 0, 'ticket': 1, 'cert': 2, 'mail': 3, 'other': 4}