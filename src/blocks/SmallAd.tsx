import React from 'react';
import { Link } from 'react-router-dom';
import './SmallAd.css';

interface SmallAdProps {
    ad: {
        id: number;
        title: string;
        description: string;
        picturePath: string;
        createdAt: string;
    };
}

const SmallAd = ({ ad }: SmallAdProps) => {
    const formatTimeAgo = (createdAt: string) => {
        const date = new Date(createdAt);
        const now = new Date();
        const diffMilliseconds = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
        return `${diffHours} hours ago`;
    };

    return (
        <div className="small-ad">
            <div className="ad-image">
                {ad.picturePath && (
                    <img src={ad.picturePath} alt={ad.title} />
                )}
            </div>
            <Link to={`/ad/${ad.id}`} className="ad-title-link">
                <h2 className="ad-title">{ad.title}</h2>
            </Link>
            <p className="ad-description">{ad.description}</p>
            <div className="ad-footer">
                <Link to={`/ad/${ad.id}`} className="ad-link">Read more</Link>
                <p className="ad-time">{formatTimeAgo(ad.createdAt)}</p>
            </div>
        </div>
    );
}

export default SmallAd;
