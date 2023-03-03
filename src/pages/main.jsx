import AnimalsSlider from "../companents/animals_slider";
import AnimalCard from "../companents/animal_card";
import SubscribeForm from "../companents/forms/subscribe_news";

const Main = () => {
    return (
        <div>
            
            <AnimalsSlider/>
            <h2 className="fs-1 p-5">Найденные животные</h2>
            <AnimalCard edit_hidden="hidden"/>
            <h2 className="fs-1 p-5">Подписаться на новости</h2>
            <SubscribeForm />
            
        </div>
    );
};

export default Main;