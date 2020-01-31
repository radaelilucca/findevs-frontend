/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";

import api from "./services/api";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
import logo from "./assets/Logo3.png";

function App() {
  const [devs, setDevs] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs", {
        params: {
          page,
          limit: 6
        }
      });

      if (response.data.length) {
        setDevs(devs.concat(response.data));
        setLoadMore(true);
      } else {
        setLoadMore(false);
      }
    }

    loadDevs();
  }, [page]);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  async function handleInativeDev(data) {
    console.log(data);

    await api.put(`/devs/delete/${data}`);
    console.log(data.github_user);

    const filterDevs = devs.filter(dev => dev.github_user !== data.github_user);

    console.log(filterDevs);

    setDevs(filterDevs);
  }

  return (
    <div id="app">
      <aside>
        <img src={logo} alt="" />
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <InfiniteScroll
          dataLength={devs.length}
          next={() => {
            setPage(page + 1);
          }}
          hasMore={loadMore}
          loader={
            <div className="loader">
              <Loader
                type="Oval"
                color="#8979EE"
                height={50}
                width={50}
                timeout={50000} //3 secs
              />
            </div>
          }
        >
          <ul>
            {devs.map(dev => (
              <DevItem dev={dev} key={dev._id} deletar={handleInativeDev} />
            ))}
          </ul>
        </InfiniteScroll>
      </main>
    </div>
  );
}

export default App;
