export interface IAnimatable {
  addTime(delta: number): void;
  speed: number;
  isAnimate: boolean;
}

export enum Directions {
  vertical = 4,
  horizontal = 3,
  radial = 5
}
