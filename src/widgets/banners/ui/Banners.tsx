import React from 'react';
import "./Banners.scss"

export const Banners = () => {
    return (
        <div className="banners">
            <div className="banners__inner">
                <div className="sliderSection">
                    <img className="banner" src="/banners/banner.png" alt="banner" />
                </div>
                <div className="promoSection">
                    <img className="banner" src="/banners/promo_banner.png" alt="banner promo" />
                </div>
            </div>
        </div>
    );
};