import crypto from "crypto";
import type { Item, Model } from "interfaces_types";

import Rol from "./rol";
import User from "./user";

export default [
  {
    Query: {
      app: async (
        _: any,
        { id, available }: Item,
        { models: { findOne } }: any
      ) => findOne("apps", id, available),
      isLoggedIn: async (_: any, { token }: { token: string }) => true,
    },
    Mutation: {
      signIn: async (
        _: any,
        { id, pass, available }: Item,
        { models: { findOne } }: any
      ) => {
        console.log(await findOne(id, pass, available));
        return crypto.randomBytes(20).toString("hex");
      },
      signOut: async (
        _: any,
        { id, available }: any,
        { models: { findOne } }: Model
      ) => {
        console.log("SignOut");
        return findOne("users", id, available);
      },
    },
  },
  Rol,
  User,
];
