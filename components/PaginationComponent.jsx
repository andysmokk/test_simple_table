import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = () => {
  return (
    <Pagination className="p-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-white-2 dark:bg-bg-dark dark:hover:bg-accent dark:focus:bg-accent"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-white-2 dark:bg-bg-dark dark:hover:bg-accent dark:focus:bg-accent"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-white-2 dark:bg-bg-dark dark:hover:bg-accent dark:focus:bg-accent"
          >
            3
          </PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
