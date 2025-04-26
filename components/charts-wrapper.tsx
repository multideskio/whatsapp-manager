"use client"

import { Charts } from "@/components/charts"

export function LineChartWrapper() {
  return <Charts.LineChart />
}

export function BarChartWrapper() {
  return <Charts.BarChart />
}

export function PieChartWrapper() {
  return <Charts.PieChart />
}

// Exportações nomeadas para uso com dynamic import
