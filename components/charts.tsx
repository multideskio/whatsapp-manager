"use client"

import { useRef } from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"
import { useResizeObserver } from "@/hooks/use-resize-observer"
import { useTheme } from "next-themes"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

const labels = ["01/05", "02/05", "03/05", "04/05", "05/05", "06/05", "07/05"]

function LineChart() {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const { width } = useResizeObserver(chartRef)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 12,
          font: {
            size: width && width < 500 ? 10 : 12,
          },
          color: isDark ? "#e5e7eb" : undefined,
        },
      },
      tooltip: {
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 12,
        },
        backgroundColor: isDark ? "rgba(15, 15, 15, 0.8)" : undefined,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: width && width < 500 ? 8 : 12,
          },
          color: isDark ? "#e5e7eb" : undefined,
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          color: isDark ? "rgba(255, 255, 255, 0.1)" : undefined,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: width && width < 500 ? 8 : 12,
          },
          color: isDark ? "#e5e7eb" : undefined,
        },
        grid: {
          color: isDark ? "rgba(255, 255, 255, 0.1)" : undefined,
        },
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Envios",
        data: [1200, 1900, 800, 1500, 2200, 1800, 1600],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
    ],
  }

  return (
    <div ref={chartRef} className="h-full w-full">
      <Line options={options} data={data} />
    </div>
  )
}

function BarChart() {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const { width } = useResizeObserver(chartRef)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 12,
          font: {
            size: width && width < 500 ? 10 : 12,
          },
          color: isDark ? "#e5e7eb" : undefined,
        },
      },
      tooltip: {
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 12,
        },
        backgroundColor: isDark ? "rgba(15, 15, 15, 0.8)" : undefined,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: width && width < 500 ? 8 : 12,
          },
          color: isDark ? "#e5e7eb" : undefined,
        },
        grid: {
          color: isDark ? "rgba(255, 255, 255, 0.1)" : undefined,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: width && width < 500 ? 8 : 12,
          },
          color: isDark ? "#e5e7eb" : undefined,
        },
        grid: {
          color: isDark ? "rgba(255, 255, 255, 0.1)" : undefined,
        },
      },
    },
  }

  const data = {
    labels: ["Pendente", "Enviado", "Entregue", "Lido", "Erro"],
    datasets: [
      {
        label: "Quantidade",
        data: [450, 2800, 1900, 1200, 350],
        backgroundColor: [
          "rgba(255, 159, 64, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(46, 204, 113, 0.7)",
          "rgba(231, 76, 60, 0.7)",
        ],
      },
    ],
  }

  return (
    <div ref={chartRef} className="h-full w-full">
      <Bar options={options} data={data} />
    </div>
  )
}

function PieChart() {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const { width } = useResizeObserver(chartRef)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 12,
          font: {
            size: width && width < 500 ? 10 : 12,
          },
          color: isDark ? "#e5e7eb" : undefined,
        },
      },
      tooltip: {
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 12,
        },
        backgroundColor: isDark ? "rgba(15, 15, 15, 0.8)" : undefined,
      },
    },
  }

  const data = {
    labels: ["Lidas", "Respondidas", "Ignoradas", "Bloqueadas"],
    datasets: [
      {
        data: [65, 25, 8, 2],
        backgroundColor: [
          "rgba(46, 204, 113, 0.7)",
          "rgba(52, 152, 219, 0.7)",
          "rgba(241, 196, 15, 0.7)",
          "rgba(231, 76, 60, 0.7)",
        ],
        borderColor: [
          "rgba(46, 204, 113, 1)",
          "rgba(52, 152, 219, 1)",
          "rgba(241, 196, 15, 1)",
          "rgba(231, 76, 60, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div ref={chartRef} className="h-full w-full">
      <Pie options={options} data={data} />
    </div>
  )
}

// Exportando um objeto Charts com os componentes como propriedades
export const Charts = {
  LineChart,
  BarChart,
  PieChart,
}

export { LineChart, BarChart, PieChart }
