"use client";

import * as React from "react";

export interface DataTableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const DataTableBody = React.forwardRef<
  HTMLTableSectionElement,
  DataTableBodyProps
>(function DataTableBody(props, ref) {
  return <tbody ref={ref} {...props} />;
});

DataTableBody.displayName = "DataTableBody";