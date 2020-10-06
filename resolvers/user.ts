import type { Item, Model } from "interfaces_types";
const table = "users";
export default {
  UserAccount: {
    __resolveType(obj: any, context: any, info: any) {
      console.clear();
      console.log(obj);
      return null;
    },
  },
  Query: {
    users: async (
      _: any,
      { available }: { available: boolean },
      { models: { findAll } }: Model
    ) => findAll(table, available),
    user: async (
      _: any,
      { id, available }: Item,
      { models: { findOne } }: any
    ) => await findOne(table, Number(id), available),
  },
  Mutation: {
    addUser: async (
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
    updateUser: async (
      _: any,
      { id, info }: Item,
      { models: { update } }: Model
    ) => {
      update(id, info);
      return Math.random() >= 0.5;
    },
  },
  User: {
    idRol: async (
      { idRol, available }: Item,
      _: any,
      { models: { findOne } }: Model
    ) => findOne("roles", Number(idRol), Boolean(available)),
    idPerson: async (
      { idPerson, available }: Item,
      _: any,
      { models: { findOne } }: Model
    ) => findOne("persons", Number(idPerson), Boolean(available)),
  },
};
