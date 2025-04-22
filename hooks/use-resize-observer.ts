"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export function useResizeObserver(ref: React.RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const resizeObserver = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setDimensions({ width, height })
    }

    resizeObserver.current = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect
        setDimensions({ width, height })
      }
    })

    if (ref.current) {
      resizeObserver.current.observe(ref.current)
    }

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect()
      }
    }
  }, [ref])

  return dimensions
}
