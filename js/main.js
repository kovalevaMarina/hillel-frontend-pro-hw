/* 
Задача.
Реализуйте сущность Worker (Работник), который будет иметь следующие свойства: 
name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных 
дней). Также сущность должна иметь метод getSalary(), который будет выводить зарплату работника.
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
Так же добавить несколько ролей. Администратор, Кассир, Консультант.
И добавить для каждого уникальные свойства.
Учесть все 4 принципа ООП.
*/

const worker = {
  name: "",
  surname: "",
  rate: "",
  days: "",
  role: "",
  getSalary: () => {
    return this.rate * this.days;
  },
  getListEmployeers: () => {},
  getListProducts: () => {},
  countAward: () => {
    let count = 0;
    return {
      add: (amount) => {
        count += amount;
      },
      decrease: (amount) => {
        count -= amount;
      },
      getCount: () => count,
    }
  },
};

administrator(worker) {
  addEmployees: () => {},
  changeListProducts: () => {},
  getListEmployeers: () => {
    return [];
  },
  getListProducts: () => {
    return [];
  },
}

cashier(worker) {
  makeSalaryPayment: () => {},
  getListEmployeers: () => {
    return [];
  },
  getListProducts: () => {
    return [];
  },
}

consultant (worker) {
  countOfProductsSold: () => {},
  getListEmployeers: () => {
    return null
  },
  getListProducts: (id) => {
    return [];
  },
}

