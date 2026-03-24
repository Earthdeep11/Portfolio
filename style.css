:root {
    --primary: #a29bfe;
    --accent: #00cec9;
    --dark: #0f0c29;
    --card-bg: rgba(255, 255, 255, 0.05);
    --text: #dfe6e9;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
    color: var(--text);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* Background Animation */
.bg-animate {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: -1;
}

.circle {
    position: absolute;
    background: rgba(162, 155, 254, 0.1);
    border-radius: 50%;
    animation: move 20s infinite linear;
}

@keyframes move {
    from { transform: translateY(110vh) scale(0); }
    to { transform: translateY(-20vh) scale(1.5); opacity: 0; }
}

/* Navbar */
nav {
    display: flex; justify-content: space-between; align-items: center;
    padding: 1.5rem 10%;
    background: rgba(15, 12, 41, 0.85);
    backdrop-filter: blur(15px);
    position: sticky; top: 0; z-index: 1000;
}

.logo { font-size: 1.8rem; font-weight: 800; letter-spacing: 2px; }
.logo span { color: var(--accent); text-shadow: 0 0 10px var(--accent); }

nav ul { display: flex; list-style: none; }
nav ul li { margin-left: 30px; }
nav a { color: white; text-decoration: none; transition: 0.3s; }
nav a:hover { color: var(--accent); }

/* Hero */
.hero { height: 90vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.hero h2 { font-size: 4rem; margin-bottom: 10px; }
.hero span { color: var(--accent); }

/* Projects */
section { padding: 80px 10%; }
.section-title { text-align: center; font-size: 2.5rem; margin-bottom: 50px; }
.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }

.project-card {
    background: var(--card-bg);
    padding: 30px; border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    transition: 0.4s ease; text-align: center;
}

.project-card:hover { transform: translateY(-10px); border-color: var(--accent); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }

/* UI Elements */
.msg-box { margin: 15px 0; color: var(--accent); font-weight: bold; min-height: 24px; }
.btn-small { padding: 8px 20px; background: var(--accent); border: none; border-radius: 5px; cursor: pointer; font-weight: bold; }
.reset-link { background: none; border: none; color: #ff7675; cursor: pointer; margin-top: 15px; font-size: 0.8rem; text-decoration: underline; }

/* Calculator Specific */
.calculator-area { max-width: 250px; margin: auto; background: #111; padding: 15px; border-radius: 15px; }
#display { width: 100%; height: 50px; background: #222; color: var(--accent); border: none; text-align: right; padding: 10px; font-size: 1.5rem; margin-bottom: 10px; }
.calc-buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
.calc-buttons button { padding: 15px; border: none; background: #333; color: #fff; cursor: pointer; border-radius: 5px; }
.btn-op { background: var(--primary) !important; color: #000 !important; }

/* Game Specific */
.game-area input { padding: 10px; background: #222; border: 1px solid var(--primary); color: white; border-radius: 5px; width: 100px; margin-bottom: 10px; text-align: center; }
.rps-buttons button { font-size: 2.5rem; background: none; border: none; cursor: pointer; transition: 0.2s; padding: 10px; }
.rps-buttons button:hover { transform: scale(1.2); }
.score-board { display: flex; justify-content: center; gap: 20px; margin-top: 10px; }

footer { padding: 40px; text-align: center; opacity: 0.5; }
