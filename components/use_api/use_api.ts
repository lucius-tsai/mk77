import React, { useEffect, useState } from "react";

import { ApiComponentProps } from "./api_component.types";
import connect from "@/utils/connect";
// styles
import classNames from "classnames/bind";
import styles from "./api_component.module.scss";

// variables
const cx = classNames.bind(styles);

// component(s)
const useApi = () => {
  const [data, setData] = useState<{
    title: string;
    imageUrl: string;
    description: string;
  }>();
  useEffect(() => {
    let isMount = true;
    connect
      .get("/api/books", { id: 1 })
      .then((res) => res.data)
      .then((res) => {
        if (isMount) {
          setData(res);
        }
      });
    return () => {
      isMount = false;
    };
  }, []);
  return data;
};

// export
export default useApi;

export { useApi };
