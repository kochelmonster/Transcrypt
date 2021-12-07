
def itemgetter(item, *items):
    if not items:
        def func(obj):
            return obj[item]
    else:
        items = (item,) + items  # __:opov

        def func(obj):
            return [obj[i] for i in items]
    return func


def attrgetter(attr):
    if not isinstance(attr, str):
        raise TypeError('attribute name must be a string')
    names = attr.split('.')

    def func(obj):
        for name in names:
            obj = getattr(obj, name)
        return obj

    return func
