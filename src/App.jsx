import './App.css'
import Usercard from './components/usercard/Usercard'
import Infocard from './components/infocard/Infocard'


export default function App() {
  return (
    <div>
      <div className="ota container">
        <Usercard props={{
          ism:"Emily Johnson",
          lavozim:"Product Manager",
          kasbi:"Product Development",
          bg:"#FCF2E5",
        }}
        />
        <Usercard props={{
          ism:"Arjun Patel",
          lavozim:"Software Engineer",
          kasbi:"Technology",
          bg:"#FCF2E5",
        }}
        />
        <Usercard props={{
          ism:"Carlos Hernández",
          lavozim:"UI Designer",
          kasbi:"Design",
          bg:"#FCF2E5",
        }}
        />
        <Usercard props={{
          ism:"Amina Idris",
          lavozim:"Marketing Specialist",
          kasbi:"Marketing",
          bg:"#FCF2E5",
        }}
        />
        <Usercard props={{
          ism:"Takumi Sato",
          lavozim:"HR Specialist",
          kasbi:"Human Resources",
          }}
          />
           <Usercard props={{
          ism:"Chen Wei",
          lavozim:"Data Analyst",
          kasbi:"Data Science",
          }}
          />
           <Usercard props={{
          ism:"Emma Dubois",
          lavozim:"Sales Manager",
          kasbi:"Sales",
          }}
          />
           <Usercard props={{
          ism:"Igor Sokolov",
          lavozim:"Quality Assurance",
          kasbi:"Quality Control",
          }}
          />
          <h1>Info Card</h1>
          <Infocard props ={{
          h3:"Unraveling the Mysteries of the Ocean",
          p:"From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.",
          btn:"Read now"
          }}
           />
          <Infocard props ={{
          h3:"Unraveling the Mysteries of the Ocean",
          p:"From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.",
          btn:"Read now"
          }}
           />
          <Infocard props ={{
          h3:"Unraveling the Mysteries of the Ocean",
          p:"From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.",
          btn:"Read now"
          }}
           />
       
      </div>
    </div>
  )
}
