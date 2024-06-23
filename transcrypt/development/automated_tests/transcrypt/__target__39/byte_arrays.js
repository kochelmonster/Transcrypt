// Transcrypt'ed from Python, 2021-05-14 15:01:26
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __conj__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, complex, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __all__ = dict ({get __name__ () {return __name__;}, set __name__ (value) {__name__ = value;}, get run () {return run;}, set run (value) {run = value;}});
var __name__ = 'byte_arrays';
export var run = function (autoTester) {
	var b = bytes ('bike');
	var s = bytes ('shop', 'utf8');
	var e = bytes ('');
	var bb = bytearray ([0, 1, 2, 3, 4]);
	var bc = bytes (tuple ([5, 6, 7, 8, 9]));
	var bps = __add__ (__add__ (b, bytes ('pump')), s);
	var bps3 = __add__ (__mul__ (3, bps), bytes (' '));
	var aBps3 = __add__ (__mul__ (bps, 3), bytes (' '));
	var l = __add__ ([1, 2, 3], [4, 5, 6]);
	var formatCheck = function (aBytes) {
		autoTester.check ((function () {
			var __accu0__ = [];
			for (var aByte of aBytes) {
				__accu0__.append (int (aByte));
			}
			return __accu0__;
		}) ());
	};
	formatCheck (b);
	formatCheck (s);
	formatCheck (e);
	formatCheck (bb);
	formatCheck (bc);
	formatCheck (bps);
	formatCheck (bps3);
	formatCheck (aBps3);
	__call__ (formatCheck, null, __add__ (bb, bc));
	__call__ (formatCheck, null, __add__ (__add__ (__call__ (bytearray, null, 'ding', 'utf8'), bytes ('dang')), __call__ (bytes, null, 'dong', 'utf8')));
	formatCheck (l);
};

//# sourceMappingURL=byte_arrays.map