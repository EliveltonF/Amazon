import '../design/appbar.css';
function appBar() {
   return (
      <div className="appbar">
         <div className="appBarTop">
               <div className="appBarTop1">Amazon</div>
               <div className="appBarTop1" id="enviar">Enviar Para<br/>Brasil</div>
               <div className="appBarTop1"id="sem"><input className="inputt"></input><div className="icon"></div></div>
               <div className="appBarTop1" id="login">Olá, Faça seu login<br/> Contas e Listas</div>
               <div className="appBarTop1" id="devolução">Devoluções<br/>e Pedidos</div>
               <div className="appBarTop1" id="carrinho"><span id="carrinhoIcon">🛒</span>Carrinho</div>
         </div>
         <div className="appBarBottom">
            <div className="inicial">
            <p className="appBarBottom1">X Todos</p>
            <p className="appBarBottom1">Ofertas do dia</p>
            <p className="appBarBottom1">Atendimento ao Cliente</p>
            <p className="appBarBottom1">Minhas listas</p>
            <p className="appBarBottom1">Vales-presente</p>
            <p className="appBarBottom1">Vender</p>
            </div>
            <p id="black"className="appBarBottom1">Ofertas antecipadas da Black Friday</p>
         </div>
      </div>
   )
}

export default appBar;