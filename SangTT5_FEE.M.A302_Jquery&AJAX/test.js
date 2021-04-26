$(document).ready(async function () {
    let url = 'http://quotes.stormconsultancy.co.uk/random.json';
    let data = await getdData(url)
    await showData(data);

    $('#btn-show').click(async function () {
        let data = await getdData(url)
        showData(data);
    })
})

const showData = (data) => {
    console.log(data);
    document.getElementById('title').innerHTML = data.quote
    document.getElementById('author').innerHTML = `- ${data.author}`
}

const clickRandom = data => {
   
}

const getdData = async url => {
    let rs = '';
    await $.get(url, function (data, status) {
        rs = data
        
    });
    return rs;
}