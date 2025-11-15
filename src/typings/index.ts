export type ExpenseItem = {
    id: string;
    title: string;
    amount: number;
    category: string; // should be a union
    date: string;
}

export type TableProps = {
    rows: Array<ExpenseItem>
}