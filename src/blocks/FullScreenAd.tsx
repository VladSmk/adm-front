import React, { useEffect, useState } from "react";
import axios from "axios";
import ServerDomain from "../const/ServerDomain";
import Loading from "./Loading";
import './FullScreenAd.css';

interface Ad {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    picturePath: string;
    impressions: number;
    clicks: number;
    ctr: number;
    conversions: number;
}

interface FullScreenAdProps {
    id: string;
}

export default function FullScreenAd({ id }: FullScreenAdProps) {
    const [loading, setLoading] = useState(true);
    const [ad, setAd] = useState<Ad | null>(null);

    const findAdById = async () => {
        try {
            const response = await axios.get<Ad>(ServerDomain() + "/ad-monitor-api/findAdById?id=" + id);
            setAd(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching ad:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        findAdById();
    }, [id]);

    return (
        <div className="fullscreen-ad">
            {!loading ? (
                <>
                    {ad ? (
                        <div className="ad-details">
                            <h1 className="ad-title">{ad.title}</h1>
                            <img src={ad.picturePath} alt={ad.title} className="ad-image"/>
                            <p className="ad-description">{ad.description}</p>
                            <div className="ad-stats">
                                <p><strong>Impressions:</strong> {ad.impressions}</p>
                                <p><strong>Clicks:</strong> {ad.clicks}</p>
                                <p><strong>CTR:</strong> {ad.ctr}%</p>
                                <p><strong>Conversions:</strong> {ad.conversions}</p>
                                <p><strong>Created At:</strong> {new Date(ad.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Ad not found</p>
                    )}
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}
