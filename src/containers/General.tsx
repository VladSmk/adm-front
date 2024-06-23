import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../blocks/Loading";
import ServerDomain from "../const/ServerDomain";
import SmallAd from "../blocks/SmallAd";
import './General.css';

export default function General() {
    const [loading, setLoading] = useState(true);
    const [ads, setAds] = useState([]);

    const findAllAds = async () => {
        try {
            const response = await axios.get(ServerDomain() + "/ad-monitor-api/findAllAdDTOs");
            setAds(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching ads:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        findAllAds();
    }, []);

    return (
        <div className="general">
            {!loading ? (
                <>
                    <h1>General</h1>
                    <div className="small-ad-container">
                        {ads.map((ad: any, index) => (
                            <SmallAd key={index} ad={ad} />
                        ))}
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}
