// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

let personAccount = {

    firstName : 'Manik',

    lastName : 'Dixit',

    incomes : [
        {10000 : 'Full Time Job Salary'},
        {80000 : 'Share Market'},
        {30000 : 'Real Estate'},
        {50000 : 'Crypto'},
    ],

    expenses : [
        {5000 : 'Room Rent'},
        {6000 : 'Petrol'},
        {2000 : 'Ration'},
        {550 : 'Maid'},
    ],

    totalIncome : function(){
        let tIncome = 0;
        this.incomes.forEach((e) => {
            for (const k in e) {
                tIncome = tIncome + Number(k);
            }
        });
        console.log('\nTotal Income : ', tIncome);
        return tIncome;
    },

    totalExpense : function(){
        let tExpense = 0;
        this.expenses.forEach((e) => {
            for (const k in e) {
                tExpense = tExpense + Number(k);
            }
        });
        console.log('\nTotal Expenses : ',tExpense);
        return tExpense;
    },

    accountInfo : function(){
        console.log(`\nA/C Name : ${this.firstName} ${this.lastName}`);

        console.log('\nYour List of Incomes are : ');
        this.incomes.forEach(e => {
            console.log(e);
        });

        console.log('\nYour List of Expenses are : ');
        this.expenses.forEach(e => {
            console.log(e);
        });
    },

    addIncome : function(obj){
        this.incomes.push(obj);
    },

    addExpense : function(obj){
        this.expenses.push(obj);
    },

    accountBalance: function(){
        console.log(`\nYour account balance is : ${this.totalIncome() - this.totalExpense()}`);
    }

}

// Call at your own wish : 

// personAccount.accountInfo();
// personAccount.accountBalance();
// personAccount.totalIncome();
// personAccount.totalExpense();

// personAccount.addIncome({34000 : 'Gaming Money'});
// personAccount.addExpense({9500 : 'Girlfriend Expense'});

// personAccount.accountInfo();
// personAccount.accountBalance();
// personAccount.totalIncome();
// personAccount.totalExpense();
