# __pragma__ ('skip')
def __pragma__(): pass
# __pragma__ ('noskip')


__pragma__('js', '{}', '''
var deque_ = function(src) {
    this.push.apply(this, src);
    return this
}
deque_.prototype = Object.create(Array.prototype);
deque_.prototype.appendLeft = function(item) {
  this.unshift(item);
}
''')


def deque(src=[]):
    return __pragma__('js', '{}', "new deque_(src)")


__pragma__('js', '{}', '''
deque_.prototype.__class__ = deque;
deque.__name__ = 'deque';
deque.__bases__ = [object];
''')
