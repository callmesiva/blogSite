import React, { useEffect } from 'react';

const OrbitalCanvas = () => {
  useEffect(() => {
    const CX = 430, CY = 340;
    const orbits = [
      {
        r: 128, speed: 0.00055, dir: 1,
        pAngle: Math.PI * 0.4,
        nodes: [
          { id: 'n00', spoke: 's00', a: 0.25 },
          { id: 'n01', spoke: 's01', a: 0.25 + Math.PI }
        ]
      },
      {
        r: 208, speed: 0.00034, dir: -1,
        pAngle: Math.PI * 1.1,
        nodes: [
          { id: 'n10', spoke: 's10', a: 0.9 },
          { id: 'n11', spoke: 's11', a: 0.9 + Math.PI * 2 / 3 },
          { id: 'n12', spoke: 's12', a: 0.9 + Math.PI * 4 / 3 }
        ]
      },
      {
        r: 296, speed: 0.0002, dir: 1,
        pAngle: Math.PI * 1.7,
        nodes: [
          { id: 'n20', spoke: 's20', a: 1.5 },
          { id: 'n21', spoke: 's21', a: 1.5 + Math.PI * 2 / 3 },
          { id: 'n22', spoke: 's22', a: 1.5 + Math.PI * 4 / 3 }
        ]
      }
    ];

    const hubPulse :any = document.getElementById('hubPulse');
    let hubT = 0;
    let animationFrameId :any;

    // Set initial node positions before first frame
    orbits.forEach(orbit => {
      orbit.nodes.forEach(node => {
        const x = CX + orbit.r * Math.cos(node.a);
        const y = CY + orbit.r * Math.sin(node.a);
        const g = document.getElementById(node.id);
        if (g) g.setAttribute('transform', `translate(${x},${y})`);
      });
    });

    function tick() {
      hubT += 0.012;
      
      // Hub pulse animation
      if (hubPulse) {
        const pulse = 60 + Math.sin(hubT) * 6;
        hubPulse.setAttribute('r', pulse);
        hubPulse.setAttribute('opacity', 0.08 + Math.sin(hubT) * 0.05);
      }

      orbits.forEach((orbit, oi) => {
        // Advance orbit nodes
        orbit.nodes.forEach(node => {
          node.a += orbit.speed * orbit.dir;
          const x = CX + orbit.r * Math.cos(node.a);
          const y = CY + orbit.r * Math.sin(node.a);

          const g = document.getElementById(node.id);
          if (g) g.setAttribute('transform', `translate(${x.toFixed(2)},${y.toFixed(2)})`);

          const spoke :any = document.getElementById(node.spoke);
          if (spoke) {
            spoke.setAttribute('x1', CX);
            spoke.setAttribute('y1', CY);
            spoke.setAttribute('x2', x.toFixed(2));
            spoke.setAttribute('y2', y.toFixed(2));
          }
        });

        // Travel particle
        orbit.pAngle += orbit.speed * orbit.dir * 3.2;
        const px = CX + orbit.r * Math.cos(orbit.pAngle);
        const py = CY + orbit.r * Math.sin(orbit.pAngle);
        const p = document.getElementById(`p${oi}`);
        if (p) {
          p.setAttribute('cx', px.toFixed(2));
          p.setAttribute('cy', py.toFixed(2));
        }
      });

      animationFrameId = requestAnimationFrame(tick);
    }

    // Start loop
    animationFrameId = requestAnimationFrame(tick);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '760px',
        height: 'auto',
        aspectRatio: '76 / 68',
        /* Reproduces the fade-out gradient mask on the left side */
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, black 38%)',
        maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, black 38%)'
      }}
    >
      <svg id="orbitSVG" viewBox="0 0 760 680" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
        {/* Static dashed orbit rings */}
        <circle id="ring0" cx="430" cy="340" r="128" fill="none" stroke="#444444" strokeWidth="1" strokeDasharray="5 9"/>
        <circle id="ring1" cx="430" cy="340" r="208" fill="none" stroke="#444444" strokeWidth="1" strokeDasharray="5 9"/>
        <circle id="ring2" cx="430" cy="340" r="296" fill="none" stroke="#444444" strokeWidth="1" strokeDasharray="5 9"/>

        {/* Spoke lines (updated by JS) */}
        <line id="s00" stroke="rgba(93,202,165,0.1)" strokeWidth="1" strokeDasharray="3 6"/>
        <line id="s01" stroke="rgba(93,202,165,0.1)" strokeWidth="1" strokeDasharray="3 6"/>
        <line id="s10" stroke="rgba(93,202,165,0.07)" strokeWidth="1" strokeDasharray="3 6"/>
        <line id="s11" stroke="rgba(93,202,165,0.07)" strokeWidth="1" strokeDasharray="3 6"/>
        <line id="s12" stroke="rgba(93,202,165,0.07)" strokeWidth="1" strokeDasharray="3 6"/>
        <line id="s20" stroke="rgba(93,202,165,0.05)" strokeWidth="1" strokeDasharray="3 6"/>
        <line id="s21" stroke="rgba(93,202,165,0.05)" strokeWidth="1" strokeDasharray="3 6"/>
        <line id="s22" stroke="rgba(93,202,165,0.05)" strokeWidth="1" strokeDasharray="3 6"/>

        {/* Travel particles (one per orbit) */}
        <circle id="p0" r="3.5" fill="#5DCAA5" opacity="0.75"/>
        <circle id="p1" r="3"   fill="#5DCAA5" opacity="0.55"/>
        <circle id="p2" r="2.5" fill="#5DCAA5" opacity="0.38"/>


        {/* ── ORBIT 0 NODES — inner ── */}
        <g id="n00">
          <circle r="40" fill="rgba(7,30,61,0.92)" stroke="rgba(93,202,165,0.45)" strokeWidth="1.5"/>
          <text y="-3" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" letterSpacing="0.5">RIM</text>
          <text y="11" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="14" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Regulatory</text>
        </g>
        <g id="n01">
          <circle r="40" fill="rgba(7,30,61,0.92)" stroke="rgba(93,202,165,0.45)" strokeWidth="1.5"/>
          <text y="-3" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" letterSpacing="0.5">QMS</text>
          <text y="11" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="14" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Quality</text>
        </g>

        {/* ── ORBIT 1 NODES — middle ── */}
        <g id="n10">
          <circle r="42" fill="rgba(7,30,61,0.92)" stroke="rgba(93,202,165,0.38)" strokeWidth="1.5"/>
          <text y="-3" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">eTMF</text>
          <text y="11" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="14" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Clinical</text>
        </g>
        <g id="n11">
          <circle r="48" fill="rgba(7,30,61,0.92)" stroke="rgba(93,202,165,0.38)" strokeWidth="1.5"/>
          <text y="-3" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Safety</text>
          <text y="11" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="14" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Pharmacovig</text>
        </g>
        <g id="n12">
          <circle r="42" fill="rgba(7,30,61,0.92)" stroke="rgba(93,202,165,0.38)" strokeWidth="1.5"/>
          <text y="-3" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">CDMS</text>
          <text y="11" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="14" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Data Mgmt</text>
        </g>

        {/* ── ORBIT 2 NODES — outer ── */}
        <g id="n20">
          <circle r="46" fill="rgba(7,30,61,0.9)" stroke="rgba(93,202,165,0.28)" strokeWidth="1.5"/>
          <text y="-4" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Promo</text>
          <text y="10" textAnchor="middle" fill="#5DCAA5" fontSize="14" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Mats</text>
        </g>

        <g id="n21">
         <circle r="46" fill="rgba(7,30,61,0.9)" stroke="rgba(93,202,165,0.28)" strokeWidth="1.5"/>
         <text y="-3" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">CRM</text>
        <text y="11" textAnchor="middle" fill="rgba(255,255,255,0.38)" fontSize="14" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Commercial</text>
        </g>
        <g id="n22">
          <circle r="46" fill="rgba(7,30,61,0.9)" stroke="rgba(93,202,165,0.28)" strokeWidth="1.5"/>
          <text y="-4" textAnchor="middle" fill="#5DCAA5" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Site</text>
          <text y="10" textAnchor="middle" fill="#5DCAA5" fontSize="14" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">Vault</text>
        </g>


        {/* ── CENTER HUB ── */}
        <circle cx="430" cy="340" r="180" fill="rgba(29,158,117,0.03)"/>
        <circle cx="430" cy="340" r="100" fill="rgba(29,158,117,0.05)"/>
        <circle id="hubPulse" cx="430" cy="340" r="60" fill="rgba(29,158,117,0.1)" stroke="rgba(93,202,165,0.22)" strokeWidth="1"/>
        <circle cx="430" cy="340" r="50" fill="rgba(29,158,117,0.15)" stroke="rgba(93,202,165,0.4)" strokeWidth="1.5"/>
        <circle cx="430" cy="340" r="40" fill="rgba(29,158,117,0.18)" stroke="rgba(93,202,165,0.3)" strokeWidth="1"/>
        
        <text x="430" y="334" textAnchor="middle" fill="rgba(93,202,165,0.95)" fontSize="11" fontWeight="700" letterSpacing="2.5" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">VEEVA</text>
        <text x="430" y="350" textAnchor="middle" fill="rgba(93,202,165,0.95)" fontSize="11" fontWeight="700" letterSpacing="2.5" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif">VAULT</text>
      </svg>
    </div>
  );
};

export default OrbitalCanvas;