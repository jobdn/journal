export type Mods = Record<string, boolean | string>;

export const cn = (
  base: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  return [
    base,
    Object.entries(mods)
      .filter(([_, includeToResult]) => Boolean(includeToResult))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(" ");
};
