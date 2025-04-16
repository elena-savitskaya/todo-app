import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const response = await fetch(`${BASE_URL}?_limit=10`);
  const todos = await response.json();
  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const newTodo = await req.json();
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const createdTodo = await response.json();
  return NextResponse.json(createdTodo, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return NextResponse.json({ message: "Todo deleted." });
  } else {
    return NextResponse.json(
      { message: "Error deleting todo." },
      { status: 500 }
    );
  }
}
