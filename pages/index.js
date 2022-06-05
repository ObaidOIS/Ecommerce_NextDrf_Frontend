import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header';
import Link from 'next/link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  example: {
    color: "#ccc",
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0',
  },
}));

function Home({ posts }) {

  const classes = useStyles();

  return (
    <>
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={2}>
            {console.log(posts)}
            {posts.map((post) => (
              <Link key={post.id} href={'/'}>
                <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card} elevation={0}>
                    <CardMedia></CardMedia>
                    <CardContent>
                      <Typography gutterBottom component="p">
                        {post.title}
                      </Typography>
                      <Box component="p" fontSize={16} fontWeight={900}>
                        ${post.regular_price}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/api/")
  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
}
export default Home