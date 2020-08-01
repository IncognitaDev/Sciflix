import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CadastroVideo from "./pages/Cadastro/Video";
import CadastroCategoria from "./pages/Cadastro/Categoria";

const page404 = () => {
  return <h1>Pagina não encontrada</h1>
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={page404} />
      </Switch>
    </BrowserRouter>
  );
}
