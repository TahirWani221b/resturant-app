import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Burger',
        description: 'Juicy beef patty with cheese',
        price: 12.99
    },
    {
        id: 'm3',
        name: 'Pizza',
        description: 'Delicious cheese and tomato pizza',
        price: 15.99
    },
    {
        id: 'm4',
        name: 'Pasta',
        description: 'Classic pasta with marinara sauce',
        price: 10.99
    },
    {
        id: 'm5',
        name: 'Steak',
        description: 'Tender grilled steak with seasoning',
        price: 19.99
    },
    {
        id: 'm6',
        name: 'Salad',
        description: 'Fresh garden salad with dressing',
        price: 8.99
    },
    {
        id: 'm7',
        name: 'Chicken Curry',
        description: 'Spicy chicken curry with rice',
        price: 13.99
    },
    {
        id: 'm8',
        name: 'Sandwich',
        description: 'Classic sandwich with ham and cheese',
        price: 7.99
    }
];

const availableMeals = () => {
    return (
        <Card>
            <section className={`${classes.meals}`}>
                <ul>
                    {
                        DUMMY_MEALS.map(
                            (meal) => (
                                <MealItem
                                    key={meal.id}
                                    id={meal.id}
                                    name={meal.name}
                                    description={meal.description}
                                    price={meal.price} />
                            )
                        )
                    }
                </ul>
            </section>
        </Card>
    );
}

export default availableMeals;