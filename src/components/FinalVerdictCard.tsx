import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import safe from '../assets/danger.json';
import danger from '../assets/safe.json';

interface PredictionCardProps {
  finalPrediction: string;
}

const CardWrapper = styled(Card)({
  position: 'relative',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  width: '500px', // Set the width
  height: '250px',
  '&:hover': {
    transform: 'scale(1.05) translateZ(10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const LottieWrapper = styled(Lottie)({
  width: '300px',
  height: '200px',
  position: 'relative', // Add relative positioning
  left: '-3px',
});

const FinalVerdictCard: React.FC<PredictionCardProps> = ({ finalPrediction }) => {
    const isBenign = finalPrediction?.toLowerCase() === 'benign';
    const backgroundColor = isBenign ? '#ccffcc' : '#ffcccc';
    const textColor = isBenign ? 'green' : 'red';
  
    return (
      <CardWrapper sx={{ backgroundColor:'#fff', color: '#fff' }}>
        <CardContent>
          <Grid container justifyContent="center" alignItems="center" spacing={1}>
            {/* Lottie Animation */}
            <Grid item sm={6} xs={12}>
              {isBenign ? (
                <LottieWrapper animationData={safe} loop={true} autoplay={true} />
              ) : (
                <LottieWrapper animationData={danger} loop={true} autoplay={true} />
              )}
            </Grid>
            
            {/* Text Content */}
            <Grid item sm={6} xs={12}>
              <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item sm={12}>
                  <Typography variant="h3" align="center" color={textColor}>
                    {finalPrediction?.charAt(0).toUpperCase() + finalPrediction?.slice(1)}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="body1" align="center" color="#000">
                    {'Final Verdict'}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardWrapper>
    );
  };
  
  export default FinalVerdictCard;
