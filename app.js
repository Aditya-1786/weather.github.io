const form = document.querySelector('form');
const card = document.querySelector('.card');
form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const city = form.elements.city.value;
    const config = {params:{key:'7c711422ff074111888195502210807',q:`${city}`}};
    const api = await axios.get('https://api.weatherapi.com/v1/current.json',config);
    console.log(api);
    const image = document.querySelector('.card-img-top');
    const ul = document.createElement('ul');
    const bt = document.createElement('b');
    bt.append(`${api.data.location.name}, ${api.data.location.region}`);
    const text = document.querySelector('.card-text');
    text.append(bt);
    text.append(document.createElement('br'));
    text.append(api.data.location.localtime);
    text.append(document.createElement('br'));
    text.append(api.data.current.condition.text);
    const isDay = api.data.current.is_day;
    console.log(isDay);
    text.append(document.createElement('br'));
    const bt2 = document.createElement('b');
    if(isDay === 1)
        bt2.innerText = 'Day';
    else
        bt2.innerText = 'Night';
    text.append(bt2);
    text.append(document.createElement('br'));
    text.append(`Temperature: ${api.data.current.feelslike_c}/${api.data.current.temp_c}`);
    card.classList.add('show');
    form.elements.city.value = '';
    form.elements.state.value = '';
})

const done = document.querySelector('#cardB');
done.addEventListener('click',()=>{
    const text = document.querySelector('.card-text');
    text.innerHTML = '';
    card.classList.remove('show');
    form.elements.city.value = '';
    form.elements.state.value = '';
})
    
    