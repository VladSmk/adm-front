import React, { useEffect, useState } from "react";
import axios from "axios";
import ServerDomain from "../const/ServerDomain";
import Loading from "../blocks/Loading";
import { Chart } from "react-google-charts";

export default function About() {
    const [loading, setLoading] = useState(true);
    const [statisticAds, setStatisticAds] = useState([]);

    const getStatisticAds = async () => {
        try {
            const response = await axios.get(ServerDomain() + "/ad-monitor-api/getAdStatistic");
            setStatisticAds(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching ads:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getStatisticAds();
    }, []);

    const prepareChartDataImpressions = () => {
        const data = [["Ad", "Value"]];
        statisticAds.forEach((ad: any, index) => {
            data.push([ad.title, ad.impressions]);
        });
        return data;
    };

    const optionsImpressions = {
        legend: "none",
        pieSliceText: "label",
        title: "Ad Impressions",
        pieStartAngle: 100,
        chartArea: {
            width: "90%",
            height: "90%",
            top: 30,
            left: 10,
            right: 10,
            bottom: 10,
        },
    };

    const prepareChartDataClicks = () => {
        const data = [["Ad", "Value"]];
        statisticAds.forEach((ad: any, index) => {
            data.push([ad.title, ad.clicks]);
        });
        return data;
    };

    const optionsClicks = {
        legend: "none",
        pieSliceText: "label",
        title: "Ad Clicks",
        pieStartAngle: 100,
        chartArea: {
            width: "90%",
            height: "90%",
            top: 30,
            left: 10,
            right: 10,
            bottom: 10,
        },
    };

    const prepareChartDataConversions = () => {
        const data = [["Ad", "Value"]];
        statisticAds.forEach((ad: any, index) => {
            data.push([ad.title, ad.conversions]);
        });
        return data;
    };

    const optionsConversions = {
        legend: "none",
        pieSliceText: "label",
        title: "Ad Conversions",
        pieStartAngle: 100,
        chartArea: {
            width: "90%",
            height: "90%",
            top: 30,
            left: 10,
            right: 10,
            bottom: 10,
        },
    };

    const prepareChartDataCTR = () => {
        const data = [["Ad", "Value"]];
        statisticAds.forEach((ad: any, index) => {
            data.push([ad.title, ad.ctr]);
        });
        return data;
    };

    const optionsCTR = {
        legend: "none",
        pieSliceText: "label",
        title: "Ad CTR",
        pieStartAngle: 100,
        chartArea: {
            width: "90%",
            height: "90%",
            top: 30,
            left: 10,
            right: 10,
            bottom: 10,
        },
    };

    return (
        <div>
            {!loading ? (
                <>
                    <Chart
                        chartType="PieChart"
                        data={prepareChartDataImpressions()}
                        options={optionsImpressions}
                        width={"100%"}
                        height={"600px"}
                    />
                    <Chart
                        chartType="PieChart"
                        data={prepareChartDataClicks()}
                        options={optionsClicks}
                        width={"100%"}
                        height={"600px"}
                    />
                    <Chart
                        chartType="PieChart"
                        data={prepareChartDataConversions()}
                        options={optionsConversions}
                        width={"100%"}
                        height={"600px"}
                    />
                    <Chart
                        chartType="PieChart"
                        data={prepareChartDataCTR()}
                        options={optionsCTR}
                        width={"100%"}
                        height={"600px"}
                    />
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}
