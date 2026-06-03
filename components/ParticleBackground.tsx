'use client'
import { useEffect, useRef } from 'react'

const THREE_CDN = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js'

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    let cancelled = false

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    const initScene = () => {
      if (cancelled) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const THREE = (window as any).THREE
      const el = mountRef.current
      if (!el || !THREE) return

      let animId: number
      const W = el.offsetWidth
      const H = el.offsetHeight

      // ── Scene & Camera (Orthographic → flat 2-D feel) ──────────────────
      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(
        -W / 2, W / 2, H / 2, -H / 2, 1, 1000
      )
      camera.position.z = 10

      // ── Renderer (transparent bg — navy comes from CSS) ─────────────────
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      // Fix: canvas must be absolute z-0 so text renders above it
      const canvas = renderer.domElement
      canvas.style.position = 'absolute'
      canvas.style.top = '0'
      canvas.style.left = '0'
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.zIndex = '0'
      el.appendChild(canvas)

      // ── Particle data ───────────────────────────────────────────────────
      const N = 80
      interface Pt { x: number; y: number; vx: number; vy: number }
      const pts: Pt[] = Array.from({ length: N }, () => ({
        x: (Math.random() - 0.5) * W,
        y: (Math.random() - 0.5) * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }))

      // Points geometry
      const posArr = new Float32Array(N * 3)
      const pGeo = new THREE.BufferGeometry()
      const pAttr = new THREE.BufferAttribute(posArr, 3)
      pGeo.setAttribute('position', pAttr)
      const pMat = new THREE.PointsMaterial({
        color: 0xC9A96E,
        size: 1.8,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: false,
      })
      scene.add(new THREE.Points(pGeo, pMat))

      // Lines geometry
      const MAX_SEG = 300
      const lineArr = new Float32Array(MAX_SEG * 6)
      const lGeo = new THREE.BufferGeometry()
      const lAttr = new THREE.BufferAttribute(lineArr, 3)
      lGeo.setAttribute('position', lAttr)
      const lMat = new THREE.LineBasicMaterial({
        color: 0xC9A96E,
        transparent: true,
        opacity: 0.18,
      })
      const linesMesh = new THREE.LineSegments(lGeo, lMat)
      scene.add(linesMesh)

      const MAX_D = 120

      // ── Resize ──────────────────────────────────────────────────────────
      const onResize = () => {
        const w = el.offsetWidth, h = el.offsetHeight
        camera.left = -w / 2; camera.right = w / 2
        camera.top = h / 2; camera.bottom = -h / 2
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      // ── Animation loop ───────────────────────────────────────────────────
      const tick = () => {
        animId = requestAnimationFrame(tick)
        const w = el.offsetWidth, h = el.offsetHeight
        const hw = w / 2, hh = h / 2

        // Mouse in scene coordinates
        const mx = mouseRef.current.x - hw
        const my = -(mouseRef.current.y - hh)

        for (let i = 0; i < N; i++) {
          const p = pts[i]

          // Mouse repulsion
          const dx = p.x - mx, dy = p.y - my
          const d2 = dx * dx + dy * dy
          const MOUSE_R = 130
          if (d2 < MOUSE_R * MOUSE_R && d2 > 0) {
            const d = Math.sqrt(d2)
            const f = ((MOUSE_R - d) / MOUSE_R) * 0.12
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }

          // Damping
          p.vx *= 0.97; p.vy *= 0.97

          // Speed cap
          const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
          if (spd > 0.6) { p.vx = (p.vx / spd) * 0.6; p.vy = (p.vy / spd) * 0.6 }

          p.x += p.vx; p.y += p.vy

          // Wrap edges
          if (p.x < -hw) p.x = hw; else if (p.x > hw) p.x = -hw
          if (p.y < -hh) p.y = hh; else if (p.y > hh) p.y = -hh

          posArr[i * 3] = p.x; posArr[i * 3 + 1] = p.y
        }
        pAttr.needsUpdate = true

        // Build line segments
        let s = 0
        for (let i = 0; i < N && s < MAX_SEG; i++) {
          for (let j = i + 1; j < N && s < MAX_SEG; j++) {
            const dx = pts[i].x - pts[j].x
            const dy = pts[i].y - pts[j].y
            if (dx * dx + dy * dy < MAX_D * MAX_D) {
              lineArr[s * 6 + 0] = pts[i].x; lineArr[s * 6 + 1] = pts[i].y; lineArr[s * 6 + 2] = 0
              lineArr[s * 6 + 3] = pts[j].x; lineArr[s * 6 + 4] = pts[j].y; lineArr[s * 6 + 5] = 0
              s++
            }
          }
        }
        lGeo.setDrawRange(0, s * 2)
        lAttr.needsUpdate = true

        renderer.render(scene, camera)
      }
      tick()

      cleanupRef.current = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', onResize)
        pGeo.dispose(); lGeo.dispose()
        pMat.dispose(); lMat.dispose()
        renderer.dispose()
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
      }
    }

    // Load Three.js from CDN if not already present
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).THREE) {
      initScene()
    } else {
      const existing = document.querySelector(`script[src="${THREE_CDN}"]`)
      if (existing) {
        existing.addEventListener('load', initScene)
      } else {
        const s = document.createElement('script')
        s.src = THREE_CDN
        s.onload = initScene
        document.head.appendChild(s)
      }
    }

    return () => {
      cancelled = true
      window.removeEventListener('mousemove', onMouseMove)
      cleanupRef.current?.()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
