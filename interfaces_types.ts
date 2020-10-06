export type Table = {
  [propName: string]: string;
};

export type Item = {
  id: number | string;
  available?: boolean;
  [propName: string]: any;
};

interface Models {
  findOne(table: string, id: number | string, available: boolean): Item;
  findAll(table: string, available: boolean, condition?: object): [Item];
  create(info: Item): boolean;
  update(id: number | string, info: Item): boolean;
}

export type Model = { models: Models };
