import { katsuko, maria } from "../data/userData";
import Profile from "./Profile";

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientises</h1>
            <div className="my-10">
                <Profile {...maria} />
                <Profile {...katsuko} />
            </div>
        </div>
    );
}