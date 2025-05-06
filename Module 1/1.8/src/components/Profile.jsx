export default function Profile({ size = 100, ...props }) {
    return (
        <div>
            <div>
                Profile Size = {size} Px
            </div>
            {console.log(props)}
        </div>
    );
}