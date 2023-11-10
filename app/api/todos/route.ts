import { NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/todos";

export type TODO = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function GET() {
  const response = await fetch(DATA_URL);
  const data: TODO[] = await response.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { userId, title }: TODO = await request.json();
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.API_KEY ?? "",
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });
  const newTodo: TODO = await res.json();
  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { id, title, userId, completed }: TODO = await request.json();
  if (!id || !userId || !title || typeof completed !== "boolean") {
    return NextResponse.json({ msg: "missing important info!!" });
  }
  const res = await fetch(`${DATA_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.API_KEY ?? "",
    },
    body: JSON.stringify({
      title,
      userId,
      completed,
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
export async function PATCH(request: Request) {
  const { id, completed }: TODO = await request.json();
  if (!id || typeof completed !== "boolean") {
    return NextResponse.json({ msg: "missing important info!!" });
  }
  const res = await fetch(`${DATA_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.API_KEY ?? "",
    },
    body: JSON.stringify({
      completed,
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
export async function DELETE(request: Request) {
  const { id }: Partial<TODO> = await request.json();
  if (!id) {
    return NextResponse.json({ messege: "Todo id is required." });
  }
  await fetch(`${DATA_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "APT-Key": process.env.API_KEY ?? "",
    },
  });
  return NextResponse.json({ messege: "Todo" + id + "is deleted." });
}
