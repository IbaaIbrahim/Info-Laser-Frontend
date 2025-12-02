import {NextResponse} from "next/server";
import {getCatalogData} from "@/api/api";

export const revalidate = 60;

export const GET = async () => {
  try {
    const data = await getCatalogData();

    return NextResponse.json(
      data,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Ошибка при проксировании /api/catalog:", error);

    return NextResponse.json(
      {
        message: "Ошибка загрузки каталога",
      },
      {
        status: 500,
      }
    );
  }
};


