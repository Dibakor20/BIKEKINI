import React, { useEffect, useState } from "react";
import { IProduct } from "../services/Type";

type StatusType = "idle" | "pending" | "success" | "error";

const UseAsync = (asyncFunction: () => Promise<any>) => {
  const [data, setData] = useState<IProduct | null>(null);
  const [status, setStatus] = useState<StatusType>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus("pending");
    setData(null);
    setError(null);
    asyncFunction()
      .then((res) => {
        setData(res);
        setStatus("success");
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
        setData(null);
      });
  }, [asyncFunction]);

    return {
        data,
        isLoading: status === 'pending',
        isSuccess: status === 'success',
        isError: status === 'error',
        error
    };
};

export default UseAsync;
