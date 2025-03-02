
import { Button, Spinner } from "flowbite-react";

export function Loading() {
  return (
    <div className="flex flex-row gap-3">
      <Button>
        <Spinner aria-label="Spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3"  color="black"  >Loading...</span>
      </Button>
    </div>
  );
}
