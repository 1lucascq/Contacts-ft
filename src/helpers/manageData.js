import LINKS from "./fetchURL";

async function addContact (newContact) {
  const { name, email, image, phone } = newContact;
  
  const headers = { "Content-Type" : "application/json; charset=UTF-8" };
  
  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify({ name, email, image, phone }),
  };
  const result = await fetch(LINKS.API_URL, options);
  const data = await result.json();

  return data;
}

async function editContact (editedContact, id) {
  const { edName: name, edEmail: email, edImage: image, edPhone: phone } = editedContact;
  
  const headers = { "Content-Type" : "application/json; charset=UTF-8" };
  
  const options = {
    headers,
    method: 'PUT',
    body: JSON.stringify({ name, email, image, phone }),
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

  console.log(data)
  return data;
}


export { addContact, editContact, deleteContact };