import Product from "@/models/product";
import { dbConnect } from "@/utils/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
// import { limiter } from "../config/limiter";

export type ProductType = {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

export async function GET(req: Request) {
  try {
    // const origin = req.headers.get("origin");

    await dbConnect();

    const prods = await Product.find()

    return NextResponse.json({ data: prods });
  } catch (error) {
    throw new Error("Big Erorrrrrr");
  }
}

export async function POST(req: Request, res: Response) {
  try {
    // const origin = req.headers.get("origin");
    await dbConnect();
    const request = await req.json();
    const product = await Product.create({ ...request });

    return NextResponse.json({ data: product });
  } catch (error) {
    // return new NextResponse(JSON.stringify({ msg: "error" }), {
    //   status: 400,
    //   statusText: "Bad Request..",
    //   headers: {
    //     "Access-Control-Allow-Origin": origin || "*",
    //     "Content-Type": "application/json",
    //   },
    // });
    console.log(error);
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    const origin = req.headers.get("origin");
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const request = await req.json();
    const product = await Product.findByIdAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(searchParams.get("id")!),
      },
      {
        ...request,
      }
    );

    return NextResponse.json({ data: product });
  } catch (error) {
    // return new NextResponse(JSON.stringify({ msg: error }), {
    //   status: 400,
    //   statusText: "Bad Request..",
    //   headers: {
    //     "Access-Control-Allow-Origin": origin || "*",
    //     "Content-Type": "application/json",
    //   },
    // });
    console.log(error);
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const origin = req.headers.get("origin");
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const prod = await Product.findByIdAndDelete(searchParams.get("id"));
    return NextResponse.json({ data: prod });
  } catch (error) {
    throw new Error("Big Erorrrrrr");
    // return new NextResponse(JSON.stringify({ msg: error }), {
    //   status: 400,
    //   statusText: "Bad Request..",
    //   headers: {
    //     "Access-Control-Allow-Origin": origin || "*",
    //     "Content-Type": "application/json",
    //   },
    // });
    console.log("Big Erorrrr");
  }
}
