import { useAtom } from 'jotai'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { themeAtom } from './main';

function getTodos() {
  return Promise.resolve([
    { name: 'test1' },
    { name: 'test2' },
    { name: 'test3' },
  ])
}



function App() {

  const [theme] = useAtom(themeAtom);

  //const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  return (
    <>
      <h3>Theme: {theme}</h3>
      <h2>Todos</h2>
      <ul>
        {data?.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
