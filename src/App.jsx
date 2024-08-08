import Navbar from './components/navBar/Navbar'
import Search from './components/searchBar/Search'
import Bodycontent from './components/bodyContent/Bodycontent'
import Service from './components/serviceContent/Service'
import Project from './components/projectContent/Project'
import About from './components/aboutContent/About'
import './App.css'

function App() {

  const images = [
    'https://corporate-assets.lucid.co/chart/09255df0-f147-42b4-805e-163ad3001feb.png',
    'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg',
    'https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg',
    'https://previews.123rf.com/images/epicfail/epicfail1702/epicfail170200239/72740134-thin-line-design-concept-for-project-website-banner.jpg',
    'https://aecom.com/wp-content/uploads/2021/06/aecom-projects.png'
];

const sections = [
  {
      title: "Our Mission",
      content: "We strive to generate good and healthy software cum hardware projects, much like a master chef crafting a perfectly balanced gourmet meal...",
      link: ""
  },
  {
      title: "Our History",
      content: "Founded in 2024 by some Young innovaters ,who are ready and eager to contribute in software and hardware projects, we mainly focus on web development ...",
      link: ""
  },
  {
      title: "Core Values",
      content: " We uphold the highest standards of integrity in all our actions.We prioritize our customers' needs and strive to exceed their expectations...",
      link: ""
  }
];

  return (
    <div className="container">
      <Navbar/>
      <Search/>
      <Bodycontent/>
      <Service />
      <Project images={images}/>
      <About sections={sections}/>
    </div>
    
  )
}

export default App