import { NextResponse } from "next/server";

export const getResponseMessage = (
  responseMessage,
  responseCode,
  responseStatus
) => {
  return NextResponse.json(
    {
      message: responseMessage,
      success: responseCode,
    },
    {
      status: responseStatus,
    }
  );
};
