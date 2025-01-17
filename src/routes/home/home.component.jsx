import Directory from '../../components/directory/directory.component';


const Home = () => {
  
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.postimg.cc/RZVxFppK/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.postimg.cc/8PbVTg4T/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.postimg.cc/LsJdkYps/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.postimg.cc/BnY915Ry/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.postimg.cc/rFTk6wSh/men.png"
    }
  ];
  
  return (
      <Directory categories={categories} />
  ); 
}

export default Home;