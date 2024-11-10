import { lusitanaLatinFontFamily as lusitana } from "../../ui/fonts/fonts";
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "../../lib/data";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { Card } from "../../ui/dashboard/cards";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from "@/app/ui/skeletons";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import CardWrapper from "../../ui/dashboard/cards";

export default async function Page(){

    const latestInvoices = await fetchLatestInvoices();
    const cardData =  await fetchCardData();
    return(
        <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback = {<RevenueChartSkeleton />}>
            <RevenueChart/>
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices/>
          </Suspense>
        </div>
      </main>
    );
}