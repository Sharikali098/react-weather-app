import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SevereColdIcon from '@mui/icons-material/SevereCold';

export default function InfoBox({info}){
  const InitImg="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  const hotUrl="https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const coldUrl="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const rainUrl="https://media.istockphoto.com/id/462881839/photo/epic-super-cell-storm-cloud.webp?b=1&s=170667a&w=0&k=20&c=SXsdSfVwOFxWdtr6xOWVvSNiIx8Jn7g-rubHkEGoZos="
   
    return(
        <div className="InfoBox">
         <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainUrl: info.temp>15 ? hotUrl :coldUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}
            {info.humidity>80?(<ThunderstormIcon/>) : info.temp>15 ? (<WhatshotIcon/>) :(<SevereColdIcon/>)}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div><b>Temperature:</b>{info.temp}&deg;C</div>
          <div><b>Humidity:</b>{info.humidity}</div>
          <div><b>Pressure:</b>{info.pressure}</div>
          <div><b>FeelsLike:</b>{info.feels_like}</div>
          <div><b>Weather is:</b>{info.weather}</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}