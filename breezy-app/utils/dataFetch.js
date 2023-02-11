
const uri = 'http://localhost:3000';


export async function getData() {
  const res = await fetch(`${uri}/api/controller`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
}

export async function getDataById(id) {
  const res = await fetch(`${uri}/api/${id}`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
}

export async function submitData(data) {
  try {
    const res = await fetch(`${uri}/api/controller`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(id, data) {
  try {

    const res = await fetch(`${uri}/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
