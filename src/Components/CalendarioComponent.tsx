import React, { useState } from 'react';
import Calendar, { TileClassNameFunc } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Estilos padrão
import { Modal, Button, Row } from 'antd'; // Importando Modal e Button do Ant Design

const MeuCalendario: React.FC = () => {
    const [date, setDate] = useState<any>(new Date());
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedHour, setSelectedHour] = useState<number | null>(null); // Estado para a hora selecionada

    const customTileClass: TileClassNameFunc = ({ date, view }) => {
        // Verifica se a célula está na visualização de mês
        if (view === 'month') {
            const day = date.getDate();
            if (day === 1) {
                return 'custom-tile'; // Destacar o dia 1 de cada mês
            }
            if (date.getDay() === 6 || date.getDay() === 0) {
                return 'weekend-tile'; // Destacar sábados e domingos
            }
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
      setIsModalOpen(false);
      window.open('https://w.app/Ajyxhl')
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      // Lógica adicional caso necessário
    };
    const handleDateClick = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
        setShowModal(true); // Abre o modal de horários ao clicar em uma data
    };

    const handleCloseModal = (Cabou:any) => {
        setShowModal(false);
        setSelectedHour(null);
        {Cabou && setIsModalOpen(true)}
    };


    const handleHourSelect = (hour: number) => {
        setSelectedHour(hour);
    };

    const Horarios = () => {
        const horas = Array.from({ length: 13 }, (_, i) => 8 + i);
        const marcados = [8,19]; // Lista de horários já marcados
    
        return (

            <Row style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:14,marginBottom:14}}>
                    <span style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5,fontWeight:'bold'}}>Horários Indisponíveis: <div style={{width:'25px',borderRadius:3,height:'18px',background:'#838383'}}/></span>
                </div>
                <div className="horarios-list">
                
                {horas.map((hora) => (
                    <div className="hora" key={hora}>
                        <Button
                            onClick={() => handleHourSelect(hora)}
                            disabled={marcados.includes(hora)} // Desabilita botão se estiver marcado
                            style={{
                                width: '90px',
                                height:'40px',
                                border: 'none',
                                fontSize:15,
                                background: marcados.includes(hora)
                                    ? '#838383' // Cor preta para horários marcados
                                    : selectedHour === hora
                                    ? '#830101'
                                    : undefined,
                                color: marcados.includes(hora) ? '#fff' : selectedHour === hora ? '#fff' : undefined,
                                cursor: marcados.includes(hora) ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {hora}:00
                        </Button>
                    </div>
                ))}
            </div>
            </Row>
            
            
        );
    };

    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
                tileClassName={customTileClass}
                onClickDay={handleDateClick} // Chama a função ao clicar em um dia
            />

            {/* Modal do Ant Design */}
            <Modal
                title={<span style={{fontWeight:'bold'}}>{`Horários para ${selectedDate?.toLocaleDateString()}`}</span>}
                visible={showModal}
                centered
                width={'90%'}
                onCancel={handleCloseModal}
                footer={[
                    <Row style={{display:'flex',flexDirection:'row',justifyContent:'end',gap:20}}>
                        <Button key="close" onClick={()=>handleCloseModal(false)}>
                            Fechar
                        </Button>
                        <Button style={{background:'#830101',border:'none'}} type='primary' key="close" onClick={()=>handleCloseModal(true)}>
                            Agendar Horário
                        </Button>
                    </Row>

                    ,
                ]}
            >
                {/* Exibe os horários dentro do modal */}
                <Horarios />
                {selectedHour && (
                    <div style={{ marginTop: '10px', fontSize: '14px',display:'flex',fontWeight:500,justifyContent:'center' }}>
                        Horário selecionado: {selectedHour}:00
                    </div>
                )}
            </Modal>
            <Modal
                title="Parabéns! Você chegou no final da fase de teste"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                centered
                okButtonProps={{style:{background:'#830101'}}}
                okText="Entrar em contato"
                cancelText="Fechar"
            >
                <p>O teste do site foi concluído. Dúvidas? Entre em contato conosco!</p>
            </Modal>
        </div>
    );
};

export default MeuCalendario;
