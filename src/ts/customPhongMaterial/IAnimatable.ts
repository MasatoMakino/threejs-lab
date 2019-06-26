export interface IAnimatable {
  addTime(delta: number): void;
  speed: number;
  isAnimate: boolean;
}
