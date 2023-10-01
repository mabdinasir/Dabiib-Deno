
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Hospital
 * 
 */
export type Hospital = {
  id: string
  name: string
}

/**
 * Model Doctor
 * 
 */
export type Doctor = {
  id: string
  name: string
}

/**
 * Model Schedule
 * 
 */
export type Schedule = {
  id: string
  startTime: Date
  endTime: Date
  doctorId: string
  hospitalId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hospitals
 * const hospitals = await prisma.hospital.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Hospitals
   * const hospitals = await prisma.hospital.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<GlobalReject>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<GlobalReject>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Hospital: 'Hospital',
    Doctor: 'Doctor',
    Schedule: 'Schedule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HospitalCountOutputType
   */


  export type HospitalCountOutputType = {
    doctors: number
    schedules: number
  }

  export type HospitalCountOutputTypeSelect = {
    doctors?: boolean
    schedules?: boolean
  }

  export type HospitalCountOutputTypeGetPayload<S extends boolean | null | undefined | HospitalCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HospitalCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HospitalCountOutputTypeArgs)
    ? HospitalCountOutputType 
    : S extends { select: any } & (HospitalCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HospitalCountOutputType ? HospitalCountOutputType[P] : never
  } 
      : HospitalCountOutputType




  // Custom InputTypes

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect | null
  }



  /**
   * Count Type DoctorCountOutputType
   */


  export type DoctorCountOutputType = {
    hospitals: number
    schedules: number
  }

  export type DoctorCountOutputTypeSelect = {
    hospitals?: boolean
    schedules?: boolean
  }

  export type DoctorCountOutputTypeGetPayload<S extends boolean | null | undefined | DoctorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DoctorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DoctorCountOutputTypeArgs)
    ? DoctorCountOutputType 
    : S extends { select: any } & (DoctorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DoctorCountOutputType ? DoctorCountOutputType[P] : never
  } 
      : DoctorCountOutputType




  // Custom InputTypes

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Hospital
   */


  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HospitalAggregateArgs = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Enumerable<HospitalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs = {
    where?: HospitalWhereInput
    orderBy?: Enumerable<HospitalOrderByWithAggregationInput>
    by: HospitalScalarFieldEnum[]
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }


  export type HospitalGroupByOutputType = {
    id: string
    name: string
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect = {
    id?: boolean
    name?: boolean
    doctors?: boolean | Hospital$doctorsArgs
    schedules?: boolean | Hospital$schedulesArgs
    _count?: boolean | HospitalCountOutputTypeArgs
  }


  export type HospitalInclude = {
    doctors?: boolean | Hospital$doctorsArgs
    schedules?: boolean | Hospital$schedulesArgs
    _count?: boolean | HospitalCountOutputTypeArgs
  }

  export type HospitalGetPayload<S extends boolean | null | undefined | HospitalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Hospital :
    S extends undefined ? never :
    S extends { include: any } & (HospitalArgs | HospitalFindManyArgs)
    ? Hospital  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'doctors' ? Array < DoctorGetPayload<S['include'][P]>>  :
        P extends 'schedules' ? Array < ScheduleGetPayload<S['include'][P]>>  :
        P extends '_count' ? HospitalCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HospitalArgs | HospitalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'doctors' ? Array < DoctorGetPayload<S['select'][P]>>  :
        P extends 'schedules' ? Array < ScheduleGetPayload<S['select'][P]>>  :
        P extends '_count' ? HospitalCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Hospital ? Hospital[P] : never
  } 
      : Hospital


  type HospitalCountArgs = 
    Omit<HospitalFindManyArgs, 'select' | 'include'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HospitalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HospitalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Hospital'> extends True ? Prisma__HospitalClient<HospitalGetPayload<T>> : Prisma__HospitalClient<HospitalGetPayload<T> | null, null>

    /**
     * Find one Hospital that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HospitalFindUniqueOrThrowArgs>
    ): Prisma__HospitalClient<HospitalGetPayload<T>>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HospitalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HospitalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Hospital'> extends True ? Prisma__HospitalClient<HospitalGetPayload<T>> : Prisma__HospitalClient<HospitalGetPayload<T> | null, null>

    /**
     * Find the first Hospital that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HospitalFindFirstOrThrowArgs>
    ): Prisma__HospitalClient<HospitalGetPayload<T>>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HospitalFindManyArgs>(
      args?: SelectSubset<T, HospitalFindManyArgs>
    ): Prisma.PrismaPromise<Array<HospitalGetPayload<T>>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
    **/
    create<T extends HospitalCreateArgs>(
      args: SelectSubset<T, HospitalCreateArgs>
    ): Prisma__HospitalClient<HospitalGetPayload<T>>

    /**
     * Create many Hospitals.
     *     @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     *     @example
     *     // Create many Hospitals
     *     const hospital = await prisma.hospital.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HospitalCreateManyArgs>(
      args?: SelectSubset<T, HospitalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
    **/
    delete<T extends HospitalDeleteArgs>(
      args: SelectSubset<T, HospitalDeleteArgs>
    ): Prisma__HospitalClient<HospitalGetPayload<T>>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HospitalUpdateArgs>(
      args: SelectSubset<T, HospitalUpdateArgs>
    ): Prisma__HospitalClient<HospitalGetPayload<T>>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HospitalDeleteManyArgs>(
      args?: SelectSubset<T, HospitalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HospitalUpdateManyArgs>(
      args: SelectSubset<T, HospitalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
    **/
    upsert<T extends HospitalUpsertArgs>(
      args: SelectSubset<T, HospitalUpsertArgs>
    ): Prisma__HospitalClient<HospitalGetPayload<T>>

    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HospitalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    doctors<T extends Hospital$doctorsArgs= {}>(args?: Subset<T, Hospital$doctorsArgs>): Prisma.PrismaPromise<Array<DoctorGetPayload<T>>| Null>;

    schedules<T extends Hospital$schedulesArgs= {}>(args?: Subset<T, Hospital$schedulesArgs>): Prisma.PrismaPromise<Array<ScheduleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Hospital base type for findUnique actions
   */
  export type HospitalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUnique
   */
  export interface HospitalFindUniqueArgs extends HospitalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital base type for findFirst actions
   */
  export type HospitalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Enumerable<HospitalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: Enumerable<HospitalScalarFieldEnum>
  }

  /**
   * Hospital findFirst
   */
  export interface HospitalFindFirstArgs extends HospitalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Enumerable<HospitalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: Enumerable<HospitalScalarFieldEnum>
  }


  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: Enumerable<HospitalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: Enumerable<HospitalScalarFieldEnum>
  }


  /**
   * Hospital create
   */
  export type HospitalCreateArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }


  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs = {
    /**
     * The data used to create many Hospitals.
     */
    data: Enumerable<HospitalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Hospital update
   */
  export type HospitalUpdateArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
  }


  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }


  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
  }


  /**
   * Hospital.doctors
   */
  export type Hospital$doctorsArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    where?: DoctorWhereInput
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Hospital.schedules
   */
  export type Hospital$schedulesArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    where?: ScheduleWhereInput
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }


  /**
   * Hospital without action
   */
  export type HospitalArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
  }



  /**
   * Model Doctor
   */


  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DoctorAggregateArgs = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs = {
    where?: DoctorWhereInput
    orderBy?: Enumerable<DoctorOrderByWithAggregationInput>
    by: DoctorScalarFieldEnum[]
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }


  export type DoctorGroupByOutputType = {
    id: string
    name: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect = {
    id?: boolean
    name?: boolean
    hospitals?: boolean | Doctor$hospitalsArgs
    schedules?: boolean | Doctor$schedulesArgs
    _count?: boolean | DoctorCountOutputTypeArgs
  }


  export type DoctorInclude = {
    hospitals?: boolean | Doctor$hospitalsArgs
    schedules?: boolean | Doctor$schedulesArgs
    _count?: boolean | DoctorCountOutputTypeArgs
  }

  export type DoctorGetPayload<S extends boolean | null | undefined | DoctorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Doctor :
    S extends undefined ? never :
    S extends { include: any } & (DoctorArgs | DoctorFindManyArgs)
    ? Doctor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'hospitals' ? Array < HospitalGetPayload<S['include'][P]>>  :
        P extends 'schedules' ? Array < ScheduleGetPayload<S['include'][P]>>  :
        P extends '_count' ? DoctorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DoctorArgs | DoctorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'hospitals' ? Array < HospitalGetPayload<S['select'][P]>>  :
        P extends 'schedules' ? Array < ScheduleGetPayload<S['select'][P]>>  :
        P extends '_count' ? DoctorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Doctor ? Doctor[P] : never
  } 
      : Doctor


  type DoctorCountArgs = 
    Omit<DoctorFindManyArgs, 'select' | 'include'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DoctorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Doctor'> extends True ? Prisma__DoctorClient<DoctorGetPayload<T>> : Prisma__DoctorClient<DoctorGetPayload<T> | null, null>

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindUniqueOrThrowArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DoctorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Doctor'> extends True ? Prisma__DoctorClient<DoctorGetPayload<T>> : Prisma__DoctorClient<DoctorGetPayload<T> | null, null>

    /**
     * Find the first Doctor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindFirstOrThrowArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DoctorFindManyArgs>(
      args?: SelectSubset<T, DoctorFindManyArgs>
    ): Prisma.PrismaPromise<Array<DoctorGetPayload<T>>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends DoctorCreateArgs>(
      args: SelectSubset<T, DoctorCreateArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Create many Doctors.
     *     @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorCreateManyArgs>(
      args?: SelectSubset<T, DoctorCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends DoctorDeleteArgs>(
      args: SelectSubset<T, DoctorDeleteArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorUpdateArgs>(
      args: SelectSubset<T, DoctorUpdateArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorDeleteManyArgs>(
      args?: SelectSubset<T, DoctorDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorUpdateManyArgs>(
      args: SelectSubset<T, DoctorUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorUpsertArgs>(
      args: SelectSubset<T, DoctorUpsertArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DoctorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    hospitals<T extends Doctor$hospitalsArgs= {}>(args?: Subset<T, Doctor$hospitalsArgs>): Prisma.PrismaPromise<Array<HospitalGetPayload<T>>| Null>;

    schedules<T extends Doctor$schedulesArgs= {}>(args?: Subset<T, Doctor$schedulesArgs>): Prisma.PrismaPromise<Array<ScheduleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Doctor base type for findUnique actions
   */
  export type DoctorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUnique
   */
  export interface DoctorFindUniqueArgs extends DoctorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor base type for findFirst actions
   */
  export type DoctorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }

  /**
   * Doctor findFirst
   */
  export interface DoctorFindFirstArgs extends DoctorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor create
   */
  export type DoctorCreateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }


  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs = {
    /**
     * The data used to create many Doctors.
     */
    data: Enumerable<DoctorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Doctor update
   */
  export type DoctorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }


  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor.hospitals
   */
  export type Doctor$hospitalsArgs = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude | null
    where?: HospitalWhereInput
    orderBy?: Enumerable<HospitalOrderByWithRelationInput>
    cursor?: HospitalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HospitalScalarFieldEnum>
  }


  /**
   * Doctor.schedules
   */
  export type Doctor$schedulesArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    where?: ScheduleWhereInput
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }


  /**
   * Doctor without action
   */
  export type DoctorArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
  }



  /**
   * Model Schedule
   */


  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    doctorId: string | null
    hospitalId: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    doctorId: string | null
    hospitalId: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    doctorId: number
    hospitalId: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    doctorId?: true
    hospitalId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    doctorId?: true
    hospitalId?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    doctorId?: true
    hospitalId?: true
    _all?: true
  }

  export type ScheduleAggregateArgs = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs = {
    where?: ScheduleWhereInput
    orderBy?: Enumerable<ScheduleOrderByWithAggregationInput>
    by: ScheduleScalarFieldEnum[]
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }


  export type ScheduleGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date
    doctorId: string
    hospitalId: string
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    doctorId?: boolean
    hospitalId?: boolean
    doctor?: boolean | DoctorArgs
    hospital?: boolean | HospitalArgs
  }


  export type ScheduleInclude = {
    doctor?: boolean | DoctorArgs
    hospital?: boolean | HospitalArgs
  }

  export type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Schedule :
    S extends undefined ? never :
    S extends { include: any } & (ScheduleArgs | ScheduleFindManyArgs)
    ? Schedule  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'doctor' ? DoctorGetPayload<S['include'][P]> :
        P extends 'hospital' ? HospitalGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ScheduleArgs | ScheduleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'doctor' ? DoctorGetPayload<S['select'][P]> :
        P extends 'hospital' ? HospitalGetPayload<S['select'][P]> :  P extends keyof Schedule ? Schedule[P] : never
  } 
      : Schedule


  type ScheduleCountArgs = 
    Omit<ScheduleFindManyArgs, 'select' | 'include'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScheduleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ScheduleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Schedule'> extends True ? Prisma__ScheduleClient<ScheduleGetPayload<T>> : Prisma__ScheduleClient<ScheduleGetPayload<T> | null, null>

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ScheduleFindUniqueOrThrowArgs>
    ): Prisma__ScheduleClient<ScheduleGetPayload<T>>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScheduleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ScheduleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Schedule'> extends True ? Prisma__ScheduleClient<ScheduleGetPayload<T>> : Prisma__ScheduleClient<ScheduleGetPayload<T> | null, null>

    /**
     * Find the first Schedule that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs>
    ): Prisma__ScheduleClient<ScheduleGetPayload<T>>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScheduleFindManyArgs>(
      args?: SelectSubset<T, ScheduleFindManyArgs>
    ): Prisma.PrismaPromise<Array<ScheduleGetPayload<T>>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
    **/
    create<T extends ScheduleCreateArgs>(
      args: SelectSubset<T, ScheduleCreateArgs>
    ): Prisma__ScheduleClient<ScheduleGetPayload<T>>

    /**
     * Create many Schedules.
     *     @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScheduleCreateManyArgs>(
      args?: SelectSubset<T, ScheduleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
    **/
    delete<T extends ScheduleDeleteArgs>(
      args: SelectSubset<T, ScheduleDeleteArgs>
    ): Prisma__ScheduleClient<ScheduleGetPayload<T>>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScheduleUpdateArgs>(
      args: SelectSubset<T, ScheduleUpdateArgs>
    ): Prisma__ScheduleClient<ScheduleGetPayload<T>>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScheduleDeleteManyArgs>(
      args?: SelectSubset<T, ScheduleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScheduleUpdateManyArgs>(
      args: SelectSubset<T, ScheduleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
    **/
    upsert<T extends ScheduleUpsertArgs>(
      args: SelectSubset<T, ScheduleUpsertArgs>
    ): Prisma__ScheduleClient<ScheduleGetPayload<T>>

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ScheduleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    doctor<T extends DoctorArgs= {}>(args?: Subset<T, DoctorArgs>): Prisma__DoctorClient<DoctorGetPayload<T> | Null>;

    hospital<T extends HospitalArgs= {}>(args?: Subset<T, HospitalArgs>): Prisma__HospitalClient<HospitalGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Schedule base type for findUnique actions
   */
  export type ScheduleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUnique
   */
  export interface ScheduleFindUniqueArgs extends ScheduleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule base type for findFirst actions
   */
  export type ScheduleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }

  /**
   * Schedule findFirst
   */
  export interface ScheduleFindFirstArgs extends ScheduleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }


  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }


  /**
   * Schedule create
   */
  export type ScheduleCreateArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }


  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs = {
    /**
     * The data used to create many Schedules.
     */
    data: Enumerable<ScheduleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
  }


  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }


  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
  }


  /**
   * Schedule without action
   */
  export type ScheduleArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScheduleInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    doctorId: 'doctorId',
    hospitalId: 'hospitalId'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type HospitalWhereInput = {
    AND?: Enumerable<HospitalWhereInput>
    OR?: Enumerable<HospitalWhereInput>
    NOT?: Enumerable<HospitalWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    doctors?: DoctorListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    doctors?: DoctorOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = {
    id?: string
  }

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HospitalScalarWhereWithAggregatesInput>
    OR?: Enumerable<HospitalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HospitalScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type DoctorWhereInput = {
    AND?: Enumerable<DoctorWhereInput>
    OR?: Enumerable<DoctorWhereInput>
    NOT?: Enumerable<DoctorWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    hospitals?: HospitalListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hospitals?: HospitalOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = {
    id?: string
  }

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    OR?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type ScheduleWhereInput = {
    AND?: Enumerable<ScheduleWhereInput>
    OR?: Enumerable<ScheduleWhereInput>
    NOT?: Enumerable<ScheduleWhereInput>
    id?: StringFilter | string
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    doctorId?: StringFilter | string
    hospitalId?: StringFilter | string
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
    hospital?: XOR<HospitalRelationFilter, HospitalWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = {
    id?: string
  }

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ScheduleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ScheduleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ScheduleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    startTime?: DateTimeWithAggregatesFilter | Date | string
    endTime?: DateTimeWithAggregatesFilter | Date | string
    doctorId?: StringWithAggregatesFilter | string
    hospitalId?: StringWithAggregatesFilter | string
  }

  export type HospitalCreateInput = {
    id?: string
    name: string
    doctors?: DoctorCreateNestedManyWithoutHospitalsInput
    schedules?: ScheduleCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: string
    name: string
    doctors?: DoctorUncheckedCreateNestedManyWithoutHospitalsInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    doctors?: DoctorUpdateManyWithoutHospitalsNestedInput
    schedules?: ScheduleUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    doctors?: DoctorUncheckedUpdateManyWithoutHospitalsNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: string
    name: string
  }

  export type HospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    id?: string
    name: string
    hospitals?: HospitalCreateNestedManyWithoutDoctorsInput
    schedules?: ScheduleCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    name: string
    hospitals?: HospitalUncheckedCreateNestedManyWithoutDoctorsInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hospitals?: HospitalUpdateManyWithoutDoctorsNestedInput
    schedules?: ScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hospitals?: HospitalUncheckedUpdateManyWithoutDoctorsNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    name: string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    doctor: DoctorCreateNestedOneWithoutSchedulesInput
    hospital: HospitalCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    doctorId: string
    hospitalId: string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutSchedulesNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    doctorId: string
    hospitalId: string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DoctorListRelationFilter = {
    every?: DoctorWhereInput
    some?: DoctorWhereInput
    none?: DoctorWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type DoctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type HospitalListRelationFilter = {
    every?: HospitalWhereInput
    some?: HospitalWhereInput
    none?: HospitalWhereInput
  }

  export type HospitalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DoctorRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type HospitalRelationFilter = {
    is?: HospitalWhereInput
    isNot?: HospitalWhereInput
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    doctorId?: SortOrder
    hospitalId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DoctorCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutHospitalsInput>, Enumerable<DoctorUncheckedCreateWithoutHospitalsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutHospitalsInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
  }

  export type ScheduleCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutHospitalInput>, Enumerable<ScheduleUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutHospitalInput>
    createMany?: ScheduleCreateManyHospitalInputEnvelope
    connect?: Enumerable<ScheduleWhereUniqueInput>
  }

  export type DoctorUncheckedCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutHospitalsInput>, Enumerable<DoctorUncheckedCreateWithoutHospitalsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutHospitalsInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
  }

  export type ScheduleUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutHospitalInput>, Enumerable<ScheduleUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutHospitalInput>
    createMany?: ScheduleCreateManyHospitalInputEnvelope
    connect?: Enumerable<ScheduleWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DoctorUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutHospitalsInput>, Enumerable<DoctorUncheckedCreateWithoutHospitalsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutHospitalsInput>
    upsert?: Enumerable<DoctorUpsertWithWhereUniqueWithoutHospitalsInput>
    set?: Enumerable<DoctorWhereUniqueInput>
    disconnect?: Enumerable<DoctorWhereUniqueInput>
    delete?: Enumerable<DoctorWhereUniqueInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
    update?: Enumerable<DoctorUpdateWithWhereUniqueWithoutHospitalsInput>
    updateMany?: Enumerable<DoctorUpdateManyWithWhereWithoutHospitalsInput>
    deleteMany?: Enumerable<DoctorScalarWhereInput>
  }

  export type ScheduleUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutHospitalInput>, Enumerable<ScheduleUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<ScheduleUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: ScheduleCreateManyHospitalInputEnvelope
    set?: Enumerable<ScheduleWhereUniqueInput>
    disconnect?: Enumerable<ScheduleWhereUniqueInput>
    delete?: Enumerable<ScheduleWhereUniqueInput>
    connect?: Enumerable<ScheduleWhereUniqueInput>
    update?: Enumerable<ScheduleUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<ScheduleUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<ScheduleScalarWhereInput>
  }

  export type DoctorUncheckedUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<Enumerable<DoctorCreateWithoutHospitalsInput>, Enumerable<DoctorUncheckedCreateWithoutHospitalsInput>>
    connectOrCreate?: Enumerable<DoctorCreateOrConnectWithoutHospitalsInput>
    upsert?: Enumerable<DoctorUpsertWithWhereUniqueWithoutHospitalsInput>
    set?: Enumerable<DoctorWhereUniqueInput>
    disconnect?: Enumerable<DoctorWhereUniqueInput>
    delete?: Enumerable<DoctorWhereUniqueInput>
    connect?: Enumerable<DoctorWhereUniqueInput>
    update?: Enumerable<DoctorUpdateWithWhereUniqueWithoutHospitalsInput>
    updateMany?: Enumerable<DoctorUpdateManyWithWhereWithoutHospitalsInput>
    deleteMany?: Enumerable<DoctorScalarWhereInput>
  }

  export type ScheduleUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutHospitalInput>, Enumerable<ScheduleUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<ScheduleUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: ScheduleCreateManyHospitalInputEnvelope
    set?: Enumerable<ScheduleWhereUniqueInput>
    disconnect?: Enumerable<ScheduleWhereUniqueInput>
    delete?: Enumerable<ScheduleWhereUniqueInput>
    connect?: Enumerable<ScheduleWhereUniqueInput>
    update?: Enumerable<ScheduleUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<ScheduleUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<ScheduleScalarWhereInput>
  }

  export type HospitalCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<Enumerable<HospitalCreateWithoutDoctorsInput>, Enumerable<HospitalUncheckedCreateWithoutDoctorsInput>>
    connectOrCreate?: Enumerable<HospitalCreateOrConnectWithoutDoctorsInput>
    connect?: Enumerable<HospitalWhereUniqueInput>
  }

  export type ScheduleCreateNestedManyWithoutDoctorInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutDoctorInput>, Enumerable<ScheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutDoctorInput>
    createMany?: ScheduleCreateManyDoctorInputEnvelope
    connect?: Enumerable<ScheduleWhereUniqueInput>
  }

  export type HospitalUncheckedCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<Enumerable<HospitalCreateWithoutDoctorsInput>, Enumerable<HospitalUncheckedCreateWithoutDoctorsInput>>
    connectOrCreate?: Enumerable<HospitalCreateOrConnectWithoutDoctorsInput>
    connect?: Enumerable<HospitalWhereUniqueInput>
  }

  export type ScheduleUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutDoctorInput>, Enumerable<ScheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutDoctorInput>
    createMany?: ScheduleCreateManyDoctorInputEnvelope
    connect?: Enumerable<ScheduleWhereUniqueInput>
  }

  export type HospitalUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<Enumerable<HospitalCreateWithoutDoctorsInput>, Enumerable<HospitalUncheckedCreateWithoutDoctorsInput>>
    connectOrCreate?: Enumerable<HospitalCreateOrConnectWithoutDoctorsInput>
    upsert?: Enumerable<HospitalUpsertWithWhereUniqueWithoutDoctorsInput>
    set?: Enumerable<HospitalWhereUniqueInput>
    disconnect?: Enumerable<HospitalWhereUniqueInput>
    delete?: Enumerable<HospitalWhereUniqueInput>
    connect?: Enumerable<HospitalWhereUniqueInput>
    update?: Enumerable<HospitalUpdateWithWhereUniqueWithoutDoctorsInput>
    updateMany?: Enumerable<HospitalUpdateManyWithWhereWithoutDoctorsInput>
    deleteMany?: Enumerable<HospitalScalarWhereInput>
  }

  export type ScheduleUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutDoctorInput>, Enumerable<ScheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutDoctorInput>
    upsert?: Enumerable<ScheduleUpsertWithWhereUniqueWithoutDoctorInput>
    createMany?: ScheduleCreateManyDoctorInputEnvelope
    set?: Enumerable<ScheduleWhereUniqueInput>
    disconnect?: Enumerable<ScheduleWhereUniqueInput>
    delete?: Enumerable<ScheduleWhereUniqueInput>
    connect?: Enumerable<ScheduleWhereUniqueInput>
    update?: Enumerable<ScheduleUpdateWithWhereUniqueWithoutDoctorInput>
    updateMany?: Enumerable<ScheduleUpdateManyWithWhereWithoutDoctorInput>
    deleteMany?: Enumerable<ScheduleScalarWhereInput>
  }

  export type HospitalUncheckedUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<Enumerable<HospitalCreateWithoutDoctorsInput>, Enumerable<HospitalUncheckedCreateWithoutDoctorsInput>>
    connectOrCreate?: Enumerable<HospitalCreateOrConnectWithoutDoctorsInput>
    upsert?: Enumerable<HospitalUpsertWithWhereUniqueWithoutDoctorsInput>
    set?: Enumerable<HospitalWhereUniqueInput>
    disconnect?: Enumerable<HospitalWhereUniqueInput>
    delete?: Enumerable<HospitalWhereUniqueInput>
    connect?: Enumerable<HospitalWhereUniqueInput>
    update?: Enumerable<HospitalUpdateWithWhereUniqueWithoutDoctorsInput>
    updateMany?: Enumerable<HospitalUpdateManyWithWhereWithoutDoctorsInput>
    deleteMany?: Enumerable<HospitalScalarWhereInput>
  }

  export type ScheduleUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutDoctorInput>, Enumerable<ScheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutDoctorInput>
    upsert?: Enumerable<ScheduleUpsertWithWhereUniqueWithoutDoctorInput>
    createMany?: ScheduleCreateManyDoctorInputEnvelope
    set?: Enumerable<ScheduleWhereUniqueInput>
    disconnect?: Enumerable<ScheduleWhereUniqueInput>
    delete?: Enumerable<ScheduleWhereUniqueInput>
    connect?: Enumerable<ScheduleWhereUniqueInput>
    update?: Enumerable<ScheduleUpdateWithWhereUniqueWithoutDoctorInput>
    updateMany?: Enumerable<ScheduleUpdateManyWithWhereWithoutDoctorInput>
    deleteMany?: Enumerable<ScheduleScalarWhereInput>
  }

  export type DoctorCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSchedulesInput
    connect?: DoctorWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<HospitalCreateWithoutSchedulesInput, HospitalUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutSchedulesInput
    connect?: HospitalWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DoctorUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSchedulesInput
    upsert?: DoctorUpsertWithoutSchedulesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<DoctorUpdateWithoutSchedulesInput, DoctorUncheckedUpdateWithoutSchedulesInput>
  }

  export type HospitalUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<HospitalCreateWithoutSchedulesInput, HospitalUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutSchedulesInput
    upsert?: HospitalUpsertWithoutSchedulesInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<HospitalUpdateWithoutSchedulesInput, HospitalUncheckedUpdateWithoutSchedulesInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DoctorCreateWithoutHospitalsInput = {
    id?: string
    name: string
    schedules?: ScheduleCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutHospitalsInput = {
    id?: string
    name: string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutHospitalsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutHospitalsInput, DoctorUncheckedCreateWithoutHospitalsInput>
  }

  export type ScheduleCreateWithoutHospitalInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    doctor: DoctorCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutHospitalInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    doctorId: string
  }

  export type ScheduleCreateOrConnectWithoutHospitalInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutHospitalInput, ScheduleUncheckedCreateWithoutHospitalInput>
  }

  export type ScheduleCreateManyHospitalInputEnvelope = {
    data: Enumerable<ScheduleCreateManyHospitalInput>
    skipDuplicates?: boolean
  }

  export type DoctorUpsertWithWhereUniqueWithoutHospitalsInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutHospitalsInput, DoctorUncheckedUpdateWithoutHospitalsInput>
    create: XOR<DoctorCreateWithoutHospitalsInput, DoctorUncheckedCreateWithoutHospitalsInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutHospitalsInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutHospitalsInput, DoctorUncheckedUpdateWithoutHospitalsInput>
  }

  export type DoctorUpdateManyWithWhereWithoutHospitalsInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutDoctorsInput>
  }

  export type DoctorScalarWhereInput = {
    AND?: Enumerable<DoctorScalarWhereInput>
    OR?: Enumerable<DoctorScalarWhereInput>
    NOT?: Enumerable<DoctorScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutHospitalInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutHospitalInput, ScheduleUncheckedUpdateWithoutHospitalInput>
    create: XOR<ScheduleCreateWithoutHospitalInput, ScheduleUncheckedCreateWithoutHospitalInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutHospitalInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutHospitalInput, ScheduleUncheckedUpdateWithoutHospitalInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutHospitalInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutSchedulesInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: Enumerable<ScheduleScalarWhereInput>
    OR?: Enumerable<ScheduleScalarWhereInput>
    NOT?: Enumerable<ScheduleScalarWhereInput>
    id?: StringFilter | string
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    doctorId?: StringFilter | string
    hospitalId?: StringFilter | string
  }

  export type HospitalCreateWithoutDoctorsInput = {
    id?: string
    name: string
    schedules?: ScheduleCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutDoctorsInput = {
    id?: string
    name: string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutDoctorsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutDoctorsInput, HospitalUncheckedCreateWithoutDoctorsInput>
  }

  export type ScheduleCreateWithoutDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    hospital: HospitalCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    hospitalId: string
  }

  export type ScheduleCreateOrConnectWithoutDoctorInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDoctorInput, ScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type ScheduleCreateManyDoctorInputEnvelope = {
    data: Enumerable<ScheduleCreateManyDoctorInput>
    skipDuplicates?: boolean
  }

  export type HospitalUpsertWithWhereUniqueWithoutDoctorsInput = {
    where: HospitalWhereUniqueInput
    update: XOR<HospitalUpdateWithoutDoctorsInput, HospitalUncheckedUpdateWithoutDoctorsInput>
    create: XOR<HospitalCreateWithoutDoctorsInput, HospitalUncheckedCreateWithoutDoctorsInput>
  }

  export type HospitalUpdateWithWhereUniqueWithoutDoctorsInput = {
    where: HospitalWhereUniqueInput
    data: XOR<HospitalUpdateWithoutDoctorsInput, HospitalUncheckedUpdateWithoutDoctorsInput>
  }

  export type HospitalUpdateManyWithWhereWithoutDoctorsInput = {
    where: HospitalScalarWhereInput
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyWithoutHospitalsInput>
  }

  export type HospitalScalarWhereInput = {
    AND?: Enumerable<HospitalScalarWhereInput>
    OR?: Enumerable<HospitalScalarWhereInput>
    NOT?: Enumerable<HospitalScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutDoctorInput, ScheduleUncheckedUpdateWithoutDoctorInput>
    create: XOR<ScheduleCreateWithoutDoctorInput, ScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutDoctorInput, ScheduleUncheckedUpdateWithoutDoctorInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutDoctorInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutSchedulesInput>
  }

  export type DoctorCreateWithoutSchedulesInput = {
    id?: string
    name: string
    hospitals?: HospitalCreateNestedManyWithoutDoctorsInput
  }

  export type DoctorUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    hospitals?: HospitalUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type DoctorCreateOrConnectWithoutSchedulesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
  }

  export type HospitalCreateWithoutSchedulesInput = {
    id?: string
    name: string
    doctors?: DoctorCreateNestedManyWithoutHospitalsInput
  }

  export type HospitalUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    doctors?: DoctorUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type HospitalCreateOrConnectWithoutSchedulesInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutSchedulesInput, HospitalUncheckedCreateWithoutSchedulesInput>
  }

  export type DoctorUpsertWithoutSchedulesInput = {
    update: XOR<DoctorUpdateWithoutSchedulesInput, DoctorUncheckedUpdateWithoutSchedulesInput>
    create: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
  }

  export type DoctorUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hospitals?: HospitalUpdateManyWithoutDoctorsNestedInput
  }

  export type DoctorUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hospitals?: HospitalUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type HospitalUpsertWithoutSchedulesInput = {
    update: XOR<HospitalUpdateWithoutSchedulesInput, HospitalUncheckedUpdateWithoutSchedulesInput>
    create: XOR<HospitalCreateWithoutSchedulesInput, HospitalUncheckedCreateWithoutSchedulesInput>
  }

  export type HospitalUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    doctors?: DoctorUpdateManyWithoutHospitalsNestedInput
  }

  export type HospitalUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    doctors?: DoctorUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type ScheduleCreateManyHospitalInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    doctorId: string
  }

  export type DoctorUpdateWithoutHospitalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutHospitalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateManyWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateManyDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    hospitalId: string
  }

  export type HospitalUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateManyWithoutHospitalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    hospitalId?: StringFieldUpdateOperationsInput | string
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