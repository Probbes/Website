import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CustomCard(props) {
    return(
    <Card sx={{width:"97%", height:"100%", backgroundColor:"primary.main", border:5, borderColor:"secondary.main", borderRadius:5}}>
      <CardMedia sx={{height:"40vh" }} image={props.img}/>
      <CardContent >
        <Typography sx={{fontSize:"2.5em", textAlign:"center"}}>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
    );
}

export default CustomCard;