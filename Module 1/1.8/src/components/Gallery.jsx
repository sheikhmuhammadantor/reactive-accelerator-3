import Profile from "./Profile";

export default function Gallery(abc) {
    return (
        <div>
            <h2>Gallery Component</h2>
            <Profile {...abc} size={10} />
        </div>
    );
}