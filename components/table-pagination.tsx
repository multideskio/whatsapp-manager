"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TablePaginationProps {
  totalItems: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
}

export function TablePagination({
  totalItems,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize)

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than max pages to show
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Calculate start and end of middle pages
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're near the start
      if (currentPage <= 3) {
        endPage = 4
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push(-1) // -1 represents ellipsis
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push(-2) // -2 represents ellipsis
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Linhas por página:</span>
        <Select value={pageSize.toString()} onValueChange={(value) => onPageSizeChange(Number.parseInt(value))}>
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={pageSize.toString()} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
        <span>
          {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalItems)} de {totalItems}
        </span>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {pageNumbers.map((pageNumber, index) => (
            <PaginationItem key={index}>
              {pageNumber < 0 ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink isActive={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)}>
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
