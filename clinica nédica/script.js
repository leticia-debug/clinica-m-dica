/**
 * Script de Interatividade - Clínica Médica Humanas
 * Desenvolvido para controle de agendamentos e efeitos de interface.
 */

document.addEventListener('DOMContentLoaded', () => {
    bloquearDatasPassadas();
    configurarAgendamento();
});

/**
 * Impede que o usuário selecione no calendário uma data anterior ao dia de hoje.
 */
function bloquearDatasPassadas() {
    const dataInput = document.getElementById('data');
    if (dataInput) {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        // Adiciona o zero à esquerda se o mês/dia for menor que 10
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const dia = String(hoje.getDate()).padStart(2, '0');
        
        // O formato padrão do input type="date" é AAAA-MM-DD
        const dataMinima = `${ano}-${mes}-${dia}`;
        dataInput.setAttribute('min', dataMinima);
    }
}

/**
 * Controla o envio do formulário de agendamento e simula o sucesso.
 */
function configurarAgendamento() {
    const form = document.querySelector('.form-booking');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que a página recarregue

            const nome = document.getElementById('nome').value.trim();
            const especialidade = document.getElementById('especialidade');
            const textoEspecialidade = especialidade.options[especialidade.selectedIndex].text;
            const dataSelecionada = document.getElementById('data').value;

            // Formata a data de AAAA-MM-DD para o padrão brasileiro DD/MM/AAAA
            const dataFormatada = dataSelecionada.split('-').reverse().join('/');

            // Mensagem de sucesso amigável simulando o agendamento do paciente
            alert(`Obrigado, ${nome}!\nSua solicitação para a especialidade de ${textoEspecialidade} no dia ${dataFormatada} foi enviada. Entraremos em contato por e-mail para confirmar o horário.`);
            
            form.reset(); // Limpa todos os campos do formulário
        });
    }
}
