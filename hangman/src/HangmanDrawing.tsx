const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "60px",
      right: "-40px",
    }}
  />
)
const BODY =(
  <div 
  style={{ height:'100px',
   width:'10px',
    position:'absolute',
    background: 'black', 
    top:'120px',
    marginLeft:'320px'}}/>
)

const RIGHT_ARM = (
  <div
  style={{ height:'10px', 
  width:'100px', 
  position:'absolute',
  background: 'black', 
  top:'160px',
  marginLeft:'330px',
  rotate:'-30deg',
  transformOrigin:'left bottom'}}/>
)

const LEFT_ARM = (
  <div
  style={{ height:'10px',
   width:'100px',
    position:'absolute',
    background: 'black',
    top:'160px',
    marginLeft:'220px', 
    rotate:'30deg',
    transformOrigin:'right bottom'}}
  />)

  const RIGHT_LEG = (
    <div
    style={{ height:'10px',
     width:'100px', 
     position:'absolute',
     background: 'black', 
     top:'210px',
     marginLeft:'330px', 
     rotate:'60deg',
     transformOrigin:'left top'}}/>
    )

    const LEFT_LEG = (
      <div
      style={{ height:'10px', 
      width:'100px', 
      position:'absolute',
      background: 'black', 
      top:'210px',
      marginLeft:'220px', 
      rotate:'-60deg',
      transformOrigin:'right top'}}
      />)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps ={
  numberOfGuesses: number;
}
export const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
   
  return <div style={{ position:"relative"}}>
     {BODY_PARTS.slice(0,numberOfGuesses)};
     <div style={{ height:'50px', width:'10px', background: 'black', marginLeft:'320px',position:'absolute'}}/>
    <div style={{ height:'10px', width:'200px', background: 'black', marginLeft:'120px'}}/>
    <div style={{ height:'400px', width:'10px', background: 'black', marginLeft:'120px'}}/>
      <div style={{ height:'10px', width:'250px', background: 'black'}}/>
  </div>
}

