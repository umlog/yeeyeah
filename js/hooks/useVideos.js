// ===========================================
// useVideos Hook - Firestore 비디오 CRUD
// ===========================================

const useVideos = () => {
    const [videos, setVideos] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = db.collection('videos')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                const videoList = snapshot.docs.map(doc => ({
                    docId: doc.id,
                    ...doc.data()
                }));
                setVideos(videoList);
            });
        return () => unsubscribe();
    }, []);

    const addVideo = async (videoData) => {
        await db.collection('videos').add({
            ...videoData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    };

    const updateVideo = async (docId, videoData) => {
        await db.collection('videos').doc(docId).update(videoData);
    };

    const deleteVideo = async (docId) => {
        await db.collection('videos').doc(docId).delete();
    };

    return { videos, addVideo, updateVideo, deleteVideo };
};
