import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCards() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        {/* Card 1 */}
        <Card
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
            '&:hover': {
              transform: 'scale(1.1)', // Apply subtle scale transformation on hover
            },
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image="https://gttp.images.tshiftcdn.com/222039/x/0/15-best-tourist-spots-in-the-philippines-2.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
            title="Calle Crisologo street in Vigan City"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Calle Crisologo street in Vigan City
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Step into history as you wander down the enchanting street of Calle Crisologo in Vigan City, a gem that absolutely deserves a spot on your itinerary in the Philippines.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
            '&:hover': {
              transform: 'scale(1.1)', // Apply subtle scale transformation on hover
            },
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image="https://gttp.images.tshiftcdn.com/222327/x/0/15-best-tourist-spots-in-the-philippines-3.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
            title="Nacpan Beach in Palawan Island"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nacpan Beach in Palawan Island
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Palawan Island is a world-renowned tropical paradise where you will find enchanting emerald lagoons and pristine islands with towering limestone cliffs. Located in the western part of the Philippines, it is approximately 400 kilometers southwest of Manila City.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
            '&:hover': {
              transform: 'scale(1.1)', // Apply subtle scale transformation on hover
            },
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image="https://gttp.images.tshiftcdn.com/222329/x/0/15-best-tourist-spots-in-the-philippines-5.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
            title="Mayon Volcano in Bicol Region"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mayon Volcano in Bicol Region
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Known as the Philippines' most active volcano, Mayon captivates with its raw beauty and undeniable power, a sight that instantly becomes the highlight of any Bicol region adventure.
            </Typography>
          </CardContent>
        </Card>
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        {/* Card 4 */}
        <Card
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
            '&:hover': {
              transform: 'scale(1.1)', // Apply subtle scale transformation on hover
            },
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image="https://gttp.images.tshiftcdn.com/222141/x/0/15-best-tourist-spots-in-the-philippines-6.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
            title="Intramuros old town in Manila City"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Calle Crisologo street in Vigan City
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Step back in time and explore the storied streets of Intramuros, the iconic walled city and one of the Philippines' most treasured historical landmarks. This 64-hectare Spanish stronghold, built by conquistador Miguel Lopez de Legazpi, stood resilient for centuries until it was ravaged by World War II. 
            </Typography>
          </CardContent>
        </Card>

        {/* Card 5 */}
        <Card
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
            '&:hover': {
              transform: 'scale(1.1)', // Apply subtle scale transformation on hover
            },
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image="https://gttp.images.tshiftcdn.com/222347/x/0/15-best-tourist-spots-in-the-philippines-7.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
            title="Nacpan Beach in Palawan Island"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Taal Volcano and Lake View in Tagaytay City
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Just a couple of hours south of Manila City, about 60 kilometers away, locals often seek a refreshing weekend escape in Tagaytay City, known for its cool weather and family-friendly atmosphere. This scenic destination offers the perfect respite from the city's hustle and bustle.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 6 */}
        <Card
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
            '&:hover': {
              transform: 'scale(1.1)', // Apply subtle scale transformation on hover
            },
          }}
        >
          <CardMedia
            sx={{ height: 100 }}
            image="https://gttp.images.tshiftcdn.com/461371/x/0/15-best-tourist-spots-in-the-philippines-12.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
            title="Mayon Volcano in Bicol Region"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Diving Spots in Cebu Island
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Cebu City, a vibrant hub in the Philippines, has earned a place in UNESCO’s Network of Creative Cities, celebrating its rich cultural heritage. However, the bigger island province of Cebu, where the city is also located, has other must-see treasures that lie beneath its sparkling waters. The island is a haven for marine life enthusiasts and adventure seekers alike.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
