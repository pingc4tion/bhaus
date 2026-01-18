"use client"

import { useEffect } from "react"

export function ScaleDetector() {
  useEffect(() => {
    const detectScale = () => {
      // Get screen resolution and dimensions
      const screenWidth = window.screen.width
      const screenHeight = window.screen.height
      const devicePixelRatio = window.devicePixelRatio || 1
      
      // Detect Windows scaling by comparing logical to physical dimensions
      const scaleFromDimensions = screenWidth / window.innerWidth
      
      // Normalize detected Windows scale
      let windowsScale = 1.0
      if (scaleFromDimensions >= 0.95 && scaleFromDimensions < 1.15) {
        windowsScale = 1.0 // 100%
      } else if (scaleFromDimensions >= 1.15 && scaleFromDimensions < 1.4) {
        windowsScale = 1.25 // 125%
      } else if (scaleFromDimensions >= 1.4 && scaleFromDimensions < 1.75) {
        windowsScale = 1.5 // 150%
      } else if (scaleFromDimensions >= 1.75) {
        windowsScale = 2.0 // 200%
      }
      
      // Calculate resolution-based adjustment
      // At 1080p (1920px): things appear larger, need less zoom
      // At 1440p (2560px): things appear smaller, need more zoom
      // Baseline is 1440p where it looks perfect
      const resolutionFactor = screenWidth / 2560 // 1440p baseline
      
      // Adjust zoom based on resolution
      // At 1080p: resolutionFactor ≈ 0.75, so we reduce zoom
      // At 1440p: resolutionFactor ≈ 1.0, so we keep current zoom
      // At 4K: resolutionFactor ≈ 1.5, so we increase zoom
      let zoomFactor = 1.0
      
      if (windowsScale >= 1.25) {
        // Windows is at 125% or higher - normalize to 125% appearance
        zoomFactor = 1.25 / windowsScale
      } else {
        // Windows is at 100% - scale up to match 125% appearance
        // But adjust based on resolution
        zoomFactor = 1.25 * resolutionFactor
      }
      
      // Clamp zoom factor to reasonable bounds (0.8x to 1.5x)
      zoomFactor = Math.max(0.8, Math.min(1.5, zoomFactor))
      
      // Calculate dynamic spacing multiplier based on resolution
      // At 1080p: spacing should be tighter (smaller multiplier)
      // At 1440p: spacing is baseline (1.0 multiplier)
      // At 4K: spacing should be wider (larger multiplier)
      const spacingMultiplier = Math.max(0.85, Math.min(1.15, resolutionFactor))
      
      // Set CSS variables for dynamic spacing
      document.documentElement.style.setProperty('--spacing-multiplier', String(spacingMultiplier))
      document.documentElement.style.setProperty('--gap-base', `${32 * spacingMultiplier}px`)
      document.documentElement.style.setProperty('--gap-vw', `${2 * spacingMultiplier}vw`)
      document.documentElement.style.setProperty('--gap-max', `${48 * spacingMultiplier}px`)
      
      // Apply zoom
      document.documentElement.style.zoom = String(zoomFactor)
    }

    detectScale()
    window.addEventListener('resize', detectScale)
    
    return () => {
      window.removeEventListener('resize', detectScale)
    }
  }, [])

  return null
}
