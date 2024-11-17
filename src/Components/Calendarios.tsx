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
          gap: 50,
        }}
      >
        <Row
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
          }}
        >
          <h1 style={{ margin: 0, color: '#830101' }}>Horários Disponíveis</h1>
          <span style={{ fontWeight:'bold'}}>Selecione um horário e uma data para prosseguir.</span>
        </Row>

        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:30}}>
            <span style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5,fontWeight:500}}>Agendamento Marcado: <div style={{width:'18px',borderRadius:3,height:'18px',background:'#00c12b'}}/></span>
            <span style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5,fontWeight:500}}>Feriados:<div style={{width:'18px',borderRadius:3,height:'18px',background:'#c7c7c7'}}/></span>
          </div>

        <Row style={{width:'100%',padding:20,display:'flex',justifyContent:'center'}}>
            <MeuCalendario/>
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
              background: '#830101',
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
