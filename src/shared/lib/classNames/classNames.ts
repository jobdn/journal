export type Mods = Record<string, boolean | string | undefined>;

export const cn = (
  base: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    base,
    ...Object.entries(mods)
      .filter(([_, includeToResult]) => Boolean(includeToResult))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(" ");
};
