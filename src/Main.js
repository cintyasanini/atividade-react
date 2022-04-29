import styles from "./main.module.css"

function Main(){
    return( 
    <div className="main">
    <div className="center">
      <div className="menu">
        <div className="logo">
         <h3>Logo</h3>
         <p className={styles.texto_h3}> teste modulo css</p>
         <p className={styles.texto_h2}> teste modulo css</p>
        </div>
        <div className="item_menu">
          < a href="#">Login </a>
        </div>
      </div>
      <div className="form">
        <h2> Entre com seus dados</h2>
        <form>
          <input type="text" placeholder="Entre com o seu nome"/>
          <input type="text" placeholder="Entre com o seu endereço"/>
          <input type="text" placeholder="Entre com o seu telefone"/>
          <input type="text" placeholder="Entre com o seu C.E.P"/>
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    </div>
   </div>
   )
}

export default Main

