export const heroPointer = {
  x: 0,
  y: 0,
  scroll: 0,
};

export function setHeroPointer(x: number, y: number) {
  heroPointer.x = x;
  heroPointer.y = y;
}

export function setHeroScroll(value: number) {
  heroPointer.scroll = value;
}
