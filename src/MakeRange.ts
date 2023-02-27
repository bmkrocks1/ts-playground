export type MakeRange<n, acc extends any[] = []> = acc["length"] extends n
  ? acc
  : MakeRange<n, [...acc, acc["length"]]>;