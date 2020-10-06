import type { Item, Model } from "interfaces_types";
const table = "persons";
export default {
  Query: {
    persons: async (
      _: any,
      { available }: { available: boolean },
      { models: { findAll } }: Model
    ) => findAll(table, available),
    person: async (
      _: any,
      { id, available }: Item,
      { models: { findOne } }: any
    ) => await findOne(table, Number(id), available),
  },
  Mutation: {
    addPerson: async (
      _: any,
      { info }: Item,
      { models: { create }, pubsub }: any
    ) =>
      await create(info)
        .then((result: any) => {
          /* return result._options.isNewRecord; */
          return Math.random() >= 0.5;
        })
        .catch((e: any) => {
          console.log(e);
          return false;
        }),
    updatePerson: async (
      _: any,
      { id, info }: Item,
      { models: { update } }: Model
    ) => {
      update(id, info);
      return Math.random() >= 0.5;
    },
  },
};
