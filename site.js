const quoteForm = document.getElementById('quote-form');
quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  const fields = new FormData(quoteForm);
  const message = `Olá, Alexandre! Vim pelo site Web Rocha e gostaria de conversar sobre um projeto.\n\nNome: ${fields.get('nome').trim()}\nEmpresa: ${fields.get('empresa').trim()}\nInteresse: ${fields.get('servico')}\n\n${fields.get('projeto').trim()}`;
  const url = `https://wa.me/5521971360551?text=${encodeURIComponent(message)}`;
  const fallback = document.getElementById('quote-fallback');
  fallback.href = url;
  fallback.hidden = false;
  window.open(url, '_blank', 'noopener,noreferrer');
});

const segmentPicker = document.getElementById('demo-segment');
const demoData = {
 barbearia: {title:'Relacionamento e agenda',sent:200,replies:48,results:16,revenue:800,label:'Agendamentos atribuídos',short:'Agendamentos',conversion:'Conversão em agendamento',rows:[['Convite para retornar',120,30,10],['Oferta da semana',80,18,6]]},
 hotel: {title:'Atendimento e reservas',sent:150,replies:45,results:9,revenue:5400,label:'Reservas atribuídas',short:'Reservas',conversion:'Conversão em reserva',rows:[['Oferta de baixa temporada',100,32,7],['Convite para voltar',50,13,2]]},
 clinica: {title:'Relacionamento e consultas',sent:180,replies:54,results:18,revenue:2700,label:'Agendamentos atribuídos',short:'Agendamentos',conversion:'Conversão em agendamento',rows:[['Lembrete de retorno',110,38,13],['Campanha de atendimento',70,16,5]]}
};
function renderDemo(){
 const d=demoData[segmentPicker.value]; if(!d)return;
 const set=(id,value)=>{document.getElementById(id).textContent=value;};
 const reply=d.replies/d.sent*100,result=d.results/d.sent*100;
 const percent=n=>new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1}).format(n)+'%';
 set('demo-title',d.title);set('demo-sent',d.sent);set('demo-replies',d.replies);set('demo-results',d.results);set('demo-result-label',d.label);set('demo-revenue',new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(d.revenue));set('demo-reply-rate',percent(reply));set('demo-result-rate',percent(result));set('demo-reply-caption',`${d.replies} contatos responderam entre ${d.sent} destinatários do exemplo.`);set('demo-result-caption',`${d.results} resultados atribuídos entre ${d.sent} destinatários do exemplo.`);set('demo-conversion-title',d.conversion);set('demo-table-result',d.short);
 for(const [id,value] of [['demo-reply-chart',reply],['demo-result-chart',result]]){const chart=document.getElementById(id);chart.style.setProperty('--value',value);chart.setAttribute('aria-label',percent(value)+(id.includes('reply')?' responderam':' geraram resultado atribuído'));}
 const tbody=document.getElementById('demo-table-body');tbody.replaceChildren();
 for(const row of d.rows){const tr=document.createElement('tr');for(const value of row){const td=document.createElement('td');td.textContent=value;tr.append(td);}tbody.append(tr);}
}
segmentPicker?.addEventListener('change',renderDemo);
if(segmentPicker)renderDemo();

const heroVariants={estudio:{alt:'Estúdio criativo com notebook e celular exibindo interfaces de sites',caption:'Estúdio digital'},conexao:{alt:'Robô e dispositivos conectados em uma composição tecnológica',caption:'Tecnologia próxima'},evolucao:{alt:'Interfaces de sites e celular em uma composição de evolução digital',caption:'Design em evolução'}};
document.querySelectorAll('[data-hero]').forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.hero;const variant=heroVariants[key];if(!variant)return;
 const image=document.getElementById('hero-art-image');image.src=`assets/hero-${key}.png`;image.alt=variant.alt;
 document.getElementById('hero-art-caption').textContent=variant.caption+' · imagem ilustrativa gerada por IA';
 document.querySelectorAll('[data-hero]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
}));
