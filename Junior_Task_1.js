import fetch from "node-fetch"; //Библиотека
async function getName (){
    const url = 'https://reqres.in/api/users?page=2';
    const response = await fetch(url);  //Получение промиса с сервера
    const data = await response.json(); //Преобразование  промиса в .json формат


    const a = data.data.length; //количество пользователей

    for(let i=0; i<a; i++){ //Если id пользователя равно 10 вывод фамили и имени в консоль
        if(data['data'][i].id == 10){
            console.log(data['data'][i].last_name);
            console.log(data['data'][i].first_name);
        }
    }
}
getName ();