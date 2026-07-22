import { ArrowLeftIcon, LoaderIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams, Link, useEffect } from "react-router";
import api from "../lib/axios.js";
import axios from "axios";

const NoteDetailPage = () => {
    const [note, setNote] = useState("null");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false)
    const navigate = useNavigate();
    const { id } = useParams()
    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await api.get(`/notes/${id}`)
                setNote(res.data)
            } catch (error) {
                toast.error("Failed to fetch the note")
                console.log("Failed to fetch the note", error)
            }
        };
        fetchNote();
    }, [id])
    const handleDelete = () => { }
    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center jusitfy-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className=" container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" className="btn btn-ghost">
                            <ArrowLeftIcon className="h-5 w-5" />
                            Back to Notes
                        </Link>
                        <button onClick={handleDelete} className="btn btn-error btn-outline">
                            <Trash2Icon className="h-5 w-5" />
                            Delete Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteDetailPage;
