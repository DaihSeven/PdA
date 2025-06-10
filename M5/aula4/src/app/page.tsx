"use client";
import { useState } from "react";
// import Header from "./components/header";
// import Menu from "./components/menu";

import Card from "./components/card";

export default function Home() {
  const [IsGreen, setIsGreen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-10 pl-8">
      {/* <Header
        width="100%"
        height="80px"
        bk_color="#f1f1f1"
        color="#212121"
        display="flex"
      >
        <p>LOGO</p>
        <p>Título</p>
        <Menu>
          <ul>
            <li>Menu</li>
            <li>Sobre</li>
          </ul>
        </Menu>
      </Header>
      <main>
        <h1>titulo da página</h1>
        <section></section>
      </main> */}

      <Card
        style={{
          width: "500px",
          height: "150px",
          backgroundColor: "#f1f1f1",
          color: "#212121",
        }}
      >
        <h2>
          CARD sem estilização onclick
        </h2>
      </Card>

      <Card
        style={{
          width: "500px",
          height: "150px",
          backgroundColor: "#f1f1f1",
          color: "#212121",
        }}
      >
        <h2>
          CARD sem estilização onclick
        </h2>
      </Card>

      <Card
        style={{
          width: "500px",
          height: "150px",
          backgroundColor: "#f1f1f1",
          color: "#212121",
        }}
      >
        <h2>
          CARD sem estilização onclick
        </h2>
      </Card>

      <Card
        style={{
          width: "500px",
          height: "150px",
          backgroundColor: IsGreen ? "#FF0000" : "#f1f1f1",
          color: "#212121",
        }}
      >
        <h2>
          CARD com estilização onclick
        </h2>
      </Card>

      <Card
        style={{
          width: "500px",
          height: "150px",
          backgroundColor: IsGreen ? "#00FF00" : "#f1f1f1",
          color: "#212121",
        }}
      >
        <h2>
          CARD com estilização onclick e botão
        </h2>
        <button
          onClick={() => setIsGreen(true)}
          className="bg-amber-950 text-white p-2 rounded-2xl"
        >
          Tornar Verde
        </button>
      </Card>
    </div>
  );
}