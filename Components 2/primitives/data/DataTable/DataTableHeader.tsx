"use client";

import * as React from "react";

export interface DataTableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const DataTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  DataTableHeaderProps
>(function DataTableHeader(props, ref) {
  return <thead ref={ref} {...props} />;
});

DataTableHeader.displayName = "DataTableHeader";