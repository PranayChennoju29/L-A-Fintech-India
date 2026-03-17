"use client";

import { useRef } from "react";

export default function ResumeUpload() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            alert(`Uploaded: ${file.name}`);
            // later you can send it to backend API
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-[260px] border">

            <div className="flex items-center gap-2 text-gray-800 font-medium">
                📄 Quick Submit
            </div>

            <div className="mt-4 text-sm text-gray-500 space-y-2">
                <p>Average Response Time</p>
                <p className="font-medium text-gray-700">Under 24 hours</p>
            </div>

            <div
                onClick={handleClick}
                className="mt-4 flex items-center justify-between text-sm text-gray-600 border-t pt-3 cursor-pointer hover:text-[#8F1FC9] transition"
            >
                Upload Resume (PDF/DOC)
                <span>→</span>
            </div>

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

        </div>
    );
}