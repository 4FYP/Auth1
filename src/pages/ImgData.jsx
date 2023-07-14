import { useParams } from "react-router";


function ImageData(props) {

  const imgStyle = {
    width: "250px",
    height: "250px"
  }


  let userId = useParams();
  const { id } = userId;

  const img = props.Data.filter((ele) => {
    if (ele.id === parseInt(id)) {
      return ele;
    }
  });
  console.log(img);

  return (
    <div>
        <div style={{float: "left", width: "600px"}}>
          <img src={img[0].image} style={imgStyle} />
        </div>
        
        <div style={{float: "left",width: "400px"}}>
            <strong style={{fontSize: "40px"}}>{img[0].name}</strong> <br/>
            <strong style={{fontSize: "24px"}}>{img[0].price}</strong>
        </div>
    </div>
  );
}

export default ImageData;
