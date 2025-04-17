
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model PersonBadge
 * 
 */
export type PersonBadge = $Result.DefaultSelection<Prisma.$PersonBadgePayload>
/**
 * Model Pocket
 * 
 */
export type Pocket = $Result.DefaultSelection<Prisma.$PocketPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CategoriesPerUser
 * 
 */
export type CategoriesPerUser = $Result.DefaultSelection<Prisma.$CategoriesPerUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personBadge`: Exposes CRUD operations for the **PersonBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonBadges
    * const personBadges = await prisma.personBadge.findMany()
    * ```
    */
  get personBadge(): Prisma.PersonBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pocket`: Exposes CRUD operations for the **Pocket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pockets
    * const pockets = await prisma.pocket.findMany()
    * ```
    */
  get pocket(): Prisma.PocketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriesPerUser`: Exposes CRUD operations for the **CategoriesPerUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriesPerUsers
    * const categoriesPerUsers = await prisma.categoriesPerUser.findMany()
    * ```
    */
  get categoriesPerUser(): Prisma.CategoriesPerUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Badge: 'Badge',
    PersonBadge: 'PersonBadge',
    Pocket: 'Pocket',
    Category: 'Category',
    CategoriesPerUser: 'CategoriesPerUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "badge" | "personBadge" | "pocket" | "category" | "categoriesPerUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      PersonBadge: {
        payload: Prisma.$PersonBadgePayload<ExtArgs>
        fields: Prisma.PersonBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload>
          }
          findFirst: {
            args: Prisma.PersonBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload>
          }
          findMany: {
            args: Prisma.PersonBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload>[]
          }
          create: {
            args: Prisma.PersonBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload>
          }
          createMany: {
            args: Prisma.PersonBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PersonBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload>
          }
          update: {
            args: Prisma.PersonBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload>
          }
          deleteMany: {
            args: Prisma.PersonBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonBadgePayload>
          }
          aggregate: {
            args: Prisma.PersonBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonBadge>
          }
          groupBy: {
            args: Prisma.PersonBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<PersonBadgeCountAggregateOutputType> | number
          }
        }
      }
      Pocket: {
        payload: Prisma.$PocketPayload<ExtArgs>
        fields: Prisma.PocketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PocketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PocketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload>
          }
          findFirst: {
            args: Prisma.PocketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PocketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload>
          }
          findMany: {
            args: Prisma.PocketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload>[]
          }
          create: {
            args: Prisma.PocketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload>
          }
          createMany: {
            args: Prisma.PocketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PocketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload>
          }
          update: {
            args: Prisma.PocketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload>
          }
          deleteMany: {
            args: Prisma.PocketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PocketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PocketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PocketPayload>
          }
          aggregate: {
            args: Prisma.PocketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePocket>
          }
          groupBy: {
            args: Prisma.PocketGroupByArgs<ExtArgs>
            result: $Utils.Optional<PocketGroupByOutputType>[]
          }
          count: {
            args: Prisma.PocketCountArgs<ExtArgs>
            result: $Utils.Optional<PocketCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CategoriesPerUser: {
        payload: Prisma.$CategoriesPerUserPayload<ExtArgs>
        fields: Prisma.CategoriesPerUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesPerUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesPerUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload>
          }
          findFirst: {
            args: Prisma.CategoriesPerUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesPerUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload>
          }
          findMany: {
            args: Prisma.CategoriesPerUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload>[]
          }
          create: {
            args: Prisma.CategoriesPerUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload>
          }
          createMany: {
            args: Prisma.CategoriesPerUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesPerUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload>
          }
          update: {
            args: Prisma.CategoriesPerUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesPerUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesPerUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesPerUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPerUserPayload>
          }
          aggregate: {
            args: Prisma.CategoriesPerUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriesPerUser>
          }
          groupBy: {
            args: Prisma.CategoriesPerUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesPerUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesPerUserCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesPerUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    badge?: BadgeOmit
    personBadge?: PersonBadgeOmit
    pocket?: PocketOmit
    category?: CategoryOmit
    categoriesPerUser?: CategoriesPerUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    badges: number
    pockets: number
    categories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badges?: boolean | UserCountOutputTypeCountBadgesArgs
    pockets?: boolean | UserCountOutputTypeCountPocketsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonBadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPocketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PocketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesPerUserWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    users: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BadgeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonBadgeWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    users: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CategoryCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesPerUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    point: number | null
  }

  export type UserSumAggregateOutputType = {
    point: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    token: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    token: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    token: number
    point: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    point?: true
  }

  export type UserSumAggregateInputType = {
    point?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    token: string | null
    point: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    badges?: boolean | User$badgesArgs<ExtArgs>
    pockets?: boolean | User$pocketsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "token" | "point" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badges?: boolean | User$badgesArgs<ExtArgs>
    pockets?: boolean | User$pocketsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      badges: Prisma.$PersonBadgePayload<ExtArgs>[]
      pockets: Prisma.$PocketPayload<ExtArgs>[]
      categories: Prisma.$CategoriesPerUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      token: string | null
      point: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badges<T extends User$badgesArgs<ExtArgs> = {}>(args?: Subset<T, User$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pockets<T extends User$pocketsArgs<ExtArgs> = {}>(args?: Subset<T, User$pocketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly point: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.badges
   */
  export type User$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    where?: PersonBadgeWhereInput
    orderBy?: PersonBadgeOrderByWithRelationInput | PersonBadgeOrderByWithRelationInput[]
    cursor?: PersonBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonBadgeScalarFieldEnum | PersonBadgeScalarFieldEnum[]
  }

  /**
   * User.pockets
   */
  export type User$pocketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    where?: PocketWhereInput
    orderBy?: PocketOrderByWithRelationInput | PocketOrderByWithRelationInput[]
    cursor?: PocketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PocketScalarFieldEnum | PocketScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    where?: CategoriesPerUserWhereInput
    orderBy?: CategoriesPerUserOrderByWithRelationInput | CategoriesPerUserOrderByWithRelationInput[]
    cursor?: CategoriesPerUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesPerUserScalarFieldEnum | CategoriesPerUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    id: number | null
  }

  export type BadgeSumAggregateOutputType = {
    id: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    id?: true
  }

  export type BadgeSumAggregateInputType = {
    id?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Badge$usersArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>



  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Badge$usersArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      users: Prisma.$PersonBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Badge$usersArgs<ExtArgs> = {}>(args?: Subset<T, Badge$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'Int'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly createdAt: FieldRef<"Badge", 'DateTime'>
    readonly updatedAt: FieldRef<"Badge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge.users
   */
  export type Badge$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    where?: PersonBadgeWhereInput
    orderBy?: PersonBadgeOrderByWithRelationInput | PersonBadgeOrderByWithRelationInput[]
    cursor?: PersonBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonBadgeScalarFieldEnum | PersonBadgeScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model PersonBadge
   */

  export type AggregatePersonBadge = {
    _count: PersonBadgeCountAggregateOutputType | null
    _avg: PersonBadgeAvgAggregateOutputType | null
    _sum: PersonBadgeSumAggregateOutputType | null
    _min: PersonBadgeMinAggregateOutputType | null
    _max: PersonBadgeMaxAggregateOutputType | null
  }

  export type PersonBadgeAvgAggregateOutputType = {
    badgeId: number | null
  }

  export type PersonBadgeSumAggregateOutputType = {
    badgeId: number | null
  }

  export type PersonBadgeMinAggregateOutputType = {
    userId: string | null
    badgeId: number | null
  }

  export type PersonBadgeMaxAggregateOutputType = {
    userId: string | null
    badgeId: number | null
  }

  export type PersonBadgeCountAggregateOutputType = {
    userId: number
    badgeId: number
    _all: number
  }


  export type PersonBadgeAvgAggregateInputType = {
    badgeId?: true
  }

  export type PersonBadgeSumAggregateInputType = {
    badgeId?: true
  }

  export type PersonBadgeMinAggregateInputType = {
    userId?: true
    badgeId?: true
  }

  export type PersonBadgeMaxAggregateInputType = {
    userId?: true
    badgeId?: true
  }

  export type PersonBadgeCountAggregateInputType = {
    userId?: true
    badgeId?: true
    _all?: true
  }

  export type PersonBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonBadge to aggregate.
     */
    where?: PersonBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonBadges to fetch.
     */
    orderBy?: PersonBadgeOrderByWithRelationInput | PersonBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonBadges
    **/
    _count?: true | PersonBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonBadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonBadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonBadgeMaxAggregateInputType
  }

  export type GetPersonBadgeAggregateType<T extends PersonBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonBadge[P]>
      : GetScalarType<T[P], AggregatePersonBadge[P]>
  }




  export type PersonBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonBadgeWhereInput
    orderBy?: PersonBadgeOrderByWithAggregationInput | PersonBadgeOrderByWithAggregationInput[]
    by: PersonBadgeScalarFieldEnum[] | PersonBadgeScalarFieldEnum
    having?: PersonBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonBadgeCountAggregateInputType | true
    _avg?: PersonBadgeAvgAggregateInputType
    _sum?: PersonBadgeSumAggregateInputType
    _min?: PersonBadgeMinAggregateInputType
    _max?: PersonBadgeMaxAggregateInputType
  }

  export type PersonBadgeGroupByOutputType = {
    userId: string
    badgeId: number
    _count: PersonBadgeCountAggregateOutputType | null
    _avg: PersonBadgeAvgAggregateOutputType | null
    _sum: PersonBadgeSumAggregateOutputType | null
    _min: PersonBadgeMinAggregateOutputType | null
    _max: PersonBadgeMaxAggregateOutputType | null
  }

  type GetPersonBadgeGroupByPayload<T extends PersonBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], PersonBadgeGroupByOutputType[P]>
        }
      >
    >


  export type PersonBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    badgeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personBadge"]>



  export type PersonBadgeSelectScalar = {
    userId?: boolean
    badgeId?: boolean
  }

  export type PersonBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "badgeId", ExtArgs["result"]["personBadge"]>
  export type PersonBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $PersonBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonBadge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      badgeId: number
    }, ExtArgs["result"]["personBadge"]>
    composites: {}
  }

  type PersonBadgeGetPayload<S extends boolean | null | undefined | PersonBadgeDefaultArgs> = $Result.GetResult<Prisma.$PersonBadgePayload, S>

  type PersonBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonBadgeCountAggregateInputType | true
    }

  export interface PersonBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonBadge'], meta: { name: 'PersonBadge' } }
    /**
     * Find zero or one PersonBadge that matches the filter.
     * @param {PersonBadgeFindUniqueArgs} args - Arguments to find a PersonBadge
     * @example
     * // Get one PersonBadge
     * const personBadge = await prisma.personBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonBadgeFindUniqueArgs>(args: SelectSubset<T, PersonBadgeFindUniqueArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonBadgeFindUniqueOrThrowArgs} args - Arguments to find a PersonBadge
     * @example
     * // Get one PersonBadge
     * const personBadge = await prisma.personBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonBadgeFindFirstArgs} args - Arguments to find a PersonBadge
     * @example
     * // Get one PersonBadge
     * const personBadge = await prisma.personBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonBadgeFindFirstArgs>(args?: SelectSubset<T, PersonBadgeFindFirstArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonBadgeFindFirstOrThrowArgs} args - Arguments to find a PersonBadge
     * @example
     * // Get one PersonBadge
     * const personBadge = await prisma.personBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonBadges
     * const personBadges = await prisma.personBadge.findMany()
     * 
     * // Get first 10 PersonBadges
     * const personBadges = await prisma.personBadge.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const personBadgeWithUserIdOnly = await prisma.personBadge.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PersonBadgeFindManyArgs>(args?: SelectSubset<T, PersonBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonBadge.
     * @param {PersonBadgeCreateArgs} args - Arguments to create a PersonBadge.
     * @example
     * // Create one PersonBadge
     * const PersonBadge = await prisma.personBadge.create({
     *   data: {
     *     // ... data to create a PersonBadge
     *   }
     * })
     * 
     */
    create<T extends PersonBadgeCreateArgs>(args: SelectSubset<T, PersonBadgeCreateArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonBadges.
     * @param {PersonBadgeCreateManyArgs} args - Arguments to create many PersonBadges.
     * @example
     * // Create many PersonBadges
     * const personBadge = await prisma.personBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonBadgeCreateManyArgs>(args?: SelectSubset<T, PersonBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PersonBadge.
     * @param {PersonBadgeDeleteArgs} args - Arguments to delete one PersonBadge.
     * @example
     * // Delete one PersonBadge
     * const PersonBadge = await prisma.personBadge.delete({
     *   where: {
     *     // ... filter to delete one PersonBadge
     *   }
     * })
     * 
     */
    delete<T extends PersonBadgeDeleteArgs>(args: SelectSubset<T, PersonBadgeDeleteArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonBadge.
     * @param {PersonBadgeUpdateArgs} args - Arguments to update one PersonBadge.
     * @example
     * // Update one PersonBadge
     * const personBadge = await prisma.personBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonBadgeUpdateArgs>(args: SelectSubset<T, PersonBadgeUpdateArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonBadges.
     * @param {PersonBadgeDeleteManyArgs} args - Arguments to filter PersonBadges to delete.
     * @example
     * // Delete a few PersonBadges
     * const { count } = await prisma.personBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonBadgeDeleteManyArgs>(args?: SelectSubset<T, PersonBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonBadges
     * const personBadge = await prisma.personBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonBadgeUpdateManyArgs>(args: SelectSubset<T, PersonBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonBadge.
     * @param {PersonBadgeUpsertArgs} args - Arguments to update or create a PersonBadge.
     * @example
     * // Update or create a PersonBadge
     * const personBadge = await prisma.personBadge.upsert({
     *   create: {
     *     // ... data to create a PersonBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonBadge we want to update
     *   }
     * })
     */
    upsert<T extends PersonBadgeUpsertArgs>(args: SelectSubset<T, PersonBadgeUpsertArgs<ExtArgs>>): Prisma__PersonBadgeClient<$Result.GetResult<Prisma.$PersonBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonBadgeCountArgs} args - Arguments to filter PersonBadges to count.
     * @example
     * // Count the number of PersonBadges
     * const count = await prisma.personBadge.count({
     *   where: {
     *     // ... the filter for the PersonBadges we want to count
     *   }
     * })
    **/
    count<T extends PersonBadgeCountArgs>(
      args?: Subset<T, PersonBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonBadgeAggregateArgs>(args: Subset<T, PersonBadgeAggregateArgs>): Prisma.PrismaPromise<GetPersonBadgeAggregateType<T>>

    /**
     * Group by PersonBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonBadgeGroupByArgs['orderBy'] }
        : { orderBy?: PersonBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonBadge model
   */
  readonly fields: PersonBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonBadge model
   */
  interface PersonBadgeFieldRefs {
    readonly userId: FieldRef<"PersonBadge", 'String'>
    readonly badgeId: FieldRef<"PersonBadge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PersonBadge findUnique
   */
  export type PersonBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * Filter, which PersonBadge to fetch.
     */
    where: PersonBadgeWhereUniqueInput
  }

  /**
   * PersonBadge findUniqueOrThrow
   */
  export type PersonBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * Filter, which PersonBadge to fetch.
     */
    where: PersonBadgeWhereUniqueInput
  }

  /**
   * PersonBadge findFirst
   */
  export type PersonBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * Filter, which PersonBadge to fetch.
     */
    where?: PersonBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonBadges to fetch.
     */
    orderBy?: PersonBadgeOrderByWithRelationInput | PersonBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonBadges.
     */
    cursor?: PersonBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonBadges.
     */
    distinct?: PersonBadgeScalarFieldEnum | PersonBadgeScalarFieldEnum[]
  }

  /**
   * PersonBadge findFirstOrThrow
   */
  export type PersonBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * Filter, which PersonBadge to fetch.
     */
    where?: PersonBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonBadges to fetch.
     */
    orderBy?: PersonBadgeOrderByWithRelationInput | PersonBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonBadges.
     */
    cursor?: PersonBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonBadges.
     */
    distinct?: PersonBadgeScalarFieldEnum | PersonBadgeScalarFieldEnum[]
  }

  /**
   * PersonBadge findMany
   */
  export type PersonBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * Filter, which PersonBadges to fetch.
     */
    where?: PersonBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonBadges to fetch.
     */
    orderBy?: PersonBadgeOrderByWithRelationInput | PersonBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonBadges.
     */
    cursor?: PersonBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonBadges.
     */
    skip?: number
    distinct?: PersonBadgeScalarFieldEnum | PersonBadgeScalarFieldEnum[]
  }

  /**
   * PersonBadge create
   */
  export type PersonBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonBadge.
     */
    data: XOR<PersonBadgeCreateInput, PersonBadgeUncheckedCreateInput>
  }

  /**
   * PersonBadge createMany
   */
  export type PersonBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonBadges.
     */
    data: PersonBadgeCreateManyInput | PersonBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonBadge update
   */
  export type PersonBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonBadge.
     */
    data: XOR<PersonBadgeUpdateInput, PersonBadgeUncheckedUpdateInput>
    /**
     * Choose, which PersonBadge to update.
     */
    where: PersonBadgeWhereUniqueInput
  }

  /**
   * PersonBadge updateMany
   */
  export type PersonBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonBadges.
     */
    data: XOR<PersonBadgeUpdateManyMutationInput, PersonBadgeUncheckedUpdateManyInput>
    /**
     * Filter which PersonBadges to update
     */
    where?: PersonBadgeWhereInput
    /**
     * Limit how many PersonBadges to update.
     */
    limit?: number
  }

  /**
   * PersonBadge upsert
   */
  export type PersonBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonBadge to update in case it exists.
     */
    where: PersonBadgeWhereUniqueInput
    /**
     * In case the PersonBadge found by the `where` argument doesn't exist, create a new PersonBadge with this data.
     */
    create: XOR<PersonBadgeCreateInput, PersonBadgeUncheckedCreateInput>
    /**
     * In case the PersonBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonBadgeUpdateInput, PersonBadgeUncheckedUpdateInput>
  }

  /**
   * PersonBadge delete
   */
  export type PersonBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
    /**
     * Filter which PersonBadge to delete.
     */
    where: PersonBadgeWhereUniqueInput
  }

  /**
   * PersonBadge deleteMany
   */
  export type PersonBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonBadges to delete
     */
    where?: PersonBadgeWhereInput
    /**
     * Limit how many PersonBadges to delete.
     */
    limit?: number
  }

  /**
   * PersonBadge without action
   */
  export type PersonBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonBadge
     */
    select?: PersonBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonBadge
     */
    omit?: PersonBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonBadgeInclude<ExtArgs> | null
  }


  /**
   * Model Pocket
   */

  export type AggregatePocket = {
    _count: PocketCountAggregateOutputType | null
    _avg: PocketAvgAggregateOutputType | null
    _sum: PocketSumAggregateOutputType | null
    _min: PocketMinAggregateOutputType | null
    _max: PocketMaxAggregateOutputType | null
  }

  export type PocketAvgAggregateOutputType = {
    balance: number | null
  }

  export type PocketSumAggregateOutputType = {
    balance: number | null
  }

  export type PocketMinAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PocketMaxAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PocketCountAggregateOutputType = {
    id: number
    name: number
    balance: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PocketAvgAggregateInputType = {
    balance?: true
  }

  export type PocketSumAggregateInputType = {
    balance?: true
  }

  export type PocketMinAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PocketMaxAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PocketCountAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PocketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pocket to aggregate.
     */
    where?: PocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pockets to fetch.
     */
    orderBy?: PocketOrderByWithRelationInput | PocketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pockets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pockets
    **/
    _count?: true | PocketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PocketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PocketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PocketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PocketMaxAggregateInputType
  }

  export type GetPocketAggregateType<T extends PocketAggregateArgs> = {
        [P in keyof T & keyof AggregatePocket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePocket[P]>
      : GetScalarType<T[P], AggregatePocket[P]>
  }




  export type PocketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PocketWhereInput
    orderBy?: PocketOrderByWithAggregationInput | PocketOrderByWithAggregationInput[]
    by: PocketScalarFieldEnum[] | PocketScalarFieldEnum
    having?: PocketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PocketCountAggregateInputType | true
    _avg?: PocketAvgAggregateInputType
    _sum?: PocketSumAggregateInputType
    _min?: PocketMinAggregateInputType
    _max?: PocketMaxAggregateInputType
  }

  export type PocketGroupByOutputType = {
    id: string
    name: string
    balance: number
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PocketCountAggregateOutputType | null
    _avg: PocketAvgAggregateOutputType | null
    _sum: PocketSumAggregateOutputType | null
    _min: PocketMinAggregateOutputType | null
    _max: PocketMaxAggregateOutputType | null
  }

  type GetPocketGroupByPayload<T extends PocketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PocketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PocketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PocketGroupByOutputType[P]>
            : GetScalarType<T[P], PocketGroupByOutputType[P]>
        }
      >
    >


  export type PocketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pocket"]>



  export type PocketSelectScalar = {
    id?: boolean
    name?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PocketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "balance" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["pocket"]>
  export type PocketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PocketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pocket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      balance: number
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["pocket"]>
    composites: {}
  }

  type PocketGetPayload<S extends boolean | null | undefined | PocketDefaultArgs> = $Result.GetResult<Prisma.$PocketPayload, S>

  type PocketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PocketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PocketCountAggregateInputType | true
    }

  export interface PocketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pocket'], meta: { name: 'Pocket' } }
    /**
     * Find zero or one Pocket that matches the filter.
     * @param {PocketFindUniqueArgs} args - Arguments to find a Pocket
     * @example
     * // Get one Pocket
     * const pocket = await prisma.pocket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PocketFindUniqueArgs>(args: SelectSubset<T, PocketFindUniqueArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pocket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PocketFindUniqueOrThrowArgs} args - Arguments to find a Pocket
     * @example
     * // Get one Pocket
     * const pocket = await prisma.pocket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PocketFindUniqueOrThrowArgs>(args: SelectSubset<T, PocketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pocket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PocketFindFirstArgs} args - Arguments to find a Pocket
     * @example
     * // Get one Pocket
     * const pocket = await prisma.pocket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PocketFindFirstArgs>(args?: SelectSubset<T, PocketFindFirstArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pocket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PocketFindFirstOrThrowArgs} args - Arguments to find a Pocket
     * @example
     * // Get one Pocket
     * const pocket = await prisma.pocket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PocketFindFirstOrThrowArgs>(args?: SelectSubset<T, PocketFindFirstOrThrowArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pockets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PocketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pockets
     * const pockets = await prisma.pocket.findMany()
     * 
     * // Get first 10 Pockets
     * const pockets = await prisma.pocket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pocketWithIdOnly = await prisma.pocket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PocketFindManyArgs>(args?: SelectSubset<T, PocketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pocket.
     * @param {PocketCreateArgs} args - Arguments to create a Pocket.
     * @example
     * // Create one Pocket
     * const Pocket = await prisma.pocket.create({
     *   data: {
     *     // ... data to create a Pocket
     *   }
     * })
     * 
     */
    create<T extends PocketCreateArgs>(args: SelectSubset<T, PocketCreateArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pockets.
     * @param {PocketCreateManyArgs} args - Arguments to create many Pockets.
     * @example
     * // Create many Pockets
     * const pocket = await prisma.pocket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PocketCreateManyArgs>(args?: SelectSubset<T, PocketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pocket.
     * @param {PocketDeleteArgs} args - Arguments to delete one Pocket.
     * @example
     * // Delete one Pocket
     * const Pocket = await prisma.pocket.delete({
     *   where: {
     *     // ... filter to delete one Pocket
     *   }
     * })
     * 
     */
    delete<T extends PocketDeleteArgs>(args: SelectSubset<T, PocketDeleteArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pocket.
     * @param {PocketUpdateArgs} args - Arguments to update one Pocket.
     * @example
     * // Update one Pocket
     * const pocket = await prisma.pocket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PocketUpdateArgs>(args: SelectSubset<T, PocketUpdateArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pockets.
     * @param {PocketDeleteManyArgs} args - Arguments to filter Pockets to delete.
     * @example
     * // Delete a few Pockets
     * const { count } = await prisma.pocket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PocketDeleteManyArgs>(args?: SelectSubset<T, PocketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pockets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PocketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pockets
     * const pocket = await prisma.pocket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PocketUpdateManyArgs>(args: SelectSubset<T, PocketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pocket.
     * @param {PocketUpsertArgs} args - Arguments to update or create a Pocket.
     * @example
     * // Update or create a Pocket
     * const pocket = await prisma.pocket.upsert({
     *   create: {
     *     // ... data to create a Pocket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pocket we want to update
     *   }
     * })
     */
    upsert<T extends PocketUpsertArgs>(args: SelectSubset<T, PocketUpsertArgs<ExtArgs>>): Prisma__PocketClient<$Result.GetResult<Prisma.$PocketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pockets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PocketCountArgs} args - Arguments to filter Pockets to count.
     * @example
     * // Count the number of Pockets
     * const count = await prisma.pocket.count({
     *   where: {
     *     // ... the filter for the Pockets we want to count
     *   }
     * })
    **/
    count<T extends PocketCountArgs>(
      args?: Subset<T, PocketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PocketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pocket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PocketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PocketAggregateArgs>(args: Subset<T, PocketAggregateArgs>): Prisma.PrismaPromise<GetPocketAggregateType<T>>

    /**
     * Group by Pocket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PocketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PocketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PocketGroupByArgs['orderBy'] }
        : { orderBy?: PocketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PocketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPocketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pocket model
   */
  readonly fields: PocketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pocket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PocketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pocket model
   */
  interface PocketFieldRefs {
    readonly id: FieldRef<"Pocket", 'String'>
    readonly name: FieldRef<"Pocket", 'String'>
    readonly balance: FieldRef<"Pocket", 'Int'>
    readonly createdAt: FieldRef<"Pocket", 'DateTime'>
    readonly updatedAt: FieldRef<"Pocket", 'DateTime'>
    readonly userId: FieldRef<"Pocket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pocket findUnique
   */
  export type PocketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * Filter, which Pocket to fetch.
     */
    where: PocketWhereUniqueInput
  }

  /**
   * Pocket findUniqueOrThrow
   */
  export type PocketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * Filter, which Pocket to fetch.
     */
    where: PocketWhereUniqueInput
  }

  /**
   * Pocket findFirst
   */
  export type PocketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * Filter, which Pocket to fetch.
     */
    where?: PocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pockets to fetch.
     */
    orderBy?: PocketOrderByWithRelationInput | PocketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pockets.
     */
    cursor?: PocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pockets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pockets.
     */
    distinct?: PocketScalarFieldEnum | PocketScalarFieldEnum[]
  }

  /**
   * Pocket findFirstOrThrow
   */
  export type PocketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * Filter, which Pocket to fetch.
     */
    where?: PocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pockets to fetch.
     */
    orderBy?: PocketOrderByWithRelationInput | PocketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pockets.
     */
    cursor?: PocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pockets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pockets.
     */
    distinct?: PocketScalarFieldEnum | PocketScalarFieldEnum[]
  }

  /**
   * Pocket findMany
   */
  export type PocketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * Filter, which Pockets to fetch.
     */
    where?: PocketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pockets to fetch.
     */
    orderBy?: PocketOrderByWithRelationInput | PocketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pockets.
     */
    cursor?: PocketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pockets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pockets.
     */
    skip?: number
    distinct?: PocketScalarFieldEnum | PocketScalarFieldEnum[]
  }

  /**
   * Pocket create
   */
  export type PocketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * The data needed to create a Pocket.
     */
    data: XOR<PocketCreateInput, PocketUncheckedCreateInput>
  }

  /**
   * Pocket createMany
   */
  export type PocketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pockets.
     */
    data: PocketCreateManyInput | PocketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pocket update
   */
  export type PocketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * The data needed to update a Pocket.
     */
    data: XOR<PocketUpdateInput, PocketUncheckedUpdateInput>
    /**
     * Choose, which Pocket to update.
     */
    where: PocketWhereUniqueInput
  }

  /**
   * Pocket updateMany
   */
  export type PocketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pockets.
     */
    data: XOR<PocketUpdateManyMutationInput, PocketUncheckedUpdateManyInput>
    /**
     * Filter which Pockets to update
     */
    where?: PocketWhereInput
    /**
     * Limit how many Pockets to update.
     */
    limit?: number
  }

  /**
   * Pocket upsert
   */
  export type PocketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * The filter to search for the Pocket to update in case it exists.
     */
    where: PocketWhereUniqueInput
    /**
     * In case the Pocket found by the `where` argument doesn't exist, create a new Pocket with this data.
     */
    create: XOR<PocketCreateInput, PocketUncheckedCreateInput>
    /**
     * In case the Pocket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PocketUpdateInput, PocketUncheckedUpdateInput>
  }

  /**
   * Pocket delete
   */
  export type PocketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
    /**
     * Filter which Pocket to delete.
     */
    where: PocketWhereUniqueInput
  }

  /**
   * Pocket deleteMany
   */
  export type PocketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pockets to delete
     */
    where?: PocketWhereInput
    /**
     * Limit how many Pockets to delete.
     */
    limit?: number
  }

  /**
   * Pocket without action
   */
  export type PocketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pocket
     */
    select?: PocketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pocket
     */
    omit?: PocketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PocketInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Category$usersArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Category$usersArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      users: Prisma.$CategoriesPerUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Category$usersArgs<ExtArgs> = {}>(args?: Subset<T, Category$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.users
   */
  export type Category$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    where?: CategoriesPerUserWhereInput
    orderBy?: CategoriesPerUserOrderByWithRelationInput | CategoriesPerUserOrderByWithRelationInput[]
    cursor?: CategoriesPerUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesPerUserScalarFieldEnum | CategoriesPerUserScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model CategoriesPerUser
   */

  export type AggregateCategoriesPerUser = {
    _count: CategoriesPerUserCountAggregateOutputType | null
    _avg: CategoriesPerUserAvgAggregateOutputType | null
    _sum: CategoriesPerUserSumAggregateOutputType | null
    _min: CategoriesPerUserMinAggregateOutputType | null
    _max: CategoriesPerUserMaxAggregateOutputType | null
  }

  export type CategoriesPerUserAvgAggregateOutputType = {
    categoryId: number | null
  }

  export type CategoriesPerUserSumAggregateOutputType = {
    categoryId: number | null
  }

  export type CategoriesPerUserMinAggregateOutputType = {
    userId: string | null
    categoryId: number | null
  }

  export type CategoriesPerUserMaxAggregateOutputType = {
    userId: string | null
    categoryId: number | null
  }

  export type CategoriesPerUserCountAggregateOutputType = {
    userId: number
    categoryId: number
    _all: number
  }


  export type CategoriesPerUserAvgAggregateInputType = {
    categoryId?: true
  }

  export type CategoriesPerUserSumAggregateInputType = {
    categoryId?: true
  }

  export type CategoriesPerUserMinAggregateInputType = {
    userId?: true
    categoryId?: true
  }

  export type CategoriesPerUserMaxAggregateInputType = {
    userId?: true
    categoryId?: true
  }

  export type CategoriesPerUserCountAggregateInputType = {
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type CategoriesPerUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesPerUser to aggregate.
     */
    where?: CategoriesPerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesPerUsers to fetch.
     */
    orderBy?: CategoriesPerUserOrderByWithRelationInput | CategoriesPerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesPerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesPerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesPerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriesPerUsers
    **/
    _count?: true | CategoriesPerUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesPerUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesPerUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesPerUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesPerUserMaxAggregateInputType
  }

  export type GetCategoriesPerUserAggregateType<T extends CategoriesPerUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriesPerUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriesPerUser[P]>
      : GetScalarType<T[P], AggregateCategoriesPerUser[P]>
  }




  export type CategoriesPerUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesPerUserWhereInput
    orderBy?: CategoriesPerUserOrderByWithAggregationInput | CategoriesPerUserOrderByWithAggregationInput[]
    by: CategoriesPerUserScalarFieldEnum[] | CategoriesPerUserScalarFieldEnum
    having?: CategoriesPerUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesPerUserCountAggregateInputType | true
    _avg?: CategoriesPerUserAvgAggregateInputType
    _sum?: CategoriesPerUserSumAggregateInputType
    _min?: CategoriesPerUserMinAggregateInputType
    _max?: CategoriesPerUserMaxAggregateInputType
  }

  export type CategoriesPerUserGroupByOutputType = {
    userId: string
    categoryId: number
    _count: CategoriesPerUserCountAggregateOutputType | null
    _avg: CategoriesPerUserAvgAggregateOutputType | null
    _sum: CategoriesPerUserSumAggregateOutputType | null
    _min: CategoriesPerUserMinAggregateOutputType | null
    _max: CategoriesPerUserMaxAggregateOutputType | null
  }

  type GetCategoriesPerUserGroupByPayload<T extends CategoriesPerUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesPerUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesPerUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesPerUserGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesPerUserGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesPerUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriesPerUser"]>



  export type CategoriesPerUserSelectScalar = {
    userId?: boolean
    categoryId?: boolean
  }

  export type CategoriesPerUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "categoryId", ExtArgs["result"]["categoriesPerUser"]>
  export type CategoriesPerUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoriesPerUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriesPerUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      categoryId: number
    }, ExtArgs["result"]["categoriesPerUser"]>
    composites: {}
  }

  type CategoriesPerUserGetPayload<S extends boolean | null | undefined | CategoriesPerUserDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPerUserPayload, S>

  type CategoriesPerUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesPerUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesPerUserCountAggregateInputType | true
    }

  export interface CategoriesPerUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriesPerUser'], meta: { name: 'CategoriesPerUser' } }
    /**
     * Find zero or one CategoriesPerUser that matches the filter.
     * @param {CategoriesPerUserFindUniqueArgs} args - Arguments to find a CategoriesPerUser
     * @example
     * // Get one CategoriesPerUser
     * const categoriesPerUser = await prisma.categoriesPerUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesPerUserFindUniqueArgs>(args: SelectSubset<T, CategoriesPerUserFindUniqueArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriesPerUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesPerUserFindUniqueOrThrowArgs} args - Arguments to find a CategoriesPerUser
     * @example
     * // Get one CategoriesPerUser
     * const categoriesPerUser = await prisma.categoriesPerUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesPerUserFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesPerUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesPerUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesPerUserFindFirstArgs} args - Arguments to find a CategoriesPerUser
     * @example
     * // Get one CategoriesPerUser
     * const categoriesPerUser = await prisma.categoriesPerUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesPerUserFindFirstArgs>(args?: SelectSubset<T, CategoriesPerUserFindFirstArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesPerUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesPerUserFindFirstOrThrowArgs} args - Arguments to find a CategoriesPerUser
     * @example
     * // Get one CategoriesPerUser
     * const categoriesPerUser = await prisma.categoriesPerUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesPerUserFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesPerUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriesPerUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesPerUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriesPerUsers
     * const categoriesPerUsers = await prisma.categoriesPerUser.findMany()
     * 
     * // Get first 10 CategoriesPerUsers
     * const categoriesPerUsers = await prisma.categoriesPerUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const categoriesPerUserWithUserIdOnly = await prisma.categoriesPerUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends CategoriesPerUserFindManyArgs>(args?: SelectSubset<T, CategoriesPerUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriesPerUser.
     * @param {CategoriesPerUserCreateArgs} args - Arguments to create a CategoriesPerUser.
     * @example
     * // Create one CategoriesPerUser
     * const CategoriesPerUser = await prisma.categoriesPerUser.create({
     *   data: {
     *     // ... data to create a CategoriesPerUser
     *   }
     * })
     * 
     */
    create<T extends CategoriesPerUserCreateArgs>(args: SelectSubset<T, CategoriesPerUserCreateArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriesPerUsers.
     * @param {CategoriesPerUserCreateManyArgs} args - Arguments to create many CategoriesPerUsers.
     * @example
     * // Create many CategoriesPerUsers
     * const categoriesPerUser = await prisma.categoriesPerUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesPerUserCreateManyArgs>(args?: SelectSubset<T, CategoriesPerUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriesPerUser.
     * @param {CategoriesPerUserDeleteArgs} args - Arguments to delete one CategoriesPerUser.
     * @example
     * // Delete one CategoriesPerUser
     * const CategoriesPerUser = await prisma.categoriesPerUser.delete({
     *   where: {
     *     // ... filter to delete one CategoriesPerUser
     *   }
     * })
     * 
     */
    delete<T extends CategoriesPerUserDeleteArgs>(args: SelectSubset<T, CategoriesPerUserDeleteArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriesPerUser.
     * @param {CategoriesPerUserUpdateArgs} args - Arguments to update one CategoriesPerUser.
     * @example
     * // Update one CategoriesPerUser
     * const categoriesPerUser = await prisma.categoriesPerUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesPerUserUpdateArgs>(args: SelectSubset<T, CategoriesPerUserUpdateArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriesPerUsers.
     * @param {CategoriesPerUserDeleteManyArgs} args - Arguments to filter CategoriesPerUsers to delete.
     * @example
     * // Delete a few CategoriesPerUsers
     * const { count } = await prisma.categoriesPerUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesPerUserDeleteManyArgs>(args?: SelectSubset<T, CategoriesPerUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriesPerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesPerUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriesPerUsers
     * const categoriesPerUser = await prisma.categoriesPerUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesPerUserUpdateManyArgs>(args: SelectSubset<T, CategoriesPerUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriesPerUser.
     * @param {CategoriesPerUserUpsertArgs} args - Arguments to update or create a CategoriesPerUser.
     * @example
     * // Update or create a CategoriesPerUser
     * const categoriesPerUser = await prisma.categoriesPerUser.upsert({
     *   create: {
     *     // ... data to create a CategoriesPerUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriesPerUser we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesPerUserUpsertArgs>(args: SelectSubset<T, CategoriesPerUserUpsertArgs<ExtArgs>>): Prisma__CategoriesPerUserClient<$Result.GetResult<Prisma.$CategoriesPerUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriesPerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesPerUserCountArgs} args - Arguments to filter CategoriesPerUsers to count.
     * @example
     * // Count the number of CategoriesPerUsers
     * const count = await prisma.categoriesPerUser.count({
     *   where: {
     *     // ... the filter for the CategoriesPerUsers we want to count
     *   }
     * })
    **/
    count<T extends CategoriesPerUserCountArgs>(
      args?: Subset<T, CategoriesPerUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesPerUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriesPerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesPerUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesPerUserAggregateArgs>(args: Subset<T, CategoriesPerUserAggregateArgs>): Prisma.PrismaPromise<GetCategoriesPerUserAggregateType<T>>

    /**
     * Group by CategoriesPerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesPerUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesPerUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesPerUserGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesPerUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesPerUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesPerUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriesPerUser model
   */
  readonly fields: CategoriesPerUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriesPerUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesPerUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoriesPerUser model
   */
  interface CategoriesPerUserFieldRefs {
    readonly userId: FieldRef<"CategoriesPerUser", 'String'>
    readonly categoryId: FieldRef<"CategoriesPerUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoriesPerUser findUnique
   */
  export type CategoriesPerUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesPerUser to fetch.
     */
    where: CategoriesPerUserWhereUniqueInput
  }

  /**
   * CategoriesPerUser findUniqueOrThrow
   */
  export type CategoriesPerUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesPerUser to fetch.
     */
    where: CategoriesPerUserWhereUniqueInput
  }

  /**
   * CategoriesPerUser findFirst
   */
  export type CategoriesPerUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesPerUser to fetch.
     */
    where?: CategoriesPerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesPerUsers to fetch.
     */
    orderBy?: CategoriesPerUserOrderByWithRelationInput | CategoriesPerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesPerUsers.
     */
    cursor?: CategoriesPerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesPerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesPerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesPerUsers.
     */
    distinct?: CategoriesPerUserScalarFieldEnum | CategoriesPerUserScalarFieldEnum[]
  }

  /**
   * CategoriesPerUser findFirstOrThrow
   */
  export type CategoriesPerUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesPerUser to fetch.
     */
    where?: CategoriesPerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesPerUsers to fetch.
     */
    orderBy?: CategoriesPerUserOrderByWithRelationInput | CategoriesPerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesPerUsers.
     */
    cursor?: CategoriesPerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesPerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesPerUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesPerUsers.
     */
    distinct?: CategoriesPerUserScalarFieldEnum | CategoriesPerUserScalarFieldEnum[]
  }

  /**
   * CategoriesPerUser findMany
   */
  export type CategoriesPerUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesPerUsers to fetch.
     */
    where?: CategoriesPerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesPerUsers to fetch.
     */
    orderBy?: CategoriesPerUserOrderByWithRelationInput | CategoriesPerUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriesPerUsers.
     */
    cursor?: CategoriesPerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesPerUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesPerUsers.
     */
    skip?: number
    distinct?: CategoriesPerUserScalarFieldEnum | CategoriesPerUserScalarFieldEnum[]
  }

  /**
   * CategoriesPerUser create
   */
  export type CategoriesPerUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriesPerUser.
     */
    data: XOR<CategoriesPerUserCreateInput, CategoriesPerUserUncheckedCreateInput>
  }

  /**
   * CategoriesPerUser createMany
   */
  export type CategoriesPerUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriesPerUsers.
     */
    data: CategoriesPerUserCreateManyInput | CategoriesPerUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriesPerUser update
   */
  export type CategoriesPerUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriesPerUser.
     */
    data: XOR<CategoriesPerUserUpdateInput, CategoriesPerUserUncheckedUpdateInput>
    /**
     * Choose, which CategoriesPerUser to update.
     */
    where: CategoriesPerUserWhereUniqueInput
  }

  /**
   * CategoriesPerUser updateMany
   */
  export type CategoriesPerUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriesPerUsers.
     */
    data: XOR<CategoriesPerUserUpdateManyMutationInput, CategoriesPerUserUncheckedUpdateManyInput>
    /**
     * Filter which CategoriesPerUsers to update
     */
    where?: CategoriesPerUserWhereInput
    /**
     * Limit how many CategoriesPerUsers to update.
     */
    limit?: number
  }

  /**
   * CategoriesPerUser upsert
   */
  export type CategoriesPerUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriesPerUser to update in case it exists.
     */
    where: CategoriesPerUserWhereUniqueInput
    /**
     * In case the CategoriesPerUser found by the `where` argument doesn't exist, create a new CategoriesPerUser with this data.
     */
    create: XOR<CategoriesPerUserCreateInput, CategoriesPerUserUncheckedCreateInput>
    /**
     * In case the CategoriesPerUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesPerUserUpdateInput, CategoriesPerUserUncheckedUpdateInput>
  }

  /**
   * CategoriesPerUser delete
   */
  export type CategoriesPerUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
    /**
     * Filter which CategoriesPerUser to delete.
     */
    where: CategoriesPerUserWhereUniqueInput
  }

  /**
   * CategoriesPerUser deleteMany
   */
  export type CategoriesPerUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesPerUsers to delete
     */
    where?: CategoriesPerUserWhereInput
    /**
     * Limit how many CategoriesPerUsers to delete.
     */
    limit?: number
  }

  /**
   * CategoriesPerUser without action
   */
  export type CategoriesPerUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesPerUser
     */
    select?: CategoriesPerUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesPerUser
     */
    omit?: CategoriesPerUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesPerUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    token: 'token',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const PersonBadgeScalarFieldEnum: {
    userId: 'userId',
    badgeId: 'badgeId'
  };

  export type PersonBadgeScalarFieldEnum = (typeof PersonBadgeScalarFieldEnum)[keyof typeof PersonBadgeScalarFieldEnum]


  export const PocketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PocketScalarFieldEnum = (typeof PocketScalarFieldEnum)[keyof typeof PocketScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CategoriesPerUserScalarFieldEnum: {
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type CategoriesPerUserScalarFieldEnum = (typeof CategoriesPerUserScalarFieldEnum)[keyof typeof CategoriesPerUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    token: 'token'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BadgeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type BadgeOrderByRelevanceFieldEnum = (typeof BadgeOrderByRelevanceFieldEnum)[keyof typeof BadgeOrderByRelevanceFieldEnum]


  export const PersonBadgeOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type PersonBadgeOrderByRelevanceFieldEnum = (typeof PersonBadgeOrderByRelevanceFieldEnum)[keyof typeof PersonBadgeOrderByRelevanceFieldEnum]


  export const PocketOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type PocketOrderByRelevanceFieldEnum = (typeof PocketOrderByRelevanceFieldEnum)[keyof typeof PocketOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const CategoriesPerUserOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type CategoriesPerUserOrderByRelevanceFieldEnum = (typeof CategoriesPerUserOrderByRelevanceFieldEnum)[keyof typeof CategoriesPerUserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    point?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    badges?: PersonBadgeListRelationFilter
    pockets?: PocketListRelationFilter
    categories?: CategoriesPerUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    badges?: PersonBadgeOrderByRelationAggregateInput
    pockets?: PocketOrderByRelationAggregateInput
    categories?: CategoriesPerUserOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    point?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    badges?: PersonBadgeListRelationFilter
    pockets?: PocketListRelationFilter
    categories?: CategoriesPerUserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    point?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: IntFilter<"Badge"> | number
    name?: StringFilter<"Badge"> | string
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    updatedAt?: DateTimeFilter<"Badge"> | Date | string
    users?: PersonBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: PersonBadgeOrderByRelationAggregateInput
    _relevance?: BadgeOrderByRelevanceInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    name?: StringFilter<"Badge"> | string
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    updatedAt?: DateTimeFilter<"Badge"> | Date | string
    users?: PersonBadgeListRelationFilter
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Badge"> | number
    name?: StringWithAggregatesFilter<"Badge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
  }

  export type PersonBadgeWhereInput = {
    AND?: PersonBadgeWhereInput | PersonBadgeWhereInput[]
    OR?: PersonBadgeWhereInput[]
    NOT?: PersonBadgeWhereInput | PersonBadgeWhereInput[]
    userId?: StringFilter<"PersonBadge"> | string
    badgeId?: IntFilter<"PersonBadge"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }

  export type PersonBadgeOrderByWithRelationInput = {
    userId?: SortOrder
    badgeId?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: BadgeOrderByWithRelationInput
    _relevance?: PersonBadgeOrderByRelevanceInput
  }

  export type PersonBadgeWhereUniqueInput = Prisma.AtLeast<{
    userId_badgeId?: PersonBadgeUserIdBadgeIdCompoundUniqueInput
    AND?: PersonBadgeWhereInput | PersonBadgeWhereInput[]
    OR?: PersonBadgeWhereInput[]
    NOT?: PersonBadgeWhereInput | PersonBadgeWhereInput[]
    userId?: StringFilter<"PersonBadge"> | string
    badgeId?: IntFilter<"PersonBadge"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }, "userId_badgeId">

  export type PersonBadgeOrderByWithAggregationInput = {
    userId?: SortOrder
    badgeId?: SortOrder
    _count?: PersonBadgeCountOrderByAggregateInput
    _avg?: PersonBadgeAvgOrderByAggregateInput
    _max?: PersonBadgeMaxOrderByAggregateInput
    _min?: PersonBadgeMinOrderByAggregateInput
    _sum?: PersonBadgeSumOrderByAggregateInput
  }

  export type PersonBadgeScalarWhereWithAggregatesInput = {
    AND?: PersonBadgeScalarWhereWithAggregatesInput | PersonBadgeScalarWhereWithAggregatesInput[]
    OR?: PersonBadgeScalarWhereWithAggregatesInput[]
    NOT?: PersonBadgeScalarWhereWithAggregatesInput | PersonBadgeScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"PersonBadge"> | string
    badgeId?: IntWithAggregatesFilter<"PersonBadge"> | number
  }

  export type PocketWhereInput = {
    AND?: PocketWhereInput | PocketWhereInput[]
    OR?: PocketWhereInput[]
    NOT?: PocketWhereInput | PocketWhereInput[]
    id?: StringFilter<"Pocket"> | string
    name?: StringFilter<"Pocket"> | string
    balance?: IntFilter<"Pocket"> | number
    createdAt?: DateTimeFilter<"Pocket"> | Date | string
    updatedAt?: DateTimeFilter<"Pocket"> | Date | string
    userId?: StringFilter<"Pocket"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PocketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PocketOrderByRelevanceInput
  }

  export type PocketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PocketWhereInput | PocketWhereInput[]
    OR?: PocketWhereInput[]
    NOT?: PocketWhereInput | PocketWhereInput[]
    name?: StringFilter<"Pocket"> | string
    balance?: IntFilter<"Pocket"> | number
    createdAt?: DateTimeFilter<"Pocket"> | Date | string
    updatedAt?: DateTimeFilter<"Pocket"> | Date | string
    userId?: StringFilter<"Pocket"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PocketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PocketCountOrderByAggregateInput
    _avg?: PocketAvgOrderByAggregateInput
    _max?: PocketMaxOrderByAggregateInput
    _min?: PocketMinOrderByAggregateInput
    _sum?: PocketSumOrderByAggregateInput
  }

  export type PocketScalarWhereWithAggregatesInput = {
    AND?: PocketScalarWhereWithAggregatesInput | PocketScalarWhereWithAggregatesInput[]
    OR?: PocketScalarWhereWithAggregatesInput[]
    NOT?: PocketScalarWhereWithAggregatesInput | PocketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pocket"> | string
    name?: StringWithAggregatesFilter<"Pocket"> | string
    balance?: IntWithAggregatesFilter<"Pocket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pocket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pocket"> | Date | string
    userId?: StringWithAggregatesFilter<"Pocket"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    users?: CategoriesPerUserListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: CategoriesPerUserOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    users?: CategoriesPerUserListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type CategoriesPerUserWhereInput = {
    AND?: CategoriesPerUserWhereInput | CategoriesPerUserWhereInput[]
    OR?: CategoriesPerUserWhereInput[]
    NOT?: CategoriesPerUserWhereInput | CategoriesPerUserWhereInput[]
    userId?: StringFilter<"CategoriesPerUser"> | string
    categoryId?: IntFilter<"CategoriesPerUser"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoriesPerUserOrderByWithRelationInput = {
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    _relevance?: CategoriesPerUserOrderByRelevanceInput
  }

  export type CategoriesPerUserWhereUniqueInput = Prisma.AtLeast<{
    userId_categoryId?: CategoriesPerUserUserIdCategoryIdCompoundUniqueInput
    AND?: CategoriesPerUserWhereInput | CategoriesPerUserWhereInput[]
    OR?: CategoriesPerUserWhereInput[]
    NOT?: CategoriesPerUserWhereInput | CategoriesPerUserWhereInput[]
    userId?: StringFilter<"CategoriesPerUser"> | string
    categoryId?: IntFilter<"CategoriesPerUser"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "userId_categoryId">

  export type CategoriesPerUserOrderByWithAggregationInput = {
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: CategoriesPerUserCountOrderByAggregateInput
    _avg?: CategoriesPerUserAvgOrderByAggregateInput
    _max?: CategoriesPerUserMaxOrderByAggregateInput
    _min?: CategoriesPerUserMinOrderByAggregateInput
    _sum?: CategoriesPerUserSumOrderByAggregateInput
  }

  export type CategoriesPerUserScalarWhereWithAggregatesInput = {
    AND?: CategoriesPerUserScalarWhereWithAggregatesInput | CategoriesPerUserScalarWhereWithAggregatesInput[]
    OR?: CategoriesPerUserScalarWhereWithAggregatesInput[]
    NOT?: CategoriesPerUserScalarWhereWithAggregatesInput | CategoriesPerUserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"CategoriesPerUser"> | string
    categoryId?: IntWithAggregatesFilter<"CategoriesPerUser"> | number
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: PersonBadgeCreateNestedManyWithoutUserInput
    pockets?: PocketCreateNestedManyWithoutUserInput
    categories?: CategoriesPerUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: PersonBadgeUncheckedCreateNestedManyWithoutUserInput
    pockets?: PocketUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoriesPerUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: PersonBadgeUpdateManyWithoutUserNestedInput
    pockets?: PocketUpdateManyWithoutUserNestedInput
    categories?: CategoriesPerUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: PersonBadgeUncheckedUpdateManyWithoutUserNestedInput
    pockets?: PocketUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoriesPerUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: PersonBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: PersonBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: PersonBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: PersonBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonBadgeCreateInput = {
    user: UserCreateNestedOneWithoutBadgesInput
    badge: BadgeCreateNestedOneWithoutUsersInput
  }

  export type PersonBadgeUncheckedCreateInput = {
    userId: string
    badgeId: number
  }

  export type PersonBadgeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type PersonBadgeUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonBadgeCreateManyInput = {
    userId: string
    badgeId: number
  }

  export type PersonBadgeUpdateManyMutationInput = {

  }

  export type PersonBadgeUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type PocketCreateInput = {
    id?: string
    name: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPocketsInput
  }

  export type PocketUncheckedCreateInput = {
    id?: string
    name: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PocketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPocketsNestedInput
  }

  export type PocketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PocketCreateManyInput = {
    id?: string
    name: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PocketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PocketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    users?: CategoriesPerUserCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    users?: CategoriesPerUserUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: CategoriesPerUserUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: CategoriesPerUserUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesPerUserCreateInput = {
    user: UserCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutUsersInput
  }

  export type CategoriesPerUserUncheckedCreateInput = {
    userId: string
    categoryId: number
  }

  export type CategoriesPerUserUpdateInput = {
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutUsersNestedInput
  }

  export type CategoriesPerUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesPerUserCreateManyInput = {
    userId: string
    categoryId: number
  }

  export type CategoriesPerUserUpdateManyMutationInput = {

  }

  export type CategoriesPerUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonBadgeListRelationFilter = {
    every?: PersonBadgeWhereInput
    some?: PersonBadgeWhereInput
    none?: PersonBadgeWhereInput
  }

  export type PocketListRelationFilter = {
    every?: PocketWhereInput
    some?: PocketWhereInput
    none?: PocketWhereInput
  }

  export type CategoriesPerUserListRelationFilter = {
    every?: CategoriesPerUserWhereInput
    some?: CategoriesPerUserWhereInput
    none?: CategoriesPerUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PocketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesPerUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BadgeOrderByRelevanceInput = {
    fields: BadgeOrderByRelevanceFieldEnum | BadgeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BadgeScalarRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type PersonBadgeOrderByRelevanceInput = {
    fields: PersonBadgeOrderByRelevanceFieldEnum | PersonBadgeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PersonBadgeUserIdBadgeIdCompoundUniqueInput = {
    userId: string
    badgeId: number
  }

  export type PersonBadgeCountOrderByAggregateInput = {
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type PersonBadgeAvgOrderByAggregateInput = {
    badgeId?: SortOrder
  }

  export type PersonBadgeMaxOrderByAggregateInput = {
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type PersonBadgeMinOrderByAggregateInput = {
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type PersonBadgeSumOrderByAggregateInput = {
    badgeId?: SortOrder
  }

  export type PocketOrderByRelevanceInput = {
    fields: PocketOrderByRelevanceFieldEnum | PocketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PocketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PocketAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type PocketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PocketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PocketSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoriesPerUserOrderByRelevanceInput = {
    fields: CategoriesPerUserOrderByRelevanceFieldEnum | CategoriesPerUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesPerUserUserIdCategoryIdCompoundUniqueInput = {
    userId: string
    categoryId: number
  }

  export type CategoriesPerUserCountOrderByAggregateInput = {
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesPerUserAvgOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type CategoriesPerUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesPerUserMinOrderByAggregateInput = {
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesPerUserSumOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type PersonBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonBadgeCreateWithoutUserInput, PersonBadgeUncheckedCreateWithoutUserInput> | PersonBadgeCreateWithoutUserInput[] | PersonBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutUserInput | PersonBadgeCreateOrConnectWithoutUserInput[]
    createMany?: PersonBadgeCreateManyUserInputEnvelope
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
  }

  export type PocketCreateNestedManyWithoutUserInput = {
    create?: XOR<PocketCreateWithoutUserInput, PocketUncheckedCreateWithoutUserInput> | PocketCreateWithoutUserInput[] | PocketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PocketCreateOrConnectWithoutUserInput | PocketCreateOrConnectWithoutUserInput[]
    createMany?: PocketCreateManyUserInputEnvelope
    connect?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
  }

  export type CategoriesPerUserCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoriesPerUserCreateWithoutUserInput, CategoriesPerUserUncheckedCreateWithoutUserInput> | CategoriesPerUserCreateWithoutUserInput[] | CategoriesPerUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutUserInput | CategoriesPerUserCreateOrConnectWithoutUserInput[]
    createMany?: CategoriesPerUserCreateManyUserInputEnvelope
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
  }

  export type PersonBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonBadgeCreateWithoutUserInput, PersonBadgeUncheckedCreateWithoutUserInput> | PersonBadgeCreateWithoutUserInput[] | PersonBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutUserInput | PersonBadgeCreateOrConnectWithoutUserInput[]
    createMany?: PersonBadgeCreateManyUserInputEnvelope
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
  }

  export type PocketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PocketCreateWithoutUserInput, PocketUncheckedCreateWithoutUserInput> | PocketCreateWithoutUserInput[] | PocketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PocketCreateOrConnectWithoutUserInput | PocketCreateOrConnectWithoutUserInput[]
    createMany?: PocketCreateManyUserInputEnvelope
    connect?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
  }

  export type CategoriesPerUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoriesPerUserCreateWithoutUserInput, CategoriesPerUserUncheckedCreateWithoutUserInput> | CategoriesPerUserCreateWithoutUserInput[] | CategoriesPerUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutUserInput | CategoriesPerUserCreateOrConnectWithoutUserInput[]
    createMany?: CategoriesPerUserCreateManyUserInputEnvelope
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonBadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonBadgeCreateWithoutUserInput, PersonBadgeUncheckedCreateWithoutUserInput> | PersonBadgeCreateWithoutUserInput[] | PersonBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutUserInput | PersonBadgeCreateOrConnectWithoutUserInput[]
    upsert?: PersonBadgeUpsertWithWhereUniqueWithoutUserInput | PersonBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonBadgeCreateManyUserInputEnvelope
    set?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    disconnect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    delete?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    update?: PersonBadgeUpdateWithWhereUniqueWithoutUserInput | PersonBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonBadgeUpdateManyWithWhereWithoutUserInput | PersonBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonBadgeScalarWhereInput | PersonBadgeScalarWhereInput[]
  }

  export type PocketUpdateManyWithoutUserNestedInput = {
    create?: XOR<PocketCreateWithoutUserInput, PocketUncheckedCreateWithoutUserInput> | PocketCreateWithoutUserInput[] | PocketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PocketCreateOrConnectWithoutUserInput | PocketCreateOrConnectWithoutUserInput[]
    upsert?: PocketUpsertWithWhereUniqueWithoutUserInput | PocketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PocketCreateManyUserInputEnvelope
    set?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    disconnect?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    delete?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    connect?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    update?: PocketUpdateWithWhereUniqueWithoutUserInput | PocketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PocketUpdateManyWithWhereWithoutUserInput | PocketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PocketScalarWhereInput | PocketScalarWhereInput[]
  }

  export type CategoriesPerUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoriesPerUserCreateWithoutUserInput, CategoriesPerUserUncheckedCreateWithoutUserInput> | CategoriesPerUserCreateWithoutUserInput[] | CategoriesPerUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutUserInput | CategoriesPerUserCreateOrConnectWithoutUserInput[]
    upsert?: CategoriesPerUserUpsertWithWhereUniqueWithoutUserInput | CategoriesPerUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoriesPerUserCreateManyUserInputEnvelope
    set?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    disconnect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    delete?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    update?: CategoriesPerUserUpdateWithWhereUniqueWithoutUserInput | CategoriesPerUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoriesPerUserUpdateManyWithWhereWithoutUserInput | CategoriesPerUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoriesPerUserScalarWhereInput | CategoriesPerUserScalarWhereInput[]
  }

  export type PersonBadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonBadgeCreateWithoutUserInput, PersonBadgeUncheckedCreateWithoutUserInput> | PersonBadgeCreateWithoutUserInput[] | PersonBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutUserInput | PersonBadgeCreateOrConnectWithoutUserInput[]
    upsert?: PersonBadgeUpsertWithWhereUniqueWithoutUserInput | PersonBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonBadgeCreateManyUserInputEnvelope
    set?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    disconnect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    delete?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    update?: PersonBadgeUpdateWithWhereUniqueWithoutUserInput | PersonBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonBadgeUpdateManyWithWhereWithoutUserInput | PersonBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonBadgeScalarWhereInput | PersonBadgeScalarWhereInput[]
  }

  export type PocketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PocketCreateWithoutUserInput, PocketUncheckedCreateWithoutUserInput> | PocketCreateWithoutUserInput[] | PocketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PocketCreateOrConnectWithoutUserInput | PocketCreateOrConnectWithoutUserInput[]
    upsert?: PocketUpsertWithWhereUniqueWithoutUserInput | PocketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PocketCreateManyUserInputEnvelope
    set?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    disconnect?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    delete?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    connect?: PocketWhereUniqueInput | PocketWhereUniqueInput[]
    update?: PocketUpdateWithWhereUniqueWithoutUserInput | PocketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PocketUpdateManyWithWhereWithoutUserInput | PocketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PocketScalarWhereInput | PocketScalarWhereInput[]
  }

  export type CategoriesPerUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoriesPerUserCreateWithoutUserInput, CategoriesPerUserUncheckedCreateWithoutUserInput> | CategoriesPerUserCreateWithoutUserInput[] | CategoriesPerUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutUserInput | CategoriesPerUserCreateOrConnectWithoutUserInput[]
    upsert?: CategoriesPerUserUpsertWithWhereUniqueWithoutUserInput | CategoriesPerUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoriesPerUserCreateManyUserInputEnvelope
    set?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    disconnect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    delete?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    update?: CategoriesPerUserUpdateWithWhereUniqueWithoutUserInput | CategoriesPerUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoriesPerUserUpdateManyWithWhereWithoutUserInput | CategoriesPerUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoriesPerUserScalarWhereInput | CategoriesPerUserScalarWhereInput[]
  }

  export type PersonBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<PersonBadgeCreateWithoutBadgeInput, PersonBadgeUncheckedCreateWithoutBadgeInput> | PersonBadgeCreateWithoutBadgeInput[] | PersonBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutBadgeInput | PersonBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: PersonBadgeCreateManyBadgeInputEnvelope
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
  }

  export type PersonBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<PersonBadgeCreateWithoutBadgeInput, PersonBadgeUncheckedCreateWithoutBadgeInput> | PersonBadgeCreateWithoutBadgeInput[] | PersonBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutBadgeInput | PersonBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: PersonBadgeCreateManyBadgeInputEnvelope
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
  }

  export type PersonBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<PersonBadgeCreateWithoutBadgeInput, PersonBadgeUncheckedCreateWithoutBadgeInput> | PersonBadgeCreateWithoutBadgeInput[] | PersonBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutBadgeInput | PersonBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: PersonBadgeUpsertWithWhereUniqueWithoutBadgeInput | PersonBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: PersonBadgeCreateManyBadgeInputEnvelope
    set?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    disconnect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    delete?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    update?: PersonBadgeUpdateWithWhereUniqueWithoutBadgeInput | PersonBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: PersonBadgeUpdateManyWithWhereWithoutBadgeInput | PersonBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: PersonBadgeScalarWhereInput | PersonBadgeScalarWhereInput[]
  }

  export type PersonBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<PersonBadgeCreateWithoutBadgeInput, PersonBadgeUncheckedCreateWithoutBadgeInput> | PersonBadgeCreateWithoutBadgeInput[] | PersonBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: PersonBadgeCreateOrConnectWithoutBadgeInput | PersonBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: PersonBadgeUpsertWithWhereUniqueWithoutBadgeInput | PersonBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: PersonBadgeCreateManyBadgeInputEnvelope
    set?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    disconnect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    delete?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    connect?: PersonBadgeWhereUniqueInput | PersonBadgeWhereUniqueInput[]
    update?: PersonBadgeUpdateWithWhereUniqueWithoutBadgeInput | PersonBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: PersonBadgeUpdateManyWithWhereWithoutBadgeInput | PersonBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: PersonBadgeScalarWhereInput | PersonBadgeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutUsersInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    upsert?: UserUpsertWithoutBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadgesInput, UserUpdateWithoutBadgesInput>, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type BadgeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    upsert?: BadgeUpsertWithoutUsersInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUsersInput, BadgeUpdateWithoutUsersInput>, BadgeUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutPocketsInput = {
    create?: XOR<UserCreateWithoutPocketsInput, UserUncheckedCreateWithoutPocketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPocketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPocketsNestedInput = {
    create?: XOR<UserCreateWithoutPocketsInput, UserUncheckedCreateWithoutPocketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPocketsInput
    upsert?: UserUpsertWithoutPocketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPocketsInput, UserUpdateWithoutPocketsInput>, UserUncheckedUpdateWithoutPocketsInput>
  }

  export type CategoriesPerUserCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoriesPerUserCreateWithoutCategoryInput, CategoriesPerUserUncheckedCreateWithoutCategoryInput> | CategoriesPerUserCreateWithoutCategoryInput[] | CategoriesPerUserUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutCategoryInput | CategoriesPerUserCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoriesPerUserCreateManyCategoryInputEnvelope
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
  }

  export type CategoriesPerUserUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoriesPerUserCreateWithoutCategoryInput, CategoriesPerUserUncheckedCreateWithoutCategoryInput> | CategoriesPerUserCreateWithoutCategoryInput[] | CategoriesPerUserUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutCategoryInput | CategoriesPerUserCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoriesPerUserCreateManyCategoryInputEnvelope
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
  }

  export type CategoriesPerUserUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoriesPerUserCreateWithoutCategoryInput, CategoriesPerUserUncheckedCreateWithoutCategoryInput> | CategoriesPerUserCreateWithoutCategoryInput[] | CategoriesPerUserUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutCategoryInput | CategoriesPerUserCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoriesPerUserUpsertWithWhereUniqueWithoutCategoryInput | CategoriesPerUserUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoriesPerUserCreateManyCategoryInputEnvelope
    set?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    disconnect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    delete?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    update?: CategoriesPerUserUpdateWithWhereUniqueWithoutCategoryInput | CategoriesPerUserUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoriesPerUserUpdateManyWithWhereWithoutCategoryInput | CategoriesPerUserUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoriesPerUserScalarWhereInput | CategoriesPerUserScalarWhereInput[]
  }

  export type CategoriesPerUserUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoriesPerUserCreateWithoutCategoryInput, CategoriesPerUserUncheckedCreateWithoutCategoryInput> | CategoriesPerUserCreateWithoutCategoryInput[] | CategoriesPerUserUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesPerUserCreateOrConnectWithoutCategoryInput | CategoriesPerUserCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoriesPerUserUpsertWithWhereUniqueWithoutCategoryInput | CategoriesPerUserUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoriesPerUserCreateManyCategoryInputEnvelope
    set?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    disconnect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    delete?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    connect?: CategoriesPerUserWhereUniqueInput | CategoriesPerUserWhereUniqueInput[]
    update?: CategoriesPerUserUpdateWithWhereUniqueWithoutCategoryInput | CategoriesPerUserUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoriesPerUserUpdateManyWithWhereWithoutCategoryInput | CategoriesPerUserUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoriesPerUserScalarWhereInput | CategoriesPerUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutUsersInput = {
    create?: XOR<CategoryCreateWithoutUsersInput, CategoryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUsersInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CategoryCreateWithoutUsersInput, CategoryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUsersInput
    upsert?: CategoryUpsertWithoutUsersInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutUsersInput, CategoryUpdateWithoutUsersInput>, CategoryUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PersonBadgeCreateWithoutUserInput = {
    badge: BadgeCreateNestedOneWithoutUsersInput
  }

  export type PersonBadgeUncheckedCreateWithoutUserInput = {
    badgeId: number
  }

  export type PersonBadgeCreateOrConnectWithoutUserInput = {
    where: PersonBadgeWhereUniqueInput
    create: XOR<PersonBadgeCreateWithoutUserInput, PersonBadgeUncheckedCreateWithoutUserInput>
  }

  export type PersonBadgeCreateManyUserInputEnvelope = {
    data: PersonBadgeCreateManyUserInput | PersonBadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PocketCreateWithoutUserInput = {
    id?: string
    name: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PocketUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PocketCreateOrConnectWithoutUserInput = {
    where: PocketWhereUniqueInput
    create: XOR<PocketCreateWithoutUserInput, PocketUncheckedCreateWithoutUserInput>
  }

  export type PocketCreateManyUserInputEnvelope = {
    data: PocketCreateManyUserInput | PocketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesPerUserCreateWithoutUserInput = {
    category: CategoryCreateNestedOneWithoutUsersInput
  }

  export type CategoriesPerUserUncheckedCreateWithoutUserInput = {
    categoryId: number
  }

  export type CategoriesPerUserCreateOrConnectWithoutUserInput = {
    where: CategoriesPerUserWhereUniqueInput
    create: XOR<CategoriesPerUserCreateWithoutUserInput, CategoriesPerUserUncheckedCreateWithoutUserInput>
  }

  export type CategoriesPerUserCreateManyUserInputEnvelope = {
    data: CategoriesPerUserCreateManyUserInput | CategoriesPerUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: PersonBadgeWhereUniqueInput
    update: XOR<PersonBadgeUpdateWithoutUserInput, PersonBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<PersonBadgeCreateWithoutUserInput, PersonBadgeUncheckedCreateWithoutUserInput>
  }

  export type PersonBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: PersonBadgeWhereUniqueInput
    data: XOR<PersonBadgeUpdateWithoutUserInput, PersonBadgeUncheckedUpdateWithoutUserInput>
  }

  export type PersonBadgeUpdateManyWithWhereWithoutUserInput = {
    where: PersonBadgeScalarWhereInput
    data: XOR<PersonBadgeUpdateManyMutationInput, PersonBadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type PersonBadgeScalarWhereInput = {
    AND?: PersonBadgeScalarWhereInput | PersonBadgeScalarWhereInput[]
    OR?: PersonBadgeScalarWhereInput[]
    NOT?: PersonBadgeScalarWhereInput | PersonBadgeScalarWhereInput[]
    userId?: StringFilter<"PersonBadge"> | string
    badgeId?: IntFilter<"PersonBadge"> | number
  }

  export type PocketUpsertWithWhereUniqueWithoutUserInput = {
    where: PocketWhereUniqueInput
    update: XOR<PocketUpdateWithoutUserInput, PocketUncheckedUpdateWithoutUserInput>
    create: XOR<PocketCreateWithoutUserInput, PocketUncheckedCreateWithoutUserInput>
  }

  export type PocketUpdateWithWhereUniqueWithoutUserInput = {
    where: PocketWhereUniqueInput
    data: XOR<PocketUpdateWithoutUserInput, PocketUncheckedUpdateWithoutUserInput>
  }

  export type PocketUpdateManyWithWhereWithoutUserInput = {
    where: PocketScalarWhereInput
    data: XOR<PocketUpdateManyMutationInput, PocketUncheckedUpdateManyWithoutUserInput>
  }

  export type PocketScalarWhereInput = {
    AND?: PocketScalarWhereInput | PocketScalarWhereInput[]
    OR?: PocketScalarWhereInput[]
    NOT?: PocketScalarWhereInput | PocketScalarWhereInput[]
    id?: StringFilter<"Pocket"> | string
    name?: StringFilter<"Pocket"> | string
    balance?: IntFilter<"Pocket"> | number
    createdAt?: DateTimeFilter<"Pocket"> | Date | string
    updatedAt?: DateTimeFilter<"Pocket"> | Date | string
    userId?: StringFilter<"Pocket"> | string
  }

  export type CategoriesPerUserUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoriesPerUserWhereUniqueInput
    update: XOR<CategoriesPerUserUpdateWithoutUserInput, CategoriesPerUserUncheckedUpdateWithoutUserInput>
    create: XOR<CategoriesPerUserCreateWithoutUserInput, CategoriesPerUserUncheckedCreateWithoutUserInput>
  }

  export type CategoriesPerUserUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoriesPerUserWhereUniqueInput
    data: XOR<CategoriesPerUserUpdateWithoutUserInput, CategoriesPerUserUncheckedUpdateWithoutUserInput>
  }

  export type CategoriesPerUserUpdateManyWithWhereWithoutUserInput = {
    where: CategoriesPerUserScalarWhereInput
    data: XOR<CategoriesPerUserUpdateManyMutationInput, CategoriesPerUserUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoriesPerUserScalarWhereInput = {
    AND?: CategoriesPerUserScalarWhereInput | CategoriesPerUserScalarWhereInput[]
    OR?: CategoriesPerUserScalarWhereInput[]
    NOT?: CategoriesPerUserScalarWhereInput | CategoriesPerUserScalarWhereInput[]
    userId?: StringFilter<"CategoriesPerUser"> | string
    categoryId?: IntFilter<"CategoriesPerUser"> | number
  }

  export type PersonBadgeCreateWithoutBadgeInput = {
    user: UserCreateNestedOneWithoutBadgesInput
  }

  export type PersonBadgeUncheckedCreateWithoutBadgeInput = {
    userId: string
  }

  export type PersonBadgeCreateOrConnectWithoutBadgeInput = {
    where: PersonBadgeWhereUniqueInput
    create: XOR<PersonBadgeCreateWithoutBadgeInput, PersonBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type PersonBadgeCreateManyBadgeInputEnvelope = {
    data: PersonBadgeCreateManyBadgeInput | PersonBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type PersonBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: PersonBadgeWhereUniqueInput
    update: XOR<PersonBadgeUpdateWithoutBadgeInput, PersonBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<PersonBadgeCreateWithoutBadgeInput, PersonBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type PersonBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: PersonBadgeWhereUniqueInput
    data: XOR<PersonBadgeUpdateWithoutBadgeInput, PersonBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type PersonBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: PersonBadgeScalarWhereInput
    data: XOR<PersonBadgeUpdateManyMutationInput, PersonBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserCreateWithoutBadgesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pockets?: PocketCreateNestedManyWithoutUserInput
    categories?: CategoriesPerUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pockets?: PocketUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoriesPerUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type BadgeCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutUsersInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutBadgesInput = {
    update: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type UserUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pockets?: PocketUpdateManyWithoutUserNestedInput
    categories?: CategoriesPerUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pockets?: PocketUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoriesPerUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeUpsertWithoutUsersInput = {
    update: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUsersInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
  }

  export type BadgeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPocketsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: PersonBadgeCreateNestedManyWithoutUserInput
    categories?: CategoriesPerUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPocketsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: PersonBadgeUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoriesPerUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPocketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPocketsInput, UserUncheckedCreateWithoutPocketsInput>
  }

  export type UserUpsertWithoutPocketsInput = {
    update: XOR<UserUpdateWithoutPocketsInput, UserUncheckedUpdateWithoutPocketsInput>
    create: XOR<UserCreateWithoutPocketsInput, UserUncheckedCreateWithoutPocketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPocketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPocketsInput, UserUncheckedUpdateWithoutPocketsInput>
  }

  export type UserUpdateWithoutPocketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: PersonBadgeUpdateManyWithoutUserNestedInput
    categories?: CategoriesPerUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPocketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: PersonBadgeUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoriesPerUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoriesPerUserCreateWithoutCategoryInput = {
    user: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoriesPerUserUncheckedCreateWithoutCategoryInput = {
    userId: string
  }

  export type CategoriesPerUserCreateOrConnectWithoutCategoryInput = {
    where: CategoriesPerUserWhereUniqueInput
    create: XOR<CategoriesPerUserCreateWithoutCategoryInput, CategoriesPerUserUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesPerUserCreateManyCategoryInputEnvelope = {
    data: CategoriesPerUserCreateManyCategoryInput | CategoriesPerUserCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesPerUserUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesPerUserWhereUniqueInput
    update: XOR<CategoriesPerUserUpdateWithoutCategoryInput, CategoriesPerUserUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoriesPerUserCreateWithoutCategoryInput, CategoriesPerUserUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesPerUserUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesPerUserWhereUniqueInput
    data: XOR<CategoriesPerUserUpdateWithoutCategoryInput, CategoriesPerUserUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoriesPerUserUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoriesPerUserScalarWhereInput
    data: XOR<CategoriesPerUserUpdateManyMutationInput, CategoriesPerUserUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: PersonBadgeCreateNestedManyWithoutUserInput
    pockets?: PocketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    token?: string | null
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: PersonBadgeUncheckedCreateNestedManyWithoutUserInput
    pockets?: PocketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutUsersInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutUsersInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUsersInput, CategoryUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: PersonBadgeUpdateManyWithoutUserNestedInput
    pockets?: PocketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: PersonBadgeUncheckedUpdateManyWithoutUserNestedInput
    pockets?: PocketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutUsersInput = {
    update: XOR<CategoryUpdateWithoutUsersInput, CategoryUncheckedUpdateWithoutUsersInput>
    create: XOR<CategoryCreateWithoutUsersInput, CategoryUncheckedCreateWithoutUsersInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutUsersInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutUsersInput, CategoryUncheckedUpdateWithoutUsersInput>
  }

  export type CategoryUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonBadgeCreateManyUserInput = {
    badgeId: number
  }

  export type PocketCreateManyUserInput = {
    id?: string
    name: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesPerUserCreateManyUserInput = {
    categoryId: number
  }

  export type PersonBadgeUpdateWithoutUserInput = {
    badge?: BadgeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type PersonBadgeUncheckedUpdateWithoutUserInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonBadgeUncheckedUpdateManyWithoutUserInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type PocketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PocketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PocketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesPerUserUpdateWithoutUserInput = {
    category?: CategoryUpdateOneRequiredWithoutUsersNestedInput
  }

  export type CategoriesPerUserUncheckedUpdateWithoutUserInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesPerUserUncheckedUpdateManyWithoutUserInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type PersonBadgeCreateManyBadgeInput = {
    userId: string
  }

  export type PersonBadgeUpdateWithoutBadgeInput = {
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type PersonBadgeUncheckedUpdateWithoutBadgeInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonBadgeUncheckedUpdateManyWithoutBadgeInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesPerUserCreateManyCategoryInput = {
    userId: string
  }

  export type CategoriesPerUserUpdateWithoutCategoryInput = {
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoriesPerUserUncheckedUpdateWithoutCategoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesPerUserUncheckedUpdateManyWithoutCategoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}