import Header from "@components/widgets/Header";
import cl from "./App.module.sass";
import { Container } from "@components/shared/ui-kit/Container/Container";
import logo from "@assets/car.jpg";
import  CarCard  from "@components/entities/CarCard";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Container>
        <div className={cl.cards}>
          {Array(100)
            .fill({
              name: "shifjsdfjs", 
              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis asperiores commodi neque suscipit aliquam dolorum exercitationem, ipsum numquam quaerat in voluptatem ex corrupti omnis modi harum natus? Deleniti et odit asperiores reprehenderit cupiditate quod neque repellat iste. Magnam hic ea ducimus aliquid illo aut harum est nostrum iusto odit?",
              id: 1,
              price: 2*10**6,
              year: 2000,
              model: "kia k5",
              mileage: 100000
            })
            .map((el, i) => <CarCard car={{...el, id: i}} image={logo}/>)}
        </div>
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
