// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const App = () => {
  const [item, setitem] = useState([]);
  const [loading, setloading] = useState(false);

  const url = "https://dummyjson.com/products";

  const getData = async () => {
    const data = await fetch(url);
    setloading(true);
    const response = await data.json();
    // console.log(response.products);
    setitem(response.products);
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  }
  return (
    <>
      <div className="col-lg-12">
        <div className=" row -flex justify-content-between ">
          {item.map((singleitem) => {
            return (
              <>
                {/* <h6>================</h6> */}
                <div
                  className="card col-lg-4 m-auto d-grid mt-5 pt-2"
                  style={{ height: "300px", overflowY: "scroll" }}
                >
                  <img
                    style={{ height: "15rem" }}
                    src={singleitem.thumbnail}
                    className="w-100 m-auto border  border-2 bg-light object-fit-contain"
                  />
                  <div className="card-body w-75 m-auto">
                    <h5 className="card-title text-center">
                      {" "}
                      {singleitem.title}
                    </h5>
                    <p className="card-text w-100 btn btn-warning text-center ">
                      RS/: {singleitem.price}
                    </p>
                    <p className="card-text w-100">{singleitem.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
