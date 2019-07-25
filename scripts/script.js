"use strict";

// OOP Address Book

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }

  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }

  print() {
    // for (let i of contacts) {
    //   console.log(i);
    // }
    this.contacts.forEach(contact => {
      console.log(contact);
    });
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("Amy", "313232", "23232", "wife");
addressBook.add("Seamus", "n/a", "n/a", "Son");
addressBook.add("Tipper the Cat", "n/a", "n/a", "Cat");
addressBook.print();
addressBook.delete("Tipper the Cat");
addressBook.print();
