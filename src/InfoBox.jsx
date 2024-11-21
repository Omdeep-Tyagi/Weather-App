import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1542300214-3af2f8019965?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let COLD_URL="https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL ="https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let RAIN_URL="https://images.unsplash.com/19/drops.JPG?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      
    //sample data for testing
    // let info={
    //     city:"Delhi",
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     feelsLike: 24.84,
    //     weather: "haze",
    // };

    return (
        <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity=="-" ? INIT_URL : info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{" "}{info.humidity>80 ?(<ThunderstormIcon/>) : info.temp>15 ? ( <WbSunnyIcon/>) : (<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <p>Temperature ={info.temp}&deg;C</p>
            <p>Humidity ={info.humidity}</p>
            <p>Min Temp ={info.tempMin}&deg;C</p>
            <p>Max Temp ={info.tempMax}&deg;C</p>
            <p>
                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
            </p>
        </Typography>
      </CardContent>
    </Card>
            
        </div>
    )
}