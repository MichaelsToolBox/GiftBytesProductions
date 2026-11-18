import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import * as React from 'react';
import SectionHeader from '../utils/section-header';
import { sectionPx, sectionPy } from '../utils/section-rhythm';

const BEST_KEY = 'gbp-byteflip-best';
const MUTE_KEY = 'gbp-byteflip-mute';
const FLIP_SECONDS = 0.14;

type Status = 'idle' | 'run' | 'over';
type Lane = 0 | 1;
type SoundKind = 'flip' | 'gift' | 'die' | 'start';

type Body = {
  x: number;
  w: number;
  lane: Lane;
  kind: 'block' | 'gift';
  taken: boolean;
};

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
};

type Hud = { score: number; best: number; status: Status };

type Sim = {
  status: Status;
  cam: number;
  py: number;
  dir: number;
  speed: number;
  spawnX: number;
  pattern: number;
  nextLane: Lane;
  score: number;
  best: number;
  bodies: Body[];
  sparks: Spark[];
  squash: number;
  shake: number;
  flash: number;
  time: number;
  deathAt: number;
  viewW: number;
  viewH: number;
  hudDirty: boolean;
};

function readNumber(key: string) {
  try {
    return Number(localStorage.getItem(key)) || 0;
  } catch {
    return 0;
  }
}

function writeStored(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode */
  }
}

function createSim(): Sim {
  return {
    status: 'idle',
    cam: 0,
    py: 0,
    dir: 0,
    speed: 240,
    spawnX: -1,
    pattern: 0,
    nextLane: 0,
    score: 0,
    best: readNumber(BEST_KEY),
    bodies: [],
    sparks: [],
    squash: 0,
    shake: 0,
    flash: 0,
    time: 0,
    deathAt: 0,
    viewW: 0,
    viewH: 0,
    hudDirty: true,
  };
}

function resetRun(sim: Sim) {
  const best = sim.best;
  Object.assign(sim, createSim());
  sim.best = best;
  sim.status = 'run';
  sim.hudDirty = true;
}

function difficulty(score: number) {
  return {
    speed: Math.min(380, 232 + score * 8),
    lead: Math.max(0.32, 0.52 - score * 0.015),
    gap: Math.max(0.48, 1.12 - score * 0.035),
  };
}

function metrics(sim: Sim) {
  const h = sim.viewH;
  const top = Math.max(40, h * 0.09);
  const rail = Math.max(10, h * 0.032);
  const blockH = (h - top) * 0.36;
  const size = Math.max(18, Math.min(28, (h - top) * 0.078));
  const floorY = h - rail - size * 0.52;
  const ceilY = top + rail + size * 0.52;
  return {
    top,
    rail,
    blockH,
    size,
    floorY,
    ceilY,
    floorKill: h - rail - blockH + size * 0.2,
    ceilKill: top + rail + blockH - size * 0.2,
  };
}

function burst(sim: Sim, x: number, y: number, count: number, speed: number) {
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = speed * (0.45 + Math.random() * 0.55);
    sim.sparks.push({
      x,
      y,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity,
      life: 0.32,
      max: 0.32,
    });
  }
  if (sim.sparks.length > 40) sim.sparks.splice(0, sim.sparks.length - 40);
}

/** Gifts sit just ahead of the block on the same lane. The gap between them is the whole game. */
function spawnPattern(sim: Sim) {
  const n = sim.pattern;
  const tuned = difficulty(sim.score);
  const breath = n > 0 && n % 8 === 0;
  const double = sim.score >= 3 && n % 4 === 0 && !breath;
  const lane = sim.nextLane;
  const other: Lane = lane === 0 ? 1 : 0;
  const { lead, gap } = tuned;
  const speed = tuned.speed;
  sim.speed = speed;

  const leadPx = speed * lead;
  const blockW = 64;
  const cursor = sim.spawnX;
  sim.bodies.push({ x: cursor, w: 16, lane, kind: 'gift', taken: false });
  const blockX = cursor + leadPx;
  sim.bodies.push({ x: blockX, w: blockW, lane, kind: 'block', taken: false });
  let end = blockX + blockW;

  if (double) {
    const second = blockX + speed * 0.58;
    sim.bodies.push({ x: second - leadPx, w: 16, lane: other, kind: 'gift', taken: false });
    sim.bodies.push({ x: second, w: blockW, lane: other, kind: 'block', taken: false });
    end = second + blockW;
    sim.nextLane = lane;
  } else {
    sim.nextLane = other;
  }

  sim.spawnX = end + speed * (breath ? gap + 0.4 : gap);
  sim.pattern += 1;
}

function ensureSpawn(sim: Sim) {
  if (sim.viewW < 10) return;
  if (sim.spawnX < 0) {
    const ahead = Math.max(108, Math.min(sim.viewW * 0.32, 280));
    sim.spawnX = sim.cam + sim.viewW * 0.24 + ahead;
  }
  if (sim.status === 'idle') {
    if (sim.pattern === 0) spawnPattern(sim);
    return;
  }
  const horizon = sim.cam + sim.viewW + 90;
  let guard = 0;
  while (sim.spawnX < horizon && guard < 8) {
    spawnPattern(sim);
    guard += 1;
  }
}

function playerPoint(sim: Sim) {
  const m = metrics(sim);
  return {
    x: sim.viewW * 0.24,
    y: m.floorY + (m.ceilY - m.floorY) * sim.py,
    worldX: sim.cam + sim.viewW * 0.24,
    ...m,
  };
}

function fail(sim: Sim, reduced: boolean) {
  sim.status = 'over';
  sim.dir = 0;
  sim.deathAt = performance.now();
  sim.flash = 1;
  sim.shake = reduced ? 0 : 8;
  if (!reduced) {
    const p = playerPoint(sim);
    burst(sim, p.x, p.y, 16, 200);
  }
  if (sim.score > sim.best) {
    sim.best = sim.score;
    writeStored(BEST_KEY, String(sim.best));
  }
  sim.hudDirty = true;
}

function press(sim: Sim) {
  if (sim.viewW < 10) return;
  if (sim.status === 'over') {
    if (performance.now() - sim.deathAt < 450) return;
    resetRun(sim);
    return;
  }
  if (sim.status === 'idle') {
    sim.status = 'run';
    sim.hudDirty = true;
    return;
  }
  if (sim.dir !== 0) return;
  sim.dir = sim.py < 0.5 ? 1 : -1;
}

function step(sim: Sim, dt: number, reduced: boolean) {
  sim.time += dt;
  if (sim.squash > 0) sim.squash = Math.max(0, sim.squash - dt * 4.2);
  if (sim.shake > 0) sim.shake = Math.max(0, sim.shake - dt * 22);
  if (sim.flash > 0) sim.flash = Math.max(0, sim.flash - dt * 2.4);
  for (const spark of sim.sparks) {
    spark.life -= dt;
    spark.x += spark.vx * dt;
    spark.y += spark.vy * dt;
  }
  if (sim.sparks.length) sim.sparks = sim.sparks.filter((spark) => spark.life > 0);

  if (sim.status !== 'over') ensureSpawn(sim);
  if (sim.status !== 'run') return;

  sim.speed = difficulty(sim.score).speed;
  sim.cam += sim.speed * dt;
  const wasMoving = sim.dir !== 0;
  if (wasMoving) {
    sim.py += sim.dir * (dt / FLIP_SECONDS);
    if (sim.py <= 0 || sim.py >= 1) {
      sim.py = Math.min(1, Math.max(0, sim.py));
      sim.dir = 0;
      sim.squash = 1;
      if (!reduced) {
        const landed = playerPoint(sim);
        burst(sim, landed.x, landed.y, 6, 80);
      }
    }
  }

  const p = playerPoint(sim);
  for (const body of sim.bodies) {
    if (body.kind === 'gift') {
      if (body.taken) continue;
      const gy = body.lane === 0 ? p.floorY : p.ceilY;
      const gx = body.x + body.w / 2 - sim.cam;
      const dx = p.x - gx;
      const dy = p.y - gy;
      const onLane = body.lane === 0 ? sim.py < 0.55 : sim.py > 0.45;
      if (onLane && dx * dx + dy * dy < (p.size * 0.9) ** 2) {
        body.taken = true;
        sim.score += 1;
        sim.hudDirty = true;
        if (!reduced) burst(sim, gx, gy, 8, 120);
        if (sim.score > sim.best) {
          sim.best = sim.score;
          writeStored(BEST_KEY, String(sim.best));
        }
      }
      continue;
    }

    const inset = 7;
    if (p.worldX < body.x + inset || p.worldX > body.x + body.w - inset) continue;
    const hit = body.lane === 0 ? p.y > p.floorKill : p.y < p.ceilKill;
    if (hit) {
      fail(sim, reduced);
      return;
    }
  }

  if (sim.bodies.length > 28) {
    const left = sim.cam - 160;
    sim.bodies = sim.bodies.filter((body) => body.x + body.w > left);
  }
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function draw(ctx: CanvasRenderingContext2D, sim: Sim) {
  const w = sim.viewW;
  const h = sim.viewH;
  if (w < 2 || h < 2) return;
  const m = metrics(sim);

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#07131c';
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  if (sim.shake > 0) {
    ctx.translate((Math.random() - 0.5) * sim.shake, (Math.random() - 0.5) * sim.shake);
  }

  const lane = ctx.createLinearGradient(0, 0, 0, h);
  lane.addColorStop(0, 'rgba(18, 72, 108, 0.28)');
  lane.addColorStop(0.18, 'rgba(18, 72, 108, 0)');
  lane.addColorStop(0.82, 'rgba(18, 72, 108, 0)');
  lane.addColorStop(1, 'rgba(18, 72, 108, 0.28)');
  ctx.fillStyle = lane;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#123044';
  ctx.fillRect(0, m.top, w, m.rail);
  ctx.fillRect(0, h - m.rail, w, m.rail);
  ctx.fillStyle = 'rgba(168, 214, 236, 0.55)';
  ctx.fillRect(0, m.top + m.rail - 1, w, 1);
  ctx.fillRect(0, h - m.rail, w, 1);

  for (const body of sim.bodies) {
    const x = body.x - sim.cam;
    if (x > w + 30 || x + body.w < -30) continue;
    if (body.kind === 'block') {
      const y = body.lane === 0 ? h - m.rail - m.blockH : m.top + m.rail;
      ctx.fillStyle = '#184864';
      roundRect(ctx, x, y, body.w, m.blockH, 4);
      ctx.fill();
      ctx.fillStyle = 'rgba(186, 224, 242, 0.7)';
      const lip = body.lane === 0 ? y : y + m.blockH - 2;
      ctx.fillRect(x + 3, lip, body.w - 6, 2);
      continue;
    }
    if (body.taken) continue;

    const gy = body.lane === 0 ? m.floorY : m.ceilY;
    ctx.save();
    ctx.translate(x + body.w / 2, gy);
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(7, 0);
    ctx.lineTo(0, 9);
    ctx.lineTo(-7, 0);
    ctx.closePath();
    ctx.fillStyle = '#e4c36a';
    ctx.fill();
    ctx.restore();
  }

  const p = playerPoint(sim);
  const moving = sim.dir !== 0;
  const scaleX = moving ? 0.86 : 1 + sim.squash * 0.08;
  const scaleY = moving ? 1.12 : 1 - sim.squash * 0.1;
  const dead = sim.status === 'over';
  const s = m.size;

  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.scale(scaleX, scaleY);
  ctx.fillStyle = dead ? '#c45252' : '#f4fbff';
  roundRect(ctx, -s / 2, -s / 2, s, s, s * 0.28);
  ctx.fill();
  ctx.fillStyle = dead ? '#6e2228' : '#1277b8';
  const mark = s * 0.34;
  roundRect(ctx, -s / 2 + s * 0.18, -s / 2 + s * 0.18, mark, mark, 2);
  ctx.fill();
  ctx.restore();

  for (const spark of sim.sparks) {
    ctx.globalAlpha = Math.max(0, spark.life / spark.max) * 0.85;
    ctx.fillStyle = '#f4fbff';
    ctx.beginPath();
    ctx.arc(spark.x, spark.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  if (sim.flash > 0) {
    ctx.fillStyle = `rgba(255,255,255,${sim.flash * 0.08})`;
    ctx.fillRect(0, 0, w, h);
  }
  ctx.restore();
}

/** Quiet A-minor bed. Sixteen beats, then the same figure again. */
const MUSIC_BPM = 84;
const MUSIC_BEAT = 60 / MUSIC_BPM;
const MUSIC_BARS = 16;
const MUSIC_LOOP = MUSIC_BARS * MUSIC_BEAT;

const MUSIC_NOTES: Array<[number, number, number, number, OscillatorType]> = [
  [0, 110, 3.4, 0.05, 'triangle'],
  [4, 82.41, 3.4, 0.046, 'triangle'],
  [8, 73.42, 3.4, 0.046, 'triangle'],
  [12, 82.41, 3.4, 0.048, 'triangle'],
  [0, 440, 1.7, 0.028, 'sine'],
  [2, 523.25, 1.5, 0.024, 'sine'],
  [4, 659.25, 1.8, 0.026, 'sine'],
  [6, 587.33, 1.4, 0.022, 'sine'],
  [8, 523.25, 1.6, 0.024, 'sine'],
  [10, 440, 1.5, 0.022, 'sine'],
  [12, 392, 1.4, 0.02, 'sine'],
  [14, 440, 1.6, 0.024, 'sine'],
  [0, 329.63, 0.45, 0.014, 'sine'],
  [0.75, 440, 0.4, 0.012, 'sine'],
  [4, 392, 0.4, 0.012, 'sine'],
  [4.75, 523.25, 0.4, 0.012, 'sine'],
  [8, 293.66, 0.4, 0.012, 'sine'],
  [8.75, 440, 0.4, 0.012, 'sine'],
  [12, 329.63, 0.4, 0.012, 'sine'],
  [12.75, 523.25, 0.4, 0.011, 'sine'],
];

function createAudio() {
  let ctx: AudioContext | null = null;
  let music: GainNode | null = null;
  let timer = 0;
  let nextAt = 0;
  let started = false;
  const pads: OscillatorNode[] = [];
  const flags = { muted: false, heard: true };

  const ensure = () => {
    if (!ctx) {
      ctx = new AudioContext();
      music = ctx.createGain();
      music.gain.value = 0;
      music.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  };

  const applyLevel = () => {
    if (!ctx || !music) return;
    const level = flags.muted || !flags.heard ? 0 : 0.72;
    music.gain.setTargetAtTime(level, ctx.currentTime, 0.15);
  };

  const blip = (time: number, freq: number, dur: number, vol: number, type: OscillatorType) => {
    if (!ctx || !music) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(vol, time + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + Math.max(0.08, dur));
    osc.connect(gain);
    gain.connect(music);
    osc.start(time);
    osc.stop(time + dur + 0.03);
  };

  const schedule = (origin: number) => {
    for (const [beat, freq, dur, vol, type] of MUSIC_NOTES) {
      blip(origin + beat * MUSIC_BEAT, freq, dur * MUSIC_BEAT, vol, type);
    }
  };

  const arm = () => {
    if (!ctx || !started) return;
    while (nextAt < ctx.currentTime + 0.4) {
      schedule(nextAt);
      nextAt += MUSIC_LOOP;
    }
    timer = window.setTimeout(arm, 120);
  };

  return {
    get muted() {
      return flags.muted;
    },
    set muted(value: boolean) {
      if (flags.muted === value) return;
      flags.muted = value;
      applyLevel();
    },
    setHeard(value: boolean) {
      if (flags.heard === value) return;
      flags.heard = value;
      applyLevel();
    },
    begin() {
      try {
        const audio = ensure();
        applyLevel();
        if (started) return;
        started = true;
        const bed = [
          [110, 0.03, 0],
          [164.81, 0.016, 6],
          [220, 0.01, -5],
        ] as const;
        for (const [freq, vol, detune] of bed) {
          const osc = audio.createOscillator();
          const gain = audio.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          osc.detune.value = detune;
          gain.gain.value = vol;
          osc.connect(gain);
          gain.connect(music!);
          osc.start();
          pads.push(osc);
        }
        nextAt = audio.currentTime + 0.05;
        arm();
      } catch {
        /* audio unavailable */
      }
    },
    play(kind: SoundKind) {
      if (flags.muted) return;
      try {
        const audio = ensure();
        const t0 = audio.currentTime;
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        const spec = {
          flip: { type: 'sine' as const, f: 430, to: 720, dur: 0.06, vol: 0.03 },
          gift: { type: 'sine' as const, f: 680, to: 1020, dur: 0.08, vol: 0.036 },
          start: { type: 'sine' as const, f: 310, to: 520, dur: 0.07, vol: 0.022 },
          die: { type: 'triangle' as const, f: 210, to: 62, dur: 0.2, vol: 0.04 },
        }[kind];
        osc.type = spec.type;
        osc.frequency.setValueAtTime(spec.f, t0);
        osc.frequency.exponentialRampToValueAtTime(spec.to, t0 + spec.dur);
        gain.gain.setValueAtTime(spec.vol, t0);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + spec.dur);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start(t0);
        osc.stop(t0 + spec.dur + 0.02);
      } catch {
        /* audio unavailable */
      }
    },
    close() {
      started = false;
      window.clearTimeout(timer);
      for (const osc of pads) {
        try {
          osc.stop();
        } catch {
          /* already stopped */
        }
      }
      pads.length = 0;
      void ctx?.close();
      ctx = null;
      music = null;
    },
  };
}

export default function Play() {
  const { t } = useTranslation();
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const frameRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const pressRef = React.useRef<() => void>(() => {});
  const [hud, setHud] = React.useState<Hud>(() => ({
    score: 0,
    best: readNumber(BEST_KEY),
    status: 'idle',
  }));
  const [muted, setMuted] = React.useState(() => {
    try {
      return localStorage.getItem(MUTE_KEY) === '1';
    } catch {
      return false;
    }
  });
  const mutedRef = React.useRef(muted);
  mutedRef.current = muted;
  const reducedRef = React.useRef(reduced);
  reducedRef.current = reduced;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const sim = createSim();
    const audio = createAudio();
    let raf = 0;
    let last = performance.now();
    let alive = true;

    const publish = () => {
      if (!alive || !sim.hudDirty) return;
      sim.hudDirty = false;
      setHud({ score: sim.score, best: sim.best, status: sim.status });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width < 2 || height < 2) return;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sim.viewW = width;
      sim.viewH = height;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const stage = frameRef.current ?? canvas;
    let onScreen = true;
    const visibility = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0.15 },
    );
    visibility.observe(stage);

    pressRef.current = () => {
      audio.muted = mutedRef.current;
      audio.setHeard(!document.hidden && onScreen);
      audio.begin();
      const previous = sim.status;
      const dir = sim.dir;
      const score = sim.score;
      press(sim);
      if (previous !== 'run' && sim.status === 'run') audio.play('start');
      else if (sim.status === 'run' && sim.dir !== dir) audio.play('flip');
      if (sim.score === score) publish();
    };

    const frame = (now: number) => {
      if (!alive) return;
      const dt = Math.min(0.034, (now - last) / 1000);
      last = now;
      if (sim.viewW < 2) resize();
      audio.setHeard(!document.hidden && onScreen);
      if (!document.hidden) {
        audio.muted = mutedRef.current;
        const score = sim.score;
        const status = sim.status;
        step(sim, dt, reducedRef.current);
        if (sim.score > score) audio.play('gift');
        if (status !== 'over' && sim.status === 'over') audio.play('die');
        draw(ctx, sim);
        publish();
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      visibility.disconnect();
      audio.close();
      pressRef.current = () => {};
    };
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) return;
    event.preventDefault();
    frameRef.current?.focus({ preventScroll: true });
    pressRef.current();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.repeat) return;
    if ((event.target as HTMLElement).closest('button')) return;
    if (event.code !== 'Space' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'w' && event.key !== 'W') {
      return;
    }
    event.preventDefault();
    pressRef.current();
  };

  const toggleMute = () => {
    setMuted((current) => {
      const next = !current;
      writeStored(MUTE_KEY, next ? '1' : '0');
      return next;
    });
  };

  return (
    <Container id="demo" sx={{ py: sectionPy, px: sectionPx }}>
      <SectionHeader title={t('play-page.title')} subtitle={t('play-page.subtitle')} />

      <Box
        ref={frameRef}
        tabIndex={0}
        role="application"
        aria-label={t('play-page.subtitle')}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        sx={(theme) => ({
          position: 'relative',
          width: '100%',
          maxWidth: 960,
          mx: 'auto',
          aspectRatio: { xs: '5 / 4', sm: '16 / 9' },
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          touchAction: 'none',
          userSelect: 'none',
          outline: 'none',
          border: '1px solid',
          borderColor: alpha(theme.palette.primary.light, 0.22),
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.04), 0 16px 40px ${alpha(theme.palette.common.black, 0.18)}`,
          bgcolor: '#07131c',
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}, 0 16px 40px ${alpha(theme.palette.common.black, 0.18)}`,
          },
        })}
      >
        <canvas
          ref={canvasRef}
          aria-hidden
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            position: 'absolute',
            top: 14,
            left: 28,
            right: 12,
            height: 36,
            pointerEvents: 'none',
          }}
        >
          <Stack direction="row" alignItems="baseline" spacing={1.25}>
            <Typography
              sx={{
                color: '#f4fbff',
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '1.15rem', sm: '1.35rem' },
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
                lineHeight: 1,
              }}
            >
              {hud.score}
            </Typography>
            <Typography sx={{ color: 'rgba(244, 251, 255, 0.55)', fontSize: 12.5, fontWeight: 600, lineHeight: 1 }}>
              {t('play-page.best')} {hud.best}
            </Typography>
          </Stack>
          <IconButton
            size="small"
            aria-label={muted ? t('play-page.unmute') : t('play-page.mute')}
            aria-pressed={muted}
            onClick={toggleMute}
            sx={{ pointerEvents: 'auto', color: 'rgba(244, 251, 255, 0.78)' }}
          >
            {muted ? <VolumeOffRoundedIcon fontSize="small" /> : <VolumeUpRoundedIcon fontSize="small" />}
          </IconButton>
        </Stack>

        {hud.status !== 'run' && (
          <Box
            sx={{
              position: 'absolute',
              left: 24,
              right: 24,
              top: '36%',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            <Typography
              sx={{
                color: '#f4fbff',
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              {hud.status === 'idle' ? t('play-page.start') : t('play-page.over')}
            </Typography>
            {hud.status === 'over' && (
              <Typography sx={{ color: 'rgba(244, 251, 255, 0.62)', fontSize: 13, mt: 0.35 }}>
                {hud.score} · {t('play-page.best')} {hud.best} · {t('play-page.again')}
              </Typography>
            )}
          </Box>
        )}

        <Box
          aria-live="polite"
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            clip: 'rect(0 0 0 0)',
          }}
        >
          {hud.status === 'over'
            ? `${t('play-page.over')}. ${hud.score}. ${t('play-page.best')} ${hud.best}`
            : `${hud.score}`}
        </Box>
      </Box>
    </Container>
  );
}
