export interface IUserModel{
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: number;
    website: string;
    company: ICompany;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}