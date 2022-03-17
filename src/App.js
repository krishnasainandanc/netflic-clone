import React from 'react'
import './App.css'
import re from './REQUEST/Request';
import Rows from './Components/Rows';
import Banner from './Components/Banner';

function App() {
  // useEffect(()=>{
  //  async function fetchData()
  //  { 
  //    const request=await axios.get(re.fetchActionMovies);
  //     console.log(request.data.results)
  //   }
  //  fetchData()

  // // axios
  // //   .get(re.fetchActionMovies)
  // //   .then((res)=>{
  // //     console.log(res.data.results)
  // //   })
  //  },[])
  
   return (
    <div className="App">
      <Banner/>
      <Rows title='NETFLIX ORIGINALS' fetchRequest={re.fetchNetflixOriginals} isLarge={true}/>
      <Rows title='TRENDING NOW' fetchRequest={re.fetchTrending} isLarge={false}/>
      <Rows title='COMEDY MOVIES' fetchRequest={re.fetchComedyMovies} isLarge={false}/>
      <Rows title='HORROR MOVIES' fetchRequest={re.fetchHorrorMovies}/>
      <Rows title='DOCUMENTARIES MOVIES' fetchRequest={re.fetchDocumentaries}/>
      <Rows title='ROMANCE MOVIES' fetchRequest={re.fetchRomanceMovies}/>
      <Rows title='TOP RATED' fetchRequest={re.fetchTopRated}/>
      <Rows title='ACTION MOVIES' fetchRequest={re.fetchActionMovies}/> 

      <h1>krishna</h1>
      <h2>sai</h2>
    </div>
  );
}
export default App;
