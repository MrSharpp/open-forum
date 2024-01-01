import { Prisma, PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

// TODO: aggregate the extensionn into seperate file/folder
// TODO: get secret from a seperate file and then generate hash from it

// const hashUserPasswordExtension = Prisma.defineExtension({
//   query: {
//     user: {
//       async create(model) {
//         model.args.data.password = await argon.hash(model.args.data.password);
//         console.log(model.args.data.password);
//         await model.query(model.args);
//         return model;
//       },
//     },
//   },
// });

// prisma.$extends(hashUserPasswordExtension);

// const decodeSlugURI = Prisma.defineExtension({
//   query: {
//     post: {
//       async findUnique(model) {
//         if (model.args.where?.slug) {
//           model.args.where.slug = decodeURIComponent(model.args.where.slug);
//         }

//         return model.query(model.args);
//       },
//     },
//   },
// });

let xPrisma = prisma;

export default xPrisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
