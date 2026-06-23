import React from "react";

import styles from "./Table.module.css";

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;
type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  as?: "td" | "th";
  scope?: "col" | "row" | "colgroup" | "rowgroup";
}

interface TableRootProps extends React.TableHTMLAttributes<HTMLTableElement> {
  caption?: string;
  stickyHeader?: boolean;
}

const TableHead: React.FC<TableHeadProps> = ({ className, children, ...props }) => (
  <thead className={[styles.head, className ?? ""].filter(Boolean).join(" ")} {...props}>
    {children}
  </thead>
);

const TableBody: React.FC<TableBodyProps> = ({ className, children, ...props }) => (
  <tbody className={[styles.body, className ?? ""].filter(Boolean).join(" ")} {...props}>
    {children}
  </tbody>
);

const TableRow: React.FC<TableRowProps> = ({ className, children, ...props }) => (
  <tr className={[styles.row, className ?? ""].filter(Boolean).join(" ")} {...props}>
    {children}
  </tr>
);

const TableCell: React.FC<TableCellProps> = ({
  as: Tag = "td",
  scope,
  className,
  children,
  ...props
}) => {
  const cellClass = [Tag === "th" ? styles.th : styles.td, className ?? ""]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag
      className={cellClass}
      scope={scope}
      {...(props as React.HTMLAttributes<HTMLTableCellElement>)}
    >
      {children}
    </Tag>
  );
};

export const Table: React.FC<TableRootProps> & {
  Head: typeof TableHead;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Cell: typeof TableCell;
} = ({ caption, stickyHeader, className, children, ...props }) => (
  <div className={styles.wrapper}>
    <table
      className={[styles.table, stickyHeader ? styles.stickyHeader : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {caption && <caption className={styles.caption}>{caption}</caption>}
      {children}
    </table>
  </div>
);

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.displayName = "Table";
