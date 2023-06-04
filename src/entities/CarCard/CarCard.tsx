import Card from "@components/shared/ui-kit/Card";
import { ICar } from "@models/car";
import { FC } from "react";
import cl from "./CarCard.module.sass";
import Link, { LinkViews }  from "@components/shared/ui-kit/Link"; 

type Props = {
  car: ICar;
  image: string;
};

export const CarCard: FC<Props> = ({ car, image }) => {
  return (
    <Card>
      <div className={cl.card}>
        <div className={cl["card__image-wrapper"]}>
          <img src={image} alt="car" className={cl.card__image} />
        </div>
        <div className={cl.card__content}>
          <div className={cl.card__header}>
            <span className={cl.card__title}><Link page={"car" + "/" + car.id.toString()} view={LinkViews.defaultView}>{car.name}</Link></span>
            <span className={cl.card__price}>
              {car.price.toString().split("000").join(" 000")} р
            </span>
          </div>
          <div className={cl.card__footer}>
            <span>Пробег: {car.mileage} / Год выпуска: {car.year}</span>
            <span>{car.model}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
