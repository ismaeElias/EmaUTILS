import React, {useEffect} from "react";
import { ContainerItem, Item, Version } from "./styles";

function handlerStyle() {
  const path = window.location.pathname.replace('/','');
  let Item = document.getElementsByName(path);

  if (Item[0]) {
    Item[0].style.transition = "none";
    Item[0].style.borderLeft = "5px solid var(--main-color)";
    Item[0].style.color = "var(--main-color)";
    Item[0].style.backgroundColor = "var(--main-bg-selected)";
  }
}



function ItemNavbar() {
  
  const TitleConcatenador = "<C>";
  const Versao = "v0.1";

 
 useEffect(()=>{
  handlerStyle();
 },[]);
 
  return (
    <ContainerItem>
      <Item to="/Concatenador" id="1" name="Concatenador">
        {TitleConcatenador}
      </Item>
      <Version >{Versao}</Version>
    </ContainerItem>
  );
}

export default ItemNavbar;
