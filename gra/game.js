const panels = [...document.querySelectorAll('.panel')];
const missionEl = document.getElementById('mission');
const batteryEl = document.getElementById('battery');
const scoreEl = document.getElementById('score');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let keys = {};
let player, obstacles, pickups, battery, score, distance, gameLoop, running;

function show(id) {
  panels.forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function setMission(text) { missionEl.textContent = text; }
function setBattery(v) { batteryEl.textContent = Math.max(0, Math.floor(v)) + '%'; }
function setScore(v) { scoreEl.textContent = Math.floor(v); }

function resetGame() {
  player = { x: 90, y: 250, w: 48, h: 70, speed: 5 };
  obstacles = [];
  pickups = [];
  battery = 100;
  score = 0;
  distance = 0;
  running = true;
  setBattery(battery);
  setScore(score);
}

function startRun() {
  resetGame();
  show('game');
  setMission('Dotrzyj do SellFix');
  cancelAnimationFrame(gameLoop);
  loop();
}

function rand(min, max) { return Math.random() * (max - min) + min; }

function spawnThings() {
  if (Math.random() < 0.025) {
    const types = ['🛴', '🐦', '🚲', '💧'];
    obstacles.push({
      x: canvas.width + 40,
      y: rand(110, 430),
      w: 52,
      h: 52,
      speed: rand(4.5, 7.5),
      icon: types[Math.floor(Math.random() * types.length)]
    });
  }
  if (Math.random() < 0.012) {
    pickups.push({
      x: canvas.width + 40,
      y: rand(110, 430),
      w: 42,
      h: 42,
      speed: 5.2,
      icon: '🔋'
    });
  }
}

function collide(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function update() {
  if (!running) return;

  if (keys.ArrowUp || keys.w || keys.W) player.y -= player.speed;
  if (keys.ArrowDown || keys.s || keys.S) player.y += player.speed;
  player.y = Math.max(95, Math.min(canvas.height - player.h - 30, player.y));

  spawnThings();
  distance += 1.1;
  battery -= 0.035;
  score += 0.08;

  obstacles.forEach(o => o.x -= o.speed);
  pickups.forEach(p => p.x -= p.speed);

  obstacles = obstacles.filter(o => o.x > -90);
  pickups = pickups.filter(p => p.x > -90);

  for (const o of obstacles) {
    if (collide(player, o) && !o.hit) {
      o.hit = true;
      battery -= 15;
      score = Math.max(0, score - 10);
    }
  }

  for (const p of pickups) {
    if (collide(player, p) && !p.hit) {
      p.hit = true;
      battery = Math.min(100, battery + 12);
      score += 20;
    }
  }
  pickups = pickups.filter(p => !p.hit);

  if (battery <= 0) {
    running = false;
    show('lose');
    setMission('Nieudana próba');
    return;
  }

  if (distance >= 1600) {
    running = false;
    show('service');
    setMission('SellFix');
    score += 100;
  }

  setBattery(battery);
  setScore(score);
}

function drawRoad() {
  ctx.fillStyle = '#123012';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#2f332f';
  ctx.fillRect(0, 90, canvas.width, 390);
  ctx.strokeStyle = '#e6e6e6';
  ctx.setLineDash([40, 30]);
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(0, 280);
  ctx.lineTo(canvas.width, 280);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#b6ff00';
  ctx.font = '900 38px Arial';
  ctx.fillText('SellFix', canvas.width - 190, 65);
  ctx.fillStyle = '#d9ffd9';
  ctx.font = '20px Arial';
  ctx.fillText('Serwis już blisko: ' + Math.max(0, Math.floor(1600 - distance)) + ' m', 28, 50);
}

function draw() {
  drawRoad();

  ctx.font = '58px Arial';
  ctx.fillText('🏃', player.x, player.y + 58);
  ctx.font = '28px Arial';
  ctx.fillText('📱', player.x + 35, player.y + 20);

  ctx.font = '48px Arial';
  obstacles.forEach(o => {
    ctx.globalAlpha = o.hit ? 0.35 : 1;
    ctx.fillText(o.icon, o.x, o.y + 45);
    ctx.globalAlpha = 1;
  });

  ctx.font = '42px Arial';
  pickups.forEach(p => ctx.fillText(p.icon, p.x, p.y + 40));

  const barW = 260;
  ctx.fillStyle = '#050805';
  ctx.fillRect(28, canvas.height - 42, barW, 20);
  ctx.fillStyle = '#b6ff00';
  ctx.fillRect(28, canvas.height - 42, barW * (distance / 1600), 20);
  ctx.strokeStyle = '#d8ffd8';
  ctx.strokeRect(28, canvas.height - 42, barW, 20);
}

function loop() {
  update();
  draw();
  if (running) gameLoop = requestAnimationFrame(loop);
}

window.addEventListener('keydown', e => keys[e.key] = true);
window.addEventListener('keyup', e => keys[e.key] = false);

document.getElementById('startBtn').onclick = () => { show('intro'); setMission('Wypadek'); };
document.getElementById('goBtn').onclick = startRun;
document.getElementById('retryBtn').onclick = startRun;
document.getElementById('restartBtn').onclick = () => { show('menu'); setMission('Intro'); setBattery(100); setScore(0); };
document.getElementById('repairBtn').onclick = () => { show('win'); setMission('Telefon naprawiony'); setBattery(100); setScore(score + 250); };

document.getElementById('upBtn').addEventListener('touchstart', e => { e.preventDefault(); keys.ArrowUp = true; });
document.getElementById('upBtn').addEventListener('touchend', () => keys.ArrowUp = false);
document.getElementById('downBtn').addEventListener('touchstart', e => { e.preventDefault(); keys.ArrowDown = true; });
document.getElementById('downBtn').addEventListener('touchend', () => keys.ArrowDown = false);

setMission('Intro');
setBattery(100);
setScore(0);
