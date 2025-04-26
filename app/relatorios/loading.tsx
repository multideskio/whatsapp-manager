import { Skeleton } from "@/components/ui/skeleton"

export default function RelatoriosLoading() {
  return (
    <div className="container mx-auto py-6">
      <Skeleton className="h-10 w-1/4 mb-6" />

      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
        </div>
      </div>
    </div>
  )
}
