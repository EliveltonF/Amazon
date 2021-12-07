import "../design/main.css";
import api from '../api/index'
import React, { useEffect, useState } from "react";
function MainApp() {

   const [user, setUser] = useState();
   const [dadoslista, setDadosLista] = useState();
   const [lista, setLista] = useState();
   const [dados, setDado] = useState([]);


   //pegando dados dos quadrados do banco
   useEffect(() => {
      api
         .get("dados")
         .then((response) => setUser(response.data))
         .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
         });
   }, []);


   //pegando dados da lista do banco
   useEffect(() => {
      api
         .get("lista")
         .then((response) => setDadosLista(response.data))
         .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
         });
   }, []);

   var guardaListaUm = [] // armazena a primeira lista
   //atribuindo a primeira lista
   useEffect(() => {
      if (dadoslista != null) {
         for (var i = 0; i < dadoslista.length; i++) {
            console.log(dadoslista[i])
            guardaListaUm.push(
               <img className="imgLista" src={dadoslista[i].imagem}></img>
            )
         }
         setLista(guardaListaUm);
      }
   }, [dadoslista])
   var cons = [];//armazena os primeiros quadrados
   //atribuindo aos quadrados
   useEffect(() => {
      if (user != null) {
         for (var i = 0; i < user.length - 2; i++) {
            /*   console.log(i)
              console.log(user[i].img_card.length)
               var img = user[i].img_card.length > 300? user[i].img_card.split(','):console.log('a')
               console.log(img)
               */
            cons.push(
               <div className="teste">
                  <h1 className="TituloProd">{user[i].titulo_card}</h1>
                  <img className="imgProd" src={user[i].img_card}></img>
                  <a href="#" className="linkProd">{user[i].link_card}</a>
               </div>
            )
         }
         setDado(cons)
      }
   }, [user]
   )


   return (
      <>
         <main className="MainApp">
            <div className="slideInitial">
            </div>
            <div className="juntaTudo">
               <div className="quadradrosProdutos">
                  {dados}
               </div>
               <div className="barraProd">
                  <div className="infoLista"> <h1 className="h1Lista">Bichinhos de pelúcia e Brinquedos por menos de 10 USD</h1>
                     <a className="aLista">Compre agora</a></div>
                 <div className="guardaLista"> {lista}</div>
               </div>
               <div className="barraProd">
                  <div className="infoLista"> <h1 className="h1Lista">Bichinhos de pelúcia e Brinquedos por menos de 10 USD</h1>
                     <a className="aLista">Compre agora</a></div>
                 <div className="guardaLista"> {lista}</div>
               </div>
               
            </div>
         </main>
      </>
   )
}
export default MainApp;