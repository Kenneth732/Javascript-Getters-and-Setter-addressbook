class Contact {
    constructor(firstName, lastName, phoneNumber, emailAddress) {
        this._firstName = firstName
        this._lastName = lastName
        this._phoneNumber = phoneNumber
        this._emailAddress = emailAddress
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }

    get emailAddress() {
        return this._emailAddress;
    }

    set emailAddress(value) {
        this._emailAddress = value;
    }

}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact)
    }

    displayContact() {
        const contactContainer = document.querySelector('#contacts')
        contactContainer.innerHTML = ''

        if (this.contacts.length === 0) {
            contactContainer.textContent = "No contact"
        } else {
            this.contacts.forEach((contact, index) => {
                const contactElement = document.createElement('div')
                contactElement.innerHTML = `
                <h3>${contact.firstName}</h3>
                <h3>${contact.lastName}</h3>
                <p>Ingredients: ${contact.phoneNumber}</p>
                <p>Instructions: ${contact.emailAddress}</p>
                <button class="delete-button">Delete</button>
                <button class="edit-button">Edit</button>
                `;
                contactContainer.appendChild(contactElement);

                const deleteButton = document.querySelector('.delete-button')
                deleteButton.addEventListener('click', () => {
                    this.deleteContact(index);
                    this.displayContact();
                });

                const editButton = contactElement.querySelector('.edit-button');
                editButton.addEventListener('click', () => {
                    this.editContact(index);
                });
            })
        }
    }

    deleteContact(index) {
        this.contacts.splice(index, 1)
    }

    editContact(index) {
        const contact = this.contacts[index];

        const firstName = prompt('Enter new firstName:', contact.firstName);
        const lastName = prompt('Enter new lastName:', contact.lastName);
        const phoneNumber = prompt('Enter new phoneNumber:', contact.phoneNumber);
        const emailAddress = prompt('Enter new emailAddress:', contact.emailAddress);

        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phoneNumber = phoneNumber;
        contact.emailAddress = emailAddress;
        this.displayContact();
        // clearForm();
    }

}

const addressBook = new AddressBook();

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const phoneNumber = document.querySelector('#phone-number').value;
    const emailAddress = document.querySelector('#email-address').value; // Add .value here

    const contact = new Contact(firstName, lastName, phoneNumber, emailAddress);
    addressBook.addContact(contact);
    addressBook.displayContact(); // Correct method name
});