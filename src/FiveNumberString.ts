type NUM_STRING = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';

type FiveNumberString<T extends string> =
  T extends `${infer A}${infer B}${infer C}${infer D}${infer E}`
    ? A extends NUM_STRING
      ? B extends NUM_STRING
        ? C extends NUM_STRING
          ? D extends NUM_STRING
            ? E extends NUM_STRING
              ? true
              : false
            : false
          : false
        : false
      : false
    : false;

const test_fns_1: FiveNumberString<'12345'> = true;
const test_fns_2: FiveNumberString<'ABCDE'> = false;
const test_fns_3: FiveNumberString<'123456'> = false;
