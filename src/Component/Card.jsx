import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Search from './Search';
import { shortenUrl } from './shortenUrl';

export default function BasicCard() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    if (url.trim()) {
      const newShortUrl = shortenUrl(url);
      setShortUrl(newShortUrl);
    } else {
      alert('Please enter a valid URL.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#16181B',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 6,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 6, md: 12 },
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Heading */}
        <Box sx={{ color: 'white', maxWidth: 800 }}>
          <Box component="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 1 }}>
            Shorten your links in seconds
          </Box>
          <Box component="p" sx={{ fontSize: '1rem', color: '#aaa' }}>
            Paste your long URL below and get a short one instantly.
          </Box>
        </Box>

        {/* Card */}
        <Card
          sx={{
            width: '100%',
            maxWidth: 480,
            bgcolor: '#1E1E1E',
            color: 'text.primary',
            borderRadius: 3,
            boxShadow: 4,
            px: 2,
            py: 3,
          }}
        >
          <CardContent sx={{ pb: 1 }}>
            <Search url={url} setUrl={setUrl} />
          </CardContent>

          <CardActions sx={{ justifyContent: 'center', pt: 0 }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleShorten}
              sx={{
                borderRadius: 20,
                fontWeight: 'bold',
                px: 4,
                py: 1,
                marginTop: 2,
                textTransform: 'uppercase',
                fontSize: '0.8rem',
              }}
            >
              Ready
            </Button>
          </CardActions>
        </Card>
      </Box>

      {/* Show Shortened URL Below */}
      {shortUrl && (
        <Box sx={{ mt: 4, color: 'white', fontSize: '1rem', textAlign: 'center' }}>
          Shortened URL:&nbsp;
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4dabf7' }}>
            {shortUrl}
          </a>
        </Box>
      )}
    </Box>
  );
}
// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Search from './Search';
// import { createShortUrl } from './shortenUrl';

// export default function BasicCard() {
//   const [url, setUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');

//   const handleShorten = () => {
//     if (url.trim()) {
//       const newShortUrl = createShortUrl(url);
//       setShortUrl(newShortUrl);
//     } else {
//       alert('Please enter a valid URL.');
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: '#16181B',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         px: 2,
//         py: 6,
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           gap: { xs: 6, md: 12 },
//           alignItems: 'center',
//           textAlign: { xs: 'center', md: 'left' },
//         }}
//       >
//         {/* Heading */}
//         <Box sx={{ color: 'white', maxWidth: 800 }}>
//           <Box component="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 1 }}>
//             Shorten your links in seconds
//           </Box>
//           <Box component="p" sx={{ fontSize: '1rem', color: '#aaa' }}>
//             Paste your long URL below and get a short one instantly.
//           </Box>
//         </Box>

//         {/* Card */}
//         <Card
//           sx={{
//             width: '100%',
//             maxWidth: 480,
//             bgcolor: '#1E1E1E',
//             color: 'text.primary',
//             borderRadius: 3,
//             boxShadow: 4,
//             px: 2,
//             py: 3,
//           }}
//         >
//           <CardContent sx={{ pb: 1 }}>
//             <Search url={url} setUrl={setUrl} />
//           </CardContent>

//           <CardActions sx={{ justifyContent: 'center', pt: 0 }}>
//             <Button
//               variant="contained"
//               endIcon={<SendIcon />}
//               onClick={handleShorten}
//               sx={{
//                 borderRadius: 20,
//                 fontWeight: 'bold',
//                 px: 4,
//                 py: 1,
//                 marginTop: 2,
//                 textTransform: 'uppercase',
//                 fontSize: '0.8rem',
//               }}
//             >
//               Ready
//             </Button>
//           </CardActions>
//         </Card>
//       </Box>

//       {/* Show Shortened URL Below */}
//       {shortUrl && (
//         <Box sx={{ mt: 4, color: 'white', fontSize: '1rem', textAlign: 'center' }}>
//           Shortened URL:&nbsp;
//           <a href={shortUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4dabf7' }}>
//             {shortUrl}
//           </a>
//         </Box>
//       )}
//     </Box>
//   );
// }

