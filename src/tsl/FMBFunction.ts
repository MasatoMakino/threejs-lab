import {
  float,
  vec2,
  mod,
  mul,
  sin,
  abs,
  add,
  fract,
  Fn,
  sub,
  floor,
  mix,
  ShaderNodeObject,
  AttributeNode,
  UniformNode,
} from "three/webgpu";

const hash = Fn(([p_immutable, hashLoop_immutable]: [any, any]) => {
  const hashLoop = float(hashLoop_immutable).toVar();
  const p = vec2(p_immutable).toVar();
  p.assign(mod(p, hashLoop));

  return fract(
    mul(
      1e4,
      sin(mul(17.0, p.x).add(p.y.mul(0.1))).mul(
        add(0.1, abs(sin(p.y.mul(13.0).add(p.x))))
      )
    )
  );
});

const noise = Fn(([p_immutable, hashLoop_immutable]) => {
  const hashLoop = float(hashLoop_immutable).toVar();
  const p = vec2(p_immutable).toVar();
  p.mulAssign(hashLoop);
  const f = vec2(fract(p)).toVar();
  const u = vec2(f.mul(f.mul(sub(3.0, mul(2.0, f))))).toVar();
  p.assign(floor(p));
  const a = float(hash(p, hashLoop)).toVar();
  const b = float(hash(p.add(vec2(1.0, 0.0)), hashLoop)).toVar();
  const c = float(hash(p.add(vec2(0.0, 1.0)), hashLoop)).toVar();
  const d = float(hash(p.add(vec2(1.0, 1.0)), hashLoop)).toVar();

  return mix(a, b, u.x).add(
    c
      .sub(a)
      .mul(u.y.mul(sub(1.0, u.x)))
      .add(d.sub(b).mul(u.x.mul(u.y)))
  );
});

const fbm = Fn(
  ([p_immutable, hashLoop_immutable, amp_immutable]: [
    ShaderNodeObject<AttributeNode>,
    ShaderNodeObject<UniformNode<number>> | number,
    ShaderNodeObject<UniformNode<number>> | number
  ]) => {
    const p = vec2(p_immutable).toVar();
    const v = float(0.0).toVar();
    p.assign(mod(p, hashLoop_immutable));
    const a = float(amp_immutable).toVar();
    const hashLoopVal = float(hashLoop_immutable).toVar();

    for (let i = 0; i < 5; i++) {
      v.addAssign(noise(p, hashLoopVal).mul(a));
      a.mulAssign(float(0.5));
      hashLoopVal.mulAssign(float(2.0));
    }
    return v;
  }
);

export { hash, noise, fbm };
