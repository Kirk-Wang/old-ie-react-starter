export function getTopLeft(deg: number, pos: number) {
  const degress = deg * pos;
  const radians = degress * Math.PI / 180;
  const r = 140;
  return {
    top: Math.cos(radians) * r,
    left: Math.sin(radians) * r,
  };
}
