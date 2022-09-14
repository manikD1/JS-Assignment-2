// ---
//     const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];

//     const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]
// -----

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// 3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
    
const products = [
    {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
    },
    {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
    },
    {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
    }
];

let signUP = (id, user, email, pass) => {

    let count = 0;

    users.forEach(e => {
        for (const key in e) {
            if(email == e['email']){
                count++;
            }
        }
    });

    if(count > 0){
        console.log(`The email : ${email} is already registered`);
    }
    else{

        let today = new Date();
        users.push({
            _id: id,
            username: user,
            email: email,
            password: pass,
            createdAt: `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} ${today.getHours()>12 ? today.getHours()-12 : today.getHours()}:${today.getMinutes()<10 ? '0'+today.getMinutes() : today.getMinutes()} ${today.getHours()>12 ? 'PM' : 'AM'}`,
            isLoggedIn: true
        });

    }

};

let signIn = (email, pass) => {

    let login = 0;

    users.forEach(e => {
        for (const key in e) {
            if((email == e['email']) && (pass == e['password'])){
                this.isLoggedIn = true;                
                login++;
            }
        }
    });

    if (login==0){
        console.log("Invalid credentials");
    }
    else{
        console.log("You are signed in now");
    }

};

let rateProduct = (id, rating, user) => {

    let count = 0;

    products.forEach(e => {
        if(id == e['_id']){
            e['ratings'].push({userId: user, rate: rating});
            count++;
        }
    });

    if(count==0){
        console.log("Invalid product ID");
    }
    else{
        console.log("Rating added");
    }

};

let averageRating = (id) => {

    products.forEach(e => {
        if(id == e['_id']){
            let tRate = 0;
            e['ratings'].forEach(el => {
                tRate = tRate + el['rate'];
            });
            console.log(`Average rating is : ${tRate/e['ratings'].length}`);
        }
    });

};


let likeProduct = (id, user) => {

    products.forEach(e => {
        if(id == e['_id']){
            if(e['likes'].includes(user)){
                e['likes'] = e['likes'].filter(el => el!=user);
            }
            else{
                e['likes'].push(user);
            }
        }
    });

};

// Use below at your own discretion :


// signUP('001','manik','alex@alex.com','mypass');  
// signUP('001','manik','manik@email.com','mypass');  
// console.log(users);

// signIn('a@a.com','mypass');
// signIn('brook@brook.com','123111');

// rateProduct('eedfcf', 100, 'manik');
// let sampObj = products.filter(e => e['_id']=='eedfcf')
// console.log(sampObj[0]);

// averageRating('eedfcf');

// likeProduct('aegfal','fg12cy');
// console.log(products[1]);
// likeProduct('aegfal','fg12cy');
// console.log(products[1]);
// likeProduct('aegfal','fg12cy');
// console.log(products[1]);

