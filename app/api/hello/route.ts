type object_type = {
    Name: String,
    Age: Number
}

const obj : object_type = {Name: "Saran", Age: 20}

export async function GET(request: Request) {
    return new Response("Name: 'saran', 'Age' : 20")
  }