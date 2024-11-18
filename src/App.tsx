import React, { useState } from 'react';
import './App.css';
import { Row, Button, Col, Modal, message, Input } from 'antd';
import BarberShopCalendar from './Components/Calendarios';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Image from './Components/wmcortes.jpeg'

function App() {

  const [Etapa, setEtapa] = useState(0)

  const Cortes = [
    { id: 0, Valor: 'R$ 30,00', Nome: "CORTE SOCIAL", Icon: "https://cdn-icons-png.flaticon.com/128/4765/4765057.png" },
    { id: 1, Valor: 'R$ 35,00', Nome: "DEGRADÊ", Icon: "https://cdn-icons-png.flaticon.com/128/4765/4765062.png" },
    { id: 2, Valor: 'R$ 50,00', Nome: "SOCIAL E BARBA", Icon: "https://cdn-icons-png.flaticon.com/128/6019/6019027.png" },
    { id: 3, Valor: 'R$ 55,00', Nome: "DEGRADÊ E BARBA", Icon: "https://cdn-icons-png.flaticon.com/128/775/775348.png" },
    { id: 4, Valor: 'R$ 20,00', Nome: "BARBA", Icon: "https://cdn-icons-png.flaticon.com/128/8838/8838083.png" }
  ];


  const Etapa1 = (() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCancel, setIsModalOpenCancel] = useState(false);
    const [nometitle, setnometitle] = useState('Desmarcar')
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
    const [code, setCode] = useState('');

    const handleOpenCodeModal = () => {
      setIsCodeModalOpen(true);
    };

    const handleValidateCode = () => {
      const expectedCode = 'a98s8cjaus918kx0aa9'; // Código esperado

      if (code === expectedCode) {
        setIsCodeModalOpen(false);
        setIsModalOpen(true); // Abre o modal de "Meus Agendamentos"
      } else {
        Modal.error({
          okButtonProps:{style:{background:'linear-gradient(rgb(32, 122, 185), rgb(30 89 131))'}},
          title: 'Código incorreto',
          content: <span>O código digitado está incorreto ou não existe.<br/> Por favor, tente novamente.</span>,
        });
      }
    };

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
      setnometitle('Desmarcado')
    };

    const openCancelaModal = () => {
      setIsModalOpenCancel(true);
      // Lógica adicional caso necessário
    };

    return (
      <Row style={{ display: 'flex', background: '#fbfbfb', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', flexDirection: 'column', gap: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <span onClick={() => { handleOpenCodeModal() }} className='meusagendamentos'>Meus Agendamentos</span>
          <Modal
            title="Digite o código do agendamento para continuar"
            visible={isCodeModalOpen}
            onOk={handleValidateCode}
            centered
            onCancel={() => setIsCodeModalOpen(false)}
            okText="Confirmar"
            okButtonProps={{style:{background:'linear-gradient(rgb(32, 122, 185), rgb(30 89 131))'}}}
            cancelText="Cancelar"
          >
            <Input
              placeholder="Digite o código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Modal>
        </div>
        <img style={{ width: '65%', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px', border: '7px solid  rgb(38 82 113)', borderRadius: '50%' }} src={'https://i.pinimg.com/736x/32/f8/79/32f8796902b8ef96194b076ef801ca62.jpg'}></img>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <Button onClick={() => { message.info('Aba indisponível na versão de teste') }} style={{ padding: '30px 20px', fontWeight: 'bold', fontSize: '4.5vw', background: ' linear-gradient(rgb(32, 122, 185), rgb(30 89 131))', border: 'none' }} type='primary'>CONHEÇA NOSSA BARBEARIA</Button>
          <Button onClick={(() => { setEtapa(1) })} style={{ padding: '30px 20px', fontWeight: 'bold', fontSize: '4.5vw', background: ' linear-gradient(rgb(32, 122, 185), rgb(30 89 131))', border: 'none' }} type='primary'>AGENDAR CORTE</Button>
        </div>
        <Modal
          open={isModalOpen}
          closable={false}
          centered
          footer={
            <Button onClick={handleCancel}>Fechar</Button>
          }
        >
          <h1 style={{ fontSize: 20 }}>Meus Agendamentos</h1>
          <p style={{fontWeight:'500',color:'#a3a3a3'}}>Lembrete: Os agendamentos da listagem são ficticios para afim de demonstração na versão de teste</p>
          <Row style={{ display: 'flex', flexDirection: 'column' }}>
            <Col style={{ display: 'flex', padding: 15, border: '1px solid #d7d6d6', justifyContent: 'space-between', alignItems: 'center' }} span={24}>
              <span style={{ fontWeight: 550 }}>Dia 12/08/2024 as 17:30</span>
              <span style={{ color: '#01b901', fontWeight: '550' }}>Realizado</span>
            </Col>
            <Col style={{ display: 'flex', padding: 15, border: '1px solid #d7d6d6', justifyContent: 'space-between', alignItems: 'center' }} span={24}>
              <span style={{ fontWeight: 550 }}>Dia 20/09/2024 as 17:30</span>
              <span style={{ color: '#01b901', fontWeight: '550' }}>Realizado</span>
            </Col>
            <Col style={{ display: 'flex', padding: 15, border: '1px solid #d7d6d6', justifyContent: 'space-between', alignItems: 'center' }} span={24}>
              <span style={{ fontWeight: 550 }}>Dia 10/10/2024 as 17:30</span>
              <span style={{ color: '#8d8d8d', fontWeight: '550', textDecoration: 'line-through' }}>Desmarcado</span>
            </Col>
            <Col style={{ display: 'flex', padding: 15, border: '1px solid #d7d6d6', justifyContent: 'space-between', alignItems: 'center' }} span={24}>
              <span style={{ fontWeight: 550 }}>Dia 20/10/2024 as 17:30</span>
              <span style={{ color: '#01b901', fontWeight: '550' }}>Realizado</span>
            </Col>
            <Col style={{ display: 'flex', padding: 15, border: '1px solid #d7d6d6', justifyContent: 'space-between', alignItems: 'center' }} span={24}>
              <span style={{ fontWeight: 550 }}>Dia 20/11/2024 as 17:30</span>
              <span onClick={() => nometitle == 'Desmarcar' ? openCancelaModal() : undefined} style={{ color: nometitle == 'Desmarcado' ? '#8d8d8d' : 'red', fontWeight: '550', textDecoration: nometitle == 'Desmarcado' ? 'line-through' : undefined }}>{nometitle}</span>
            </Col>
          </Row>
        </Modal>
        <Modal
          title={<h1 style={{ fontSize: 17,fontWeight:500 }}>Deseja realmente desmarcar esse agendamento?</h1>}
          open={isModalOpenCancel}
          centered
          closable={false}
          footer={
            <Row style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
              <Button onClick={handleCancelAgendamento}>Fechar</Button>
              <Button style={{ background: ' linear-gradient(rgb(32, 122, 185), rgb(30 89 131))', color: '#fff' }} onClick={handleCancelAgendamentoConfirm}>OK</Button>
            </Row>

          }
        >
          <p> <b style={{ color: 'red' }}>Atenção: </b>Ao clicar em <b>OK</b>, esta ação não poderá ser desfeita e será necessário agendar novamente.</p>
        </Modal>
      </Row>
    )
  })
  const Etapa2 = (() => {
    return (
      <Row style={{ display: 'flex', background: '#fbfbfb', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', gap: 30 }}>
        <Row style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
          <h1 style={{ margin: 0, color: ' linear-gradient(rgb(32, 122, 185), rgb(30 89 131))' }}>SERVIÇOS</h1>
          <span style={{ fontWeight: 'bold' }}>Selecione um tipo de serviço para prosseguir.</span>
        </Row>
        <Row style={{ display: 'flex', height: 'max-content', width: '100%', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
          {Cortes.map((el) => {
            return (
              <div onClick={() => setEtapa(2)} style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px', display: 'flex', flexDirection: 'column', gap: 10, width: '40%', padding: '10px 0px', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: 10 }}>
                <img style={{ width: '30%' }} src={el.Icon}></img>
                <span style={{ fontWeight: 'bold' }}>{el.Nome}</span>
                <span style={{ fontWeight: '500', background: ' linear-gradient(rgb(32, 122, 185), rgb(30 89 131))', color: '#fff', padding: '2px 15px', borderRadius: '5px' }}>{el.Valor}</span>
              </div>
            )
          })}
        </Row>
        <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={(() => { setEtapa(0) })} style={{ padding: '25px 15px', fontWeight: 'bold', width: '50%', fontSize: '4.5vw', background: ' linear-gradient(rgb(32, 122, 185), rgb(30 89 131))', border: 'none', scale: '0.9' }} type='primary'>Voltar</Button>
        </Row>

      </Row>
    )
  })

  const getStepComponent = () => {
    if (Etapa === 0) return <Etapa1 />;
    if (Etapa === 1) return <Etapa2 />;
    if (Etapa === 2) return <BarberShopCalendar setEtapa={setEtapa} />;
  };

  return (
    <Row style={{ width: '100vw', height: '100vh', background: '#fbfbfb' }}>
      {window.innerWidth > 1050 ?
        <span>PLATAFORMA DISPONIVEL APENAS PARA DISPOSITIVOS MOVEIS</span>
        :
        <SwitchTransition>
          <CSSTransition
            key={Etapa}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            {getStepComponent()}
          </CSSTransition>
        </SwitchTransition>
      }
    </Row>

  );
}

export default App;
