import { useEffect, useState } from "react";

type IFetchFunction<P, T> = {
  (params? : P) : Promise<T>
}

type IUseFetchResult<T>  = {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null
}

const useFetch =<T, P> (fetchFunction: IFetchFunction<P, T>, params?:P): IUseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};

export default useFetch;
