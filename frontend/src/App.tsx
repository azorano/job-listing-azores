/* src/App.tsx */

/* COMPONENTS */
import { common_components } from './components/common/CommonComponents'

/* RENDER APP */
function App() {
  /* THEME */
  const setTheme = 'green'

  /* RENDER */
  return (
    <>
      {/* Set Theme Color */}
      {<common_components.InitialSetup theme={`${setTheme}-theme`} />}

      {/* Hello output message */}
      <h1 className="text-center text-2xl font-bold mt-4">
        Hello, Azores.Work!
      </h1>
    </>
  )
}

export default App
