import { Category } from "./enums";

export interface Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer: (custName: string) => void;
};

export interface bookType {title: string, author: string, available?: boolean, categorie?: Category};

