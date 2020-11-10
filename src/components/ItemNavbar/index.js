import React from "react";
import { ContainerItem, Item, Version } from "./styles";

function handlerStyle(id) {
  if (id) {
    let item = document.getElementById(id);
    item.style.borderLeft = "5px solid var(--main-color)";
    item.style.color = "var(--main-color)";
    item.style.backgroundColor = "var(--main-bg-selected)";
  }
}

function ItemNavbar() {
  
  const TitleConcatenador = "<C>";
  const Versao = "v0.1";

  return (
    <ContainerItem onClick={async (e) =>  handlerStyle(await e.target.id)}>
      <Item to="/Concatenador" id="1">
        {TitleConcatenador}
      </Item>
      <Version >{Versao}</Version>
    </ContainerItem>
  );
}

export default ItemNavbar;
