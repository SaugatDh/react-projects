import List from './List.jsx'

function App() {
    const fruits = [{id:1,name:"apple",calories:95},
                    {id:2,name:"orange",calories:45},
                    {id:3,name:"banana",calories:105},
                    {id:4,name:"coconut",calories:159},
                    {id:5,name:"pineapple",calories:37}];
    
        const vegetables = [{id:6,name:"pumpkin",calories:110},
                            {id:7,name:"carrots",calories:15},
                            {id:8,name:"potato",calories:25},
                            {id:9,name:"celery",calories:65},
                            {id:9,name:"corn",calories:70}];
    return(<>
    {fruits.length>0 && <List items={fruits}  category="Fruits"/>}
        {vegetables.length>0&&<List items={vegetables} category="Vegetables" />}
    </>
    )
  

}

export default App
