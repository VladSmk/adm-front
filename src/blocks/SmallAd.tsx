import React from 'react';
import { Link } from 'react-router-dom';
import './SmallAd.css';

const SmallAd = ({ ad }: { ad: any }) => {
    const formatTimeAgo = (createdAt: string) => {
        const date = new Date(createdAt);
        const now = new Date();
        const diffMilliseconds = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
        return `${diffHours} hours ago`;
    };

    return (
        <Link to={`/ad/${ad.id}`} className="small-ad">
            <div className="ad-image">
                {ad.picturePath && (
                    <img src={ad.picturePath} alt={ad.title} />
                )}
            </div>
            <div className="ad-details">
                <h2 className="ad-title">{ad.title}</h2>
                <p className="ad-description">{ad.description}</p>
            </div>
            <div className="ad-footer">
                <a href={ad.id} className="ad-link">Read more</a>
                <p className="ad-time">{formatTimeAgo(ad.createdAt)}</p>
            </div>
        </Link>
    );
}

export default SmallAd;
