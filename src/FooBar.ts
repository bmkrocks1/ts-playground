/**
 * This type alias takes a string type `S` as a parameter and
 * returns either the same string type `S` if it is equal to
 * the string literal `"foo"`, or the string literal `"bar"` otherwise.
 */
type FooBar<S extends string> = S extends 'foo' ? S : 'bar';

const test_foobar_1: FooBar<'foo'> = 'foo';
const test_foobar_2: FooBar<'bar'> = 'bar';
const test_foobar_3: FooBar<'qux'> = 'bar';

/**
 * Case-insensitive version of FooBar.
 */
type CaseInsensitiveFooBar<S extends string> = Lowercase<S> extends 'foo'
  ? 'foo'
  : 'bar';

const test_cifoobar_1: CaseInsensitiveFooBar<'Foo'> = 'foo';
const test_cifoobar_2: CaseInsensitiveFooBar<'FOO'> = 'foo';
const test_cifoobar_3: CaseInsensitiveFooBar<'foO'> = 'foo';
const test_cifoobar_4: CaseInsensitiveFooBar<'Bar'> = 'bar';
const test_cifoobar_5: CaseInsensitiveFooBar<'Qux'> = 'bar';
