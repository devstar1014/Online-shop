"use client";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";

export const PaginationButton = (props: {
  pageNumber: number;
  searchParamName: string;
}) => {
  const searchParams = useSearchParams();
  const param = searchParams.get(props.searchParamName);

  return (
    <Button
      variant={Number(param) === props.pageNumber ? "default" : "secondary"}
      className="w-fit"
      key={props.pageNumber}
    >
      {props.pageNumber}
    </Button>
  );
};
