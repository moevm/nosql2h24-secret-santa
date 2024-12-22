def get_actions_types():
    return {0: 'заполнил(a) анкету', 1: 'отправил(а) чек оплаты на проверку организатору',
                     2: 'отправил(а) подарок', 3: 'получил(а) подарок'}

def get_delivery_types():
    return {'none': 0, 'ticket': 1, 'cert': 2, 'mail': 3, 'other': 4}