import React, { useEffect, useState } from "react";

import { ApiComponentProps } from "./api_component.types";
import connect from "@/utils/connect";
// styles
import classNames from "classnames/bind";
import styles from "./api_component.module.scss";

// variables
const cx = classNames.bind(styles);

// component(s)
const ApiComponent: React.FC<ApiComponentProps> = () => {
  const [data, setData] = useState<{
    title: string;
    imageUrl: string;
    description: string;
  }>();

  // useEffect(() => {
  //   let isMount = true;

  //   connect
  //     .get("http://localhost:3000/api/books", { id: 1 })
  //     .then((res) => res.data)
  //     .then((res) => {
  //       if (isMount) {
  //         setData(res);
  //       }
  //       return res;
  //     });
  //   // .catch((err) => console.log(err.data));
  //   return () => {
  //     isMount = false;
  //   };
  // }, []);
  return (
    <>
      {data && (
        <div>
          <h1 className={cx("api_component")} role="book_title">
            {data.title}
          </h1>
          <p role="desc">{data.description}</p>
          <p>
            <strong>{data.imageUrl}</strong>
          </p>
        </div>
      )}
    </>
  );
};

// export
export default ApiComponent;

export { ApiComponent };
