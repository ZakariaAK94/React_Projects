import Header from './Component/Header'
import Entry from './Component/Entry'
import entryData from './data'

function App() {
  const entryDataElem = entryData.map((entry)=>{
    return <Entry  key={entry.id}
     {...entry}
     />
  })
  return (
    <>
    <Header />
      <main className="container">
           {entryDataElem}
      </main>
    </>
  )
}

export default App

