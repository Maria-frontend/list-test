import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../redux/actions";
import "./style.css";

const Planet = () => {
  const dispatch = useDispatch();
  const { rootList, details } = useSelector((state) => state);
  const { planet } = useParams();

  useEffect(() => {
    if (rootList) {
      const current = rootList.find((item) => item.name === planet);
      dispatch(getItem(current.url));
    }
  }, [rootList, planet, dispatch]);

  return details ? (
    <pre className="content">{JSON.stringify(details)}</pre>
  ) : null;
};

export default Planet;
