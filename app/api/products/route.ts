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
  await dbConnect();
  try {
    const prods = await Product.find();
    return NextResponse.json({ data: prods });
  } catch (error) {
    throw new Error("Big Erorrrrrr");
  }
}

export async function POST(req: Request, res: Response) {
  await dbConnect();
  try {
    const request = await req.json();
    const { title, image, description, price, category } = request;
    const product = await Product.create({
      title,
      image,
      description,
      price,
      category,
    });

    return NextResponse.json({ data: product });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(req: Request, res: Response) {
  await dbConnect();
  try {
    const origin = req.headers.get("origin");
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
    console.log(error);
  }
}

export async function DELETE(req: Request, res: Response) {
  await dbConnect();
  try {
    // const origin = req.headers.get("origin");
    const { searchParams } = new URL(req.url);
    const prod = await Product.findOneAndDelete({
      _id: searchParams.get("id"),
    });
    return NextResponse.json({ data: prod });
  } catch (error) {
    console.log("Erorrrr");
  }
}
