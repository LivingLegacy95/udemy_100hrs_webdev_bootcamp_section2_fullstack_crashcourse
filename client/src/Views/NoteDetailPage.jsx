import { LoaderIcon } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router";

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
    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center jusitfy-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-base-200">
            <h1>DetailPage</h1>
        </div>
    );
};

export default NoteDetailPage;
