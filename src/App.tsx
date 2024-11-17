import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Button, Col, Modal, message } from 'antd';
import BarberShopCalendar from './Components/Calendarios';

function App() {

  const [Etapa, setEtapa] = useState(0)

  const Cortes = [
    { id: 0,Valor:'R$ 30,00',Nome: "Corte Social", Icon: "https://cdn-icons-png.flaticon.com/128/4765/4765057.png" },
    { id: 1,Valor:'R$ 35,00',Nome: "Degradê", Icon: "https://cdn-icons-png.flaticon.com/128/4765/4765062.png" },
    { id: 2,Valor:'R$ 50,00',Nome: "Social e Barba", Icon: "https://cdn-icons-png.flaticon.com/128/6019/6019027.png" },
    { id: 3,Valor:'R$ 55,00',Nome: "Degradê e Barba", Icon: "https://cdn-icons-png.flaticon.com/128/775/775348.png" },
    { id: 4,Valor:'R$ 20,00',Nome: "Barba", Icon: "https://cdn-icons-png.flaticon.com/128/8838/8838083.png" }
  ];


  const Etapa1 = (() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCancel, setIsModalOpenCancel] = useState(false);
    const [nometitle,setnometitle]=useState('Cancelar')
  
    const handleCancel = () => {
      setIsModalOpen(false);
      // Lógica adicional caso necessário
    };
    const handleCancelAgendamento = () => {
      setIsModalOpenCancel(false);
      // Lógica adicional caso necessário
    };

    const handleCancelAgendamentoConfirm = () => {
      setIsModalOpenCancel(false);
      setnometitle('Cancelado')
    };

    const openCancelaModal = () => {
      setIsModalOpenCancel(true);
      // Lógica adicional caso necessário
    };

    return (
      <Row style={{ display: 'flex', background: 'whitesmoke', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', flexDirection: 'column', gap: 50 }}>
        <div style={{display:'flex',alignItems:'center',gap:30}}>
          <span onClick={()=>{setIsModalOpen(true)}} className='meusagendamentos'>Meus Agendamentos</span>
        </div>
        <img style={{ width: '65%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', border: '7px solid #830101', borderRadius: '50%' }} src='https://i.pinimg.com/736x/27/ed/12/27ed1280b0cb1fffe1b2ed4649d97a7a.jpg'></img>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <Button onClick={()=>{message.info('Aba indisponível na versão de teste')}} style={{ padding: '30px 20px', fontWeight: 'bold', fontSize: '5vw', background: '#830101', border: 'none' }} type='primary'>Conheça Nossa Barbearia</Button>
          <Button onClick={(() => { setEtapa(1) })} style={{ padding: '30px 20px', fontWeight: 'bold', fontSize: '5vw', background: '#830101', border: 'none' }} type='primary'>Agendar Corte</Button>
        </div>
        <Modal
                open={isModalOpen}
                closable={false}
                centered
                footer={
                  <Button onClick={handleCancel}>Fechar</Button>
                }
            >
              <h1 style={{fontSize:20}}>Meus Agendamentos</h1>
              <Row style={{display:'flex',flexDirection:'column'}}>
                <Col style={{display:'flex',padding:15,border:'1px solid #d7d6d6',justifyContent:'space-between',alignItems:'center'}} span={24}>
                  <span style={{fontWeight:550}}>Dia 12/08/2024 as 17:30</span>
                  <span style={{color:'#01b901',fontWeight:'550'}}>Realizado</span>
                </Col>
                <Col style={{display:'flex',padding:15,border:'1px solid #d7d6d6',justifyContent:'space-between',alignItems:'center'}} span={24}>
                  <span style={{fontWeight:550}}>Dia 20/09/2024 as 17:30</span>
                  <span style={{color:'#01b901',fontWeight:'550'}}>Realizado</span>
                </Col>
                <Col style={{display:'flex',padding:15,border:'1px solid #d7d6d6',justifyContent:'space-between',alignItems:'center'}} span={24}>
                  <span style={{fontWeight:550}}>Dia 10/10/2024 as 17:30</span>
                  <span style={{color:'#8d8d8d',fontWeight:'550',textDecoration:'line-through'}}>Cancelado</span>
                </Col>
                <Col style={{display:'flex',padding:15,border:'1px solid #d7d6d6',justifyContent:'space-between',alignItems:'center'}} span={24}>
                  <span style={{fontWeight:550}}>Dia 20/10/2024 as 17:30</span>
                  <span style={{color:'#01b901',fontWeight:'550'}}>Realizado</span>
                </Col>
                <Col style={{display:'flex',padding:15,border:'1px solid #d7d6d6',justifyContent:'space-between',alignItems:'center'}} span={24}>
                  <span style={{fontWeight:550}}>Dia 20/11/2024 as 17:30</span>
                  <span onClick={()=>nometitle=='Cancelar'?openCancelaModal():undefined} style={{color:nometitle=='Cancelado'?'#8d8d8d':'red',fontWeight:'550',textDecoration:nometitle=='Cancelado'?'line-through':undefined}}>{nometitle}</span>
                </Col>
              </Row>
            </Modal>
            <Modal
              title={<h1 style={{fontSize:17}}>Deseja realmente cancelar esse agendamento?</h1>}
              open={isModalOpenCancel}
              centered
              closable={false}
              footer={
                <Row style={{display:'flex',justifyContent:'end',gap:10}}>
                  <Button onClick={handleCancelAgendamento}>Fechar</Button>
                  <Button style={{background:'#830101',color:'#fff'}} onClick={handleCancelAgendamentoConfirm}>OK</Button>
                </Row>

              }
            >
              <p> <b style={{color:'red'}}>Atenção: </b>Ao clicar em <b>OK</b>, esta ação não poderá ser desfeita e será necessário agendar novamente.</p>
            </Modal>
      </Row>
    )
  })
  const Etapa2 = (() => {
    return (
      <Row style={{ display: 'flex', background: 'whitesmoke', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', gap: 50}}>
        <Row style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:15}}> 
          <h1 style={{margin:0,color:'#830101'}}>Serviços</h1>
          <span style={{fontWeight:500}}>Selecione um tipo de serviço para prosseguir.</span>
        </Row>
        <Row style={{display:'flex',height:'max-content',width:'100%',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:30}}>
          {Cortes.map((el) => {
            return (
            <div onClick={()=>setEtapa(2)} style={{boxShadow:'rgb(0 0 0 / 7%) 0px 3px 8px',display:'flex',flexDirection:'column',gap:10,padding:'10px 5px',alignItems:'center',justifyContent:'center',background: '#fff',borderRadius:10 }}>
              <img style={{width:'30%'}} src={el.Icon}></img>
              <span style={{fontWeight:'bold'}}>{el.Nome}</span>
              <span style={{fontWeight:'bold'}}>{el.Valor}</span>
            </div>
            )
          })}
        </Row>
        <Row style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}> 
          <Button onClick={(() => { setEtapa(0) })} style={{ padding: '25px 15px', fontWeight: 'bold',width:'50%',fontSize: '4.5vw', background: '#830101', border: 'none',scale:'0.9'}} type='primary'>Voltar</Button>
        </Row>
        
      </Row>
    )
  })

  return (
    <Row style={{ width: '100vw', height: '100vh',background: 'whitesmoke'}}>
      {Etapa == 0 && <Etapa1/>}
      {Etapa == 1 && Etapa2()}
      {Etapa == 2 && <BarberShopCalendar setEtapa={setEtapa}/>}
    </Row>

  );
}

export default App;
