import '../design/appbar.css';
import React, { useState } from 'react';
const AppBar = () => {

   const [display, setDisplay] = useState('none');
   const [escuro, setEscuro] = useState("'brightness(1)'");
   const [caixaLogin, setCaixaLogin] = useState('none');
   return (
      <>
         <div className="appbar" style={{
            '-webkit-filter': escuro,
            '-moz-filter': escuro,
            '-o-filter': escuro,
            '-ms-filter': escuro,
            ' filter': escuro
         }}>
            <div className="appBarTop">
               <div className="appBarTop1"><img id="logo" src="https://www.pinclipart.com/picdir/big/57-576184_barber-clippers-clipart.png"></img></div>
               <div className="appBarTop1" id="enviar">Enviar Para<br />Brasil</div>
               <div className="appBarTop1" id="sem">
                  <select className="produtos" id="prod" name="prod">
                     <option>Artes e artesanato</option>
                     <option >Automotivos</option>
                     <option >Bebê</option>
                     <option >Beleza e cuidados pessoais</option>
                     <option >Computadores</option>
                     <option >Eletrônicos</option>
                     <option >Livros</option>
                     <option >Loja Kindle</option>
                     <option >Música em MP3</option>
                     <option >Prime Video</option>
                     <option >Moda feminina</option>
                     <option >Moda masculina</option>
                     <option >Moda infantil feminina</option>
                     <option >Moda infantil masculina</option>
                     <option >Artigos para animais de estimação</option>
                     <option >Bagagem</option>
                     <option >Brinquedos e Jogos</option>
                     <option >Casa e Cozinha</option>
                     <option >Esportes {'&'} atividades ao ar livre</option>
                     <option selected="selected">Todos os departamentos</option>
                     <option >Ferramentas e reforma da casa</option>
                     <option >Filmes e TV</option>
                     <option >Industrial e Científica</option>
                     <option >Lar e Saúde</option>
                     <option >Música, CDs e Vinil</option>
                     <option >Programa</option>
                     <option >Promoções e Ofertas</option>
                     <option >Videogames</option>
                  </select>
                  <input className="inputt" type="search"></input>
                  <div className="icon">
                     <img id="lupa" src="https://www.pinclipart.com/picdir/big/112-1123116_explore-find-look-magnifier-research-search-view-lupa.png"></img>
                  </div>
               </div>
               <div className="appBarTop1" id="login" onMouseLeave={() => tiraLogin()} onMouseEnter={() => mostraLogin()}>Olá, Faça seu login<br /> Contas e Listas</div>
               <div className="appBarTop1" id="devolução">Devoluções<br />e Pedidos</div>
               <div className="appBarTop1" id="carrinho"><span id="carrinhoIcon">🛒</span>Carrinho</div>
            </div>
            <div className="appBarBottom">
               <div className="inicial">
                  <p className="appBarBottom1" onClick={function () { ficaEscuro() }}><span id="barraTodos">≡ </span> Todos</p>
                  <p className="appBarBottom1">Ofertas do dia</p>
                  <p className="appBarBottom1">Atendimento ao Cliente</p>
                  <p className="appBarBottom1">Minhas listas</p>
                  <p className="appBarBottom1">Vales-presente</p>
                  <p className="appBarBottom1">Vender</p>
               </div>
               <p id="black" className="appBarBottom1">Ofertas antecipadas da Black Friday</p>
            </div>
         </div>

         <div className="barraLateral" style={{ display: display }}>
            <div className="barraAzul">
               <img id="userLogo" src='http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'></img>
               <p id="UserLogin">Olá, Faça seu login</p>
               <div className="fecha" onClick={function () { ficaClaro() }}>X</div>
            </div>
            <div className="principal">
               <div id="conteudo">

                  <h1 className="Titulo">Conteudo Digital e Dispositivos</h1>
                  <p className="dentroP">Amazon Music <img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">E-readers Kindle e livros <img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">Amazon Appstore <img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
               </div>
               <div id="comprar">

                  <h1 className="Titulo">Comprar Por Categoria</h1>
                  <p className="dentroP">Eletrônicos<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">Computadores<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">Alexa Smart Home<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">Artes e artesanato<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">Ver tudo<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
               </div>
               <div id="programas">

                  <h1 className="Titulo">Programas e Recursos</h1>
                  <p className="dentroP">Vales-presente <img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">#FoundltOnAmazon</p>
                  <p className="dentroP">Amazon Live<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">Compras Internacionais<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
                  <p className="dentroP">Ver Tudo<img id="flecha" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"></img></p>
               </div>
               <div id="ajuda">

                  <h1 className="Titulo">Ajuda e Configurações</h1>
                  <p className="dentroP">Sua Conta</p>
                  <p className="dentroP">Português</p>
                  <p className="dentroP">Estados Unidos</p>
                  <p className="dentroP">Customer Service</p>
                  <p className="dentroP">Faça seu login</p>
               </div>
            </div>
         </div>
         <div className="caixaLogin" style={{ display: caixaLogin }}>
            <div className="login">
               <div><button className="buttonLogin">Faça seu Login</button></div>
               <div><p className="pButton">Cliente Novo? <a className="aButton">Começe Aqui.</a></p></div>
            </div>
            < hr className="barraLogin" />
            <div className="listas">
               <div className="suasListas">
                  <h1 className="TituloCaixaLogin">Suas listas</h1>
                  <p className="paragCaixaLogin">Criar uma Lista de Desejos</p>
                  <p className="paragCaixaLogin">Ache uma Lista</p>
                  <p className="paragCaixaLogin">AmazonSmile Charity Lists</p>
               </div>
               <hr className="barraLoginDois" />
               <div className="suaConta">
                  <h1 className="TituloCaixaLogin">Sua conta</h1>
                  <p className="paragCaixaLogin">Conta</p>
                  <p className="paragCaixaLogin">Pedidos</p>
                  <p className="paragCaixaLogin">Recomendações</p>
                  <p className="paragCaixaLogin">Histórico de navegação</p>
                  <p className="paragCaixaLogin">Lista</p>
                  <p className="paragCaixaLogin">Compras e aluguéis de vídeo</p>
                  <p className="paragCaixaLogin">Kindle Unlimited</p>
                  <p className="paragCaixaLogin">Conteúdo e dispositivos</p>
                  <p className="paragCaixaLogin">Produtos no Programe e Poupe</p>
                  <p className="paragCaixaLogin">Inscrições e assinaturas</p>
                  <p className="paragCaixaLogin">Biblioteca de música</p>
               </div>
            </div>
         </div>
      </>
   )
   function ficaEscuro() {
      setDisplay('flex')
      setEscuro('brightness(0.3)')
   }
   function ficaClaro() {
      setDisplay('none')
      setEscuro('brightness(1)')
   }
   function mostraLogin() {
      setCaixaLogin('flex')
   }
   function tiraLogin() {
      setCaixaLogin('none');
   }

}



export default AppBar;




