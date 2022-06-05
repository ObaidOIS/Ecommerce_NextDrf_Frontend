import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header';

const useStyles = makeStyles((theme) => ({
  example: {
    color: "#ccc",
  }
}));

function Home({ posts }) {

  const classes = useStyles();

  return (
    <>
      <Header />
      {console.log(posts)}
      <div className={classes.example}>
        {posts.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
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