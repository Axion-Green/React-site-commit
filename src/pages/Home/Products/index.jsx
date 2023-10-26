import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <>
        <section className="about" id="about-produto">
            <div className="max-width">
                <h2 className="title">Produto</h2>
                <div className="about-content">
                    
                    <div className="column right1">
                        <div className="text">Introdução e apresentação de nosso produto</div>
                        <p>O nosso produto é composto de dois dispositivos, o qualificador e o umidificador, ambos utilizam tecnologia wireless, permitindo-os serem instalados em dois pontos distindos do comodo.</p>
                        <p><br/>O grande destaque do qualificador é integração do sensor MQ7 (sensor que permite a analise da composição do ar) com o resto do produto, permitindo que esses dados sejam analisados pelo aparelho, e caso se mostre necessario, o umidificador será ativado. Tudo isso ao mesmo tempo que os dados são armazenados no nosso servidor para serem apresentados aos clientes em forma de grafico caso queiram um relatório da condição do ar de sua casa com o passar do tempo</p>
                        <p><br/> A solução proposta com o uso de dispositivos Wireless traz diversos impactos positivos, como aumento da produtividade, redução de custos e riscos, e melhoria na qualidade dos produtos e processos. Além disso, a utilização de tecnologias sustentáveis e eficientes contribui para a preservação do meio ambiente.</p>
                        <p><br/>No entanto, é importante considerar os possíveis impactos negativos da implementação dessas soluções, como a necessidade de treinamento e capacitação de pessoal para operar e instalar esses dispositivos ao redor das empresas, além de possíveis problemas de compatibilidade com sistemas já existentes</p>
                        <p><br/>Para minimizar esses impactos e garantir o sucesso da implementação da solução, é importante realizar um estudo prévio das necessidades e possibilidades do cliente, além de investir em treinamentos e suporte técnico. Também é importante estar atento às atualizações e evoluções tecnológicas para garantir a eficiência e competitividade do dispositivo no mercado</p>
                        <Link to="/selo" >Instalação</Link>
                    </div>
                    <div className="column left-1">
                        <img src="./img/marcadaguaselo.png" alt="IMG de perfil"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products