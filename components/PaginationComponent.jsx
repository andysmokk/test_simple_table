import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const PaginationComponent = ({
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (e, page) => {
    e.preventDefault();
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  if (totalItems <= itemsPerPage) {
    return null;
  }

  const createPageItem = (page) => (
    <PaginationItem key={page}>
      <PaginationLink
        href="#"
        onClick={(e) => handleClick(e, page)}
        className={cn(
          "bg-white-2 dark:bg-bg-dark dark:hover:bg-accent dark:focus:bg-accent rounded-xl font-medium",
          currentPage === page &&
            "text-white-1 font-bold bg-violet-1 dark:!bg-violet-1"
        )}
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  );

  const getPaginationItems = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) =>
        createPageItem(i + 1)
      );
    }

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);
    const pages = [];

    if (startPage > 1) {
      pages.push(createPageItem(1));
      if (startPage > 2)
        pages.push(<PaginationEllipsis key="ellipsis-start" />);
    }

    pages.push(
      ...Array.from({ length: endPage - startPage + 1 }, (_, i) =>
        createPageItem(startPage + i)
      )
    );

    if (endPage < totalPages) {
      if (endPage < totalPages - 1)
        pages.push(<PaginationEllipsis key="ellipsis-end" />);
      pages.push(createPageItem(totalPages));
    }

    return pages;
  };

  return (
    <Pagination className="flex items-center justify-center p-4 ">
      <PaginationContent className="flex gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => handleClick(e, currentPage - 1)}
            disabled={currentPage === 1}
            className="text-white-3 dark:text-white-1"
          />
        </PaginationItem>

        {getPaginationItems()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => handleClick(e, currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-white-3 dark:text-white-1"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
