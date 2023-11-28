import data from "../helper/data";
import Picture from "../components/Picture"

const Homepage = () => {
  return <div style={{minHeight:"100vh"}}>
    <h1> My Albums</h1>
    <div className="pictures">
    {data.map((item) => <Picture item={item} />)};
    </div>
  </div>
// return data.map(item => {
//     return<>
//         <img src={item.src.large} alt="" />
//         <p>{item.photographer}</p>
//     </>
// })
};

export default Homepage;