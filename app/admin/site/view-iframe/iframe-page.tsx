"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingPage from "../loading";

export function ViewIframePage({
  userId,
  role,
}: {
  userId: string;
  role: string;
}) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Card className="min-w-[1000px] min-h-[1000px]">
          <CardContent className="pt-5" style={{ height: "2000px" }}>
     
            <iframe
              className="w-full h-full"
              src="http://192.168.186.136:9080/search/result?%7B%22timestamp%22:%7B%22from%22:1732971015869,%22to%22:1732971615869%7D,%22param%22:%7B%22search%22:%7B%221_call%22:%7B%22id%22:4,%22callid%22:%5B%22Y2JiOTk3ZjFjMmNlOWRjOGNkYjIwNDdiMzViOWYyMDA.%22%5D,%22uuid%22:%5B%5D%7D%7D,%22location%22:%7B%7D,%22transaction%22:%7B%22call%22:true,%22registration%22:false,%22rest%22:false%7D,%22id%22:%7B%7D,%22timezone%22:%7B%22value%22:-180,%22name%22:%22Local%22%7D%7D%7D="
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </CardContent>
        </Card>
      )}
    </>
  );
}
