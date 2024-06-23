"use client";
import { HashLoader } from "react-spinners";
import "./Loading.css";

export default function Loading() {
    return (
        <div className="loading-container">
            <HashLoader
                color="#494949"
                size={60}
                speedMultiplier={1.1}
            />
        </div>
    );
}
