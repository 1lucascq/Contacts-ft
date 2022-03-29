import LINKS from "./fetchURL";

function createPhoneNumbers(phone) {
  if (typeof +phone === 'number' ) return [phone];

  const phonesArray = phone.split(',');
  const phoneNumbers = phonesArray.map(phoneItem => phoneItem = Number(phoneItem.replace(/\s/g, '')));
  return phoneNumbers;
}

async function addContact ({newContact}) {
  const { name, email, image, phone } = newContact;
  const phoneNumbers = createPhoneNumbers(phone);
  const headers = { "Content-Type" : "application/json; charset=UTF-8" };
  
  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify({ name, email, image, phoneNumbers }),
  };
  const result = await fetch(LINKS.API_URL, options);
  const data = await result.json();

  return data;
}

async function editContact ({ newContact, id }) {
  const { editName: name, editEmail: email, editImage: image, editPhone: phone } = newContact;
  const phoneNumbers = createPhoneNumbers(phone)
  const headers = { "Content-Type" : "application/json; charset=UTF-8" };
  
  const options = {
    headers,
    method: 'PUT',
    body: JSON.stringify({ name, email, image, phoneNumbers }),
  };
  const result = await fetch(`${LINKS.API_URL}${id}`, options);
  const data = await result.json();

  return data;
}

async function deleteContact (id) {
  const headers = { "Content-Type" : "application/json; charset=UTF-8" };
  
  const options = { headers, method: 'DELETE' };
  const result = await fetch(`${LINKS.API_URL}${id}`, options);
  const data = await result.json();

  return data;
}


export { addContact, editContact, deleteContact };