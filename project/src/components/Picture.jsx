

const Picture = ({ item }) => {
    return (
      <div className="picture">
        <div className="imageContainer">
          <img src={item.src.large} alt="" />
        </div>
        <div className="info">
          <p>{item.photographer}</p>
        </div>
      </div>
    );
  };
  
  export default Picture;