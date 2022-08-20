import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';

import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

/*
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
*/

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-ffb8b-default-rtdb.firebaseio.com/meals.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          description: responseData[key].name,
          name: responseData[key].description,
          price: responseData[key].price
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <section >
      <p className={styles.MealsLoading}>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section >
      <p className={styles.MealsError}>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals