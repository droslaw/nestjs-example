export type Data = {
  type: string;
  data: string;
};

export type Result<TResult> = {
  result: TResult;
}

export interface Mapper<TResult> {
  handle(data: Data): Result<TResult>;
}
