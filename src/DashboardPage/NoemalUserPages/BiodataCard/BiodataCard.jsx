
const BiodataCard = ({ biodata }) => {

    const { _id, Email } = biodata

    console.log(biodata,Email,_id)

    return (
        <div>
            <p>{Email}</p>
        </div>
    );
};

export default BiodataCard;