/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AadarshAi from './AadarshAi'; // Ensure this matches your file name (AadarshAi.tsx or aadarsh-ai.tsx)

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'ai'>('portfolio');

  return (
    <div>
      {/* NAV BAR */}
      <header className="nav-bar">
        <div className="nav-brand">
          <div className="pulse-dot"></div>
          <span>AADASH_KARKI // NODE_JHAPA-7</span>
        </div>

        <nav className="nav-links">
          <a href="#portfolio" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentView('portfolio'); }}>[ PORTFOLIO ]</a>
          <a href="#aadarsh-ai" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentView('ai'); }} style={{ color: 'var(--accent-neon)', fontWeight: 'bold', textShadow: '0 0 6px var(--accent-glow)' }}>[ Ai ]</a>
        </nav>
      </header>

      {/* VIEW SWITCHER */}
      {currentView === 'portfolio' ? (
        <div id="page-a" className="page-view">
          <section className="cyber-card" id="hero">
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setCurrentView('ai')} style={{ background: 'var(--accent-neon)', color: '#000', boxShaow: '0 0 15px var(--accent-glow)', cursor: 'pointer' }}>
                <span>🤖 Aadarsh Ai</span>
              </button>
            </div>
          </section>
        </div>
      ) : (
        <AadarshAi />
      )}
    </div>
  );
}