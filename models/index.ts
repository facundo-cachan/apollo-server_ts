import type { Table, Item } from "interfaces_types";

export default {
  findAll: async (
    table: Table,
    status: boolean,
    condition?: number | string
  ) => {
    console.clear();
    const items = await import(`../mocks/${table}`)
      .then((items) => items.default)
      .catch((e) => {
        console.log(e);
        return [];
      });
    console.log(condition);
    return await items.filter((item: Item) => item.available === status);
  },
  findOne: async (table: Table, id: number | string, status: boolean) => {
    console.clear();
    const items = await import(`../mocks/${table}`)
      .then((items) => items.default)
      .catch((e) => {
        console.log(e);
        return [];
      });
    return items.find((item: Item) => {
      if (item.id === id && item.available === status) return item;
    });
  },
  create: async (data: Item) => {
    console.log(data);
    return true;
  },
  update: async (data: Item) => {
    console.log(data);
    return true;
  },
};
