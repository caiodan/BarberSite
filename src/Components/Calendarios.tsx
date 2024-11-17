import React from 'react';
import {Button, Row,} from 'antd';
import 'dayjs/locale/pt-br';
import MeuCalendario from './CalendarioComponent';

const BarberShopCalendar: React.FC<any> = ({ setEtapa }) => {

  return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 30,
        }}
      >
        <Row
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 30,
          }}
        >
          <h1 style={{ margin: 0, color: ' #0055bf' }}>HORÁRIOS DISPONÍVEIS</h1>
          <span style={{ fontWeight:'bold'}}>Selecione uma data e um horário para prosseguir.</span>
        </Row>

        <Row style={{width:'100%',padding:20,display:'flex',justifyContent:'center'}}>
            <MeuCalendario setEtapa={setEtapa}/>
        </Row>
           
        <Row
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => {
              setEtapa(1);
            }}
            style={{
              padding: '25px 15px',
              fontWeight: 'bold',
              width: '50%',
              fontSize: '4.5vw',
              background: ' #0055bf',
              border: 'none',
              scale:'0.9'
            }}
            type="primary"
          >
            Voltar
          </Button>
        </Row>
      </div>
  );
};

export default BarberShopCalendar;
